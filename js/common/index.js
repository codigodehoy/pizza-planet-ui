import { get } from './crud.js'

export async function insertDataToTable(endpointName, template, tableId) {
  const data = await get(endpointName)
  let rows = data.map(element => createTemplate(element, template));
  let table = $(`${tableId} tbody`);
  table.append(rows);
}

function createTemplate(product, _template) {
  let template = $(_template)[0].innerHTML;
  return Mustache.render(template, product);
}

//  Shows a notification when the product is accepted
export function showNotification(elementById) {
  let ingredientAlert = $(elementById);
  ingredientAlert.toggle();
  setTimeout(() => ingredientAlert.toggle(), 5000);
}

// retrieve the product data for a specific _id from the backend API
export async function loadInformation(urlSearch, idInput, nameInput, priceInput, endpoint) {
  try {
    const urlParams = new URLSearchParams(urlSearch);
    const _id = urlParams.get('_id');
    const data = await get(`${endpoint}/id/${_id}`);
    idInput.val(data._id);
    nameInput.val(data.name);
    priceInput.val(data.price);
  } catch (error) {
    console.error('Error loading information:', error);
  }
}

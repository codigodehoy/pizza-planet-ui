import { postData } from './common/crud.js'
import { insertDataToTable } from './common/index.js'
import { handleSubmitForm } from './common/formSubmit.js'
import { ENDPOINT_BEVERAGE } from './beverage/beverage.js'
import { ENDPOINT_INGREDIENT } from './ingredient/ingredient.js'
import { ENDPOINT_SIZE } from './size/size.js'

const ENDPOINT_ORDER = "order"
const ORDER_FORM = $("#order-form");
/**
 * POST the order on /pizza
 * @param order 
 */


// Get the form and submit it with fetch API
ORDER_FORM.submit((eventSubmit) => {
    handleSubmitForm(eventSubmit, ORDER_FORM, `${ENDPOINT_ORDER}/create`, "#order-alert", postData)
});

// Gather information in a dynamic way
function loadInformation() {
    insertDataToTable(ENDPOINT_INGREDIENT, "#ingredients-template", "#ingredients");
    insertDataToTable(ENDPOINT_SIZE, "#sizes-template", "#sizes");
    insertDataToTable(ENDPOINT_BEVERAGE, "#beverages-template", "#beverages")
}

document.addEventListener("DOMContentLoaded", loadInformation);

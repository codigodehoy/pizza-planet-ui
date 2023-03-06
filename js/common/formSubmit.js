import { showNotification } from '../common/index.js'

const getFormData = (form) => {
  const product = ["ingredients", "beverages"]
  const formData = form.serializeArray();
  const data = {};
  formData.forEach(({name, value}) => {
    if(product.includes(name)) {
      data[name] = data[name] || [];
      data[name].push(value);
      return
    }

    data[name] = value;
  })
  return data;
}

export const handleSubmitForm = async(event, form, endpoint, successAlert, dataOperator) => {
  // get form data
  const productValues = getFormData(form);

  event.preventDefault();

  // send data to backend
  await dataOperator(productValues, endpoint);

  // show success notification
  showNotification(successAlert)
  event.currentTarget.reset();
}

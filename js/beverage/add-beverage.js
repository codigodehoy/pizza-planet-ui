import { postData } from '../common/crud.js'
import { handleSubmitForm } from '../common/formSubmit.js'
import { ENDPOINT_BEVERAGE, BEVERAGE_FORM } from './beverage.js'

 
// Call handleSubmitForm on form submit event
BEVERAGE_FORM.submit((submitEvent) => {
  handleSubmitForm(submitEvent, BEVERAGE_FORM, `${ENDPOINT_BEVERAGE}/create`, "#beverage-alert", postData)
});

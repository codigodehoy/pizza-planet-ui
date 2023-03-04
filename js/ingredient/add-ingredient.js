import { postData } from '../common/crud.js'
import { handleSubmitForm } from '../common/formSubmit.js'
import { ENDPOINT_INGREDIENT, INGREDIENT_FORM } from './ingredient.js'

// Call handleSubmitForm on form submit event
INGREDIENT_FORM.submit((submitEvent) => {
  handleSubmitForm(submitEvent, INGREDIENT_FORM, `${ENDPOINT_INGREDIENT}/create`, "#ingredient-alert", postData)
});

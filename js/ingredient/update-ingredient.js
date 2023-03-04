import { putData } from '../common/crud.js'
import { loadInformation } from '../common/index.js'
import { ENDPOINT_INGREDIENT, INGREDIENT_FORM } from './ingredient.js'
import { handleSubmitForm } from '../common/formSubmit.js'

const ID_INPUT = $("#_id")
const NAME_INPUT = $("#name")
const PRICE_INPUT = $("#price")

//  Get the form and submit it with fetch API
INGREDIENT_FORM.submit((eventSubmit) => {
    handleSubmitForm(eventSubmit, INGREDIENT_FORM, `${ENDPOINT_INGREDIENT}/update`, "#ingredient-alert", putData);
})

document.addEventListener("DOMContentLoaded", () => {
    loadInformation(window.location.search, ID_INPUT, NAME_INPUT, PRICE_INPUT, ENDPOINT_INGREDIENT)
});

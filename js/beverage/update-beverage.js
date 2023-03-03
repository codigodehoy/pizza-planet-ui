import { put } from '../common/crud.js'
import { loadInformation } from '../common/index.js'
import { ENDPOINT_BEVERAGE, BEVERAGE_FORM } from './beverage.js'
import { handleSubmitForm } from '../common/formSubmit.js'

const ID_INPUT = $("#_id")
const NAME_INPUT = $("#name")
const PRICE_INPUT = $("#price")

//  Get the form and submit it with fetch API
BEVERAGE_FORM.submit((eventSubmit) => {
    handleSubmitForm(eventSubmit, BEVERAGE_FORM, `${ENDPOINT_BEVERAGE}/update`, "#beverage-alert", put);
})

document.addEventListener("DOMContentLoaded", () => {
    loadInformation(window.location.search, ID_INPUT, NAME_INPUT, PRICE_INPUT, ENDPOINT_BEVERAGE)
});

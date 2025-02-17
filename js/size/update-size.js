import { putData } from '../common/crud.js'
import { loadInformation } from '../common/index.js'
import { ENDPOINT_SIZE, SIZE_FORM } from './size.js'
import { handleSubmitForm } from '../common/formSubmit.js'

const ID_INPUT = $("#_id")
const NAME_INPUT = $("#name")
const PRICE_INPUT = $("#price")

//  Get the form and submit it with fetch API
SIZE_FORM.submit((eventSubmit) => {
    handleSubmitForm(eventSubmit, SIZE_FORM, `${ENDPOINT_SIZE}/update`, "#size-alert", putData);
})

document.addEventListener("DOMContentLoaded", () => {
    loadInformation(window.location.search, ID_INPUT, NAME_INPUT, PRICE_INPUT, ENDPOINT_SIZE)
});

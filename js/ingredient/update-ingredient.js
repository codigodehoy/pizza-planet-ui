import { get, put } from '../common/crud.js'
import { ENDPOINT_INGREDIENT, INGREDIENT_FORM } from './ingredient.js'
import { handleSubmitForm } from '../common/formSubmit.js'

const ID_INPUT = $("#_id")
const NAME_INPUT = $("#name")
const PRICE_INPUT = $("#price")

async function loadInformation() {
    let urlParams = new URLSearchParams(window.location.search);
    let _id = urlParams.get('_id');
    const data = await get(`${ENDPOINT_INGREDIENT}/id/${_id}`)
    ID_INPUT.val(data._id)
    NAME_INPUT.val(data.name)
    PRICE_INPUT.val(data.price)
}

//  Get the form and submit it with fetch API
INGREDIENT_FORM.submit((eventSubmit) => {
    handleSubmitForm(eventSubmit, INGREDIENT_FORM, `${ENDPOINT_INGREDIENT}/update`, "#ingredient-alert", put);
})

document.addEventListener("DOMContentLoaded", loadInformation);

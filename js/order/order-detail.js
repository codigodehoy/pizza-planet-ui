import { getData } from '../common/crud.js'
import { ENDPOINT_ORDER } from './orders.js'

let urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

/**
 * Find the template tag and populate it with the data
 * @param order
*/
async function createRowTemplate() {
    const order = await getData(`${ENDPOINT_ORDER}/id/${_id}`);
    let template = $("#order-template")[0].innerHTML;
    const rendered = Mustache.render(template, order);
    $("#order").append(rendered);
}

document.addEventListener('DOMContentLoaded', createRowTemplate);

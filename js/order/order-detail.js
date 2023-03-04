import { getData } from '../common/crud.js'
import { endpointOrder } from './orders.js'

let urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

/**
 * Find the template tag and populate it with the data
 * @param order
*/
async function createRowTemplate() {
    const order = await getData(`${endpointOrder}/id/${_id}`);
    let template = $("#order-template")[0].innerHTML;
    const rendered = Mustache.render(template, order);
    $("#order").append(rendered);
}

document.addEventListener('DOMContentLoaded', createRowTemplate);

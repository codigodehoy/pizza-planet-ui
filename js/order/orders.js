import { insertDataToTable } from '../common/index.js'

export const ENDPOINT_ORDER = "order";
const ingredientTemplate = "#order-item-template";
const tableId = "#orders";

document.addEventListener("DOMContentLoaded", insertDataToTable(ENDPOINT_ORDER, ingredientTemplate, tableId));

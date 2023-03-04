import { insertDataToTable } from '../common/index.js'

export const ENDPOINT_BEVERAGE = "beverage";
export const BEVERAGE_FORM = $("#beverage-form");
const BEVERAGE_TEMPLATE = "#beverage-item-template";
const TABLE_ID = "#beverage";


document.addEventListener('DOMContentLoaded', () => insertDataToTable(ENDPOINT_BEVERAGE, BEVERAGE_TEMPLATE, TABLE_ID));

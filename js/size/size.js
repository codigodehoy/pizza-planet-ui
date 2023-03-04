import { insertDataToTable } from '../common/index.js'

export const ENDPOINT_SIZE = "size";
export const SIZE_FORM = $("#size-form");
const sizeTemplate = "#size-item-template";
const tableId = "#sizes";

document.addEventListener('DOMContentLoaded', () => insertDataToTable(ENDPOINT_SIZE, sizeTemplate, tableId));

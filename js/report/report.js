import { insertDataToTable } from '../common/index.js'

const REPORT_INGREDIENT = 'order-detail/report/ingredient';
const REPORT_MONTH = 'order/report/month';
const REPORT_CUSTOMERS = 'order/report/customers';

function loadInformation() {
  insertDataToTable(REPORT_INGREDIENT, "#report-ingredient-template", "#report-ingredient");
  insertDataToTable(REPORT_MONTH, "#report-month-template", "#report-month");
  insertDataToTable(REPORT_CUSTOMERS, "#report-customers-template", "#report-customers");
}

document.addEventListener("DOMContentLoaded", loadInformation);

import { insertDataToTable } from '../common/index.js'

export const ENDPOINT_INGREDIENT = "ingredient";
export const INGREDIENT_FORM = $("#ingredient-form");
const ingredientTemplate = "#ingredient-item-template";
const tableId = "#ingredients";

document.addEventListener('DOMContentLoaded', () => insertDataToTable(ENDPOINT_INGREDIENT, ingredientTemplate, tableId));

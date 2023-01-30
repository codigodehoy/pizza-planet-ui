
async function postIngredient(ingredient) {
    const response = await fetch('http://127.0.0.1:5000/ingredient/', {
        method: 'POST',
        body: JSON.stringify(ingredient),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    })
    return response; 
}

/**
 * Get the form and submit it with fetch API
 */
const ingredientForm = $("#ingredient-form");

ingredientForm.submit(async (event) => {
    let ingredient = getIngredientData();
    await postIngredient(ingredient);
    event.preventDefault();
    event.currentTarget.reset();
});



/**
 * Gets the order data with JQuery
 */
function getIngredientData() {

    return {
        name: $("input[name='name']").val(),
        price: $("input[name='price']").val(),
    };
}

/**
 * Shows a notification when the order is accepted
 */
function showNotification() {
    let ingredientAlert = $("#ingredient-alert");
    ingredientAlert.toggle();
    setTimeout(() => ingredientAlert.toggle(), 5000);
}
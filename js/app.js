function getInputById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}

function setElement(elementId, value) {
    const totalElement = document.getElementById(elementId);
    const totalElementString = totalElement.innerText;
    const totalElementAmount = parseFloat(totalElementString);
    totalElement.innerText = value;
    return totalElementAmount;
}
document.getElementById('btn-calculate').addEventListener('click', function () {

    // income
    const income = getInputById('income-field');


    // expenses
    const foodExpense = getInputById('food-field');
    const rentExpense = getInputById('rent-field');
    const clothExpense = getInputById('cloth-field');
    const expenses = foodExpense + rentExpense + clothExpense;

    /* validation */
    if (isNaN(expenses) == true || rentExpense < 0 || foodExpense < 0 || clothExpense < 0) {
        getInputById();
    }

    const setTotalExpenses = setElement('total-expenses', expenses);

    // balance
    const totalBalance = income - expenses;

    /* validation */
    if (isNaN(totalBalance) == true || income < 0) {
        getInputById();
    }

    const setTotalBalanceAmount = setElement('total-balance', totalBalance);

    document.getElementById('btn-save').addEventListener('click', function () {
        const income = getInputById('income-field');
        const saveField = getInputById('save-field');
        const saveFieldPercentage = saveField / 100;
        const savedAmount = income * saveFieldPercentage;
        const setSavingAmount = setElement('saving-amount', savedAmount);

        const remainingBalanceField = totalBalance - savedAmount;
        const setRemainingBalance = setElement('remaining-balance', remainingBalanceField);

    })
})

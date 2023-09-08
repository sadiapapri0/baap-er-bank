/*

1. add event handler to the withdraw button
2. get the withdraw amount
2-5. convert string withdraw amount to a number type
3. clear the withdraw input field

4. get the previous withdraw total amount
4-5. convert string previous withdraw amount to a number type

5. get the previous balance total amount
5-5. convert string previous balance amount to a number type

6. make sure the input withdraw amount is less than previous balance amount 

7. calculate new withdraw amount and update the amount to the withdraw total element

8. Calculate new balance amount and update the amount to the balance total element

*/

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step-4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('baap er bank e eto taka nei');
        return;
    }

    // step-7
    const currentWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawAmount;

    // step-8
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

})
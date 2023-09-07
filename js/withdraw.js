/*

1. add event handler to the withdraw button
2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input value into a number by using parseFloat
3. get previous total withdraw

4. calculate total withdraw amount
4-5. set total withdraw amount

5. get the previous total balance
6. calculate new total balance
6-5. set the new total balance

7. clear the input field

*/

// step-1: 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;

    // step-2.5:
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3:
    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalAmount.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-4: 
    const currentWithdrawAmount = previousWithdrawTotal + newWithdrawAmount;

    // step-4.5:
    withdrawTotalAmount.innerText = currentWithdrawAmount;

    // step-5: 
    const balanceRate = document.getElementById('balance-total');
    const previousBalanceRateString = balanceRate.innerText;
    const previousBalanceRate = parseFloat(previousBalanceRateString);

    // step-6:
    const currentBalanceRate = previousBalanceRate - newWithdrawAmount;

    // step-6.5:
    balanceRate.innerText = currentBalanceRate;

    // step-7:
    withdrawField.value = '';

})
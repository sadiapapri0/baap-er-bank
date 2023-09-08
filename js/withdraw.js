/*

1. add event handler to the withdraw button
2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input value into a number by using parseFloat
3. clear the input field

3-5. get previous total withdraw

4. calculate total withdraw amount
4-5. set total withdraw amount

5. get the previous total balance
6. calculate new total balance
6-5. set the new total balance


*/

// step-1: 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;

    // step-2.5:
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);

    // step-3:
    withdrawField.value = '';

    // -------------------------------->
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a vilid number');
        return;
    }

    // step-3-5:
    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalAmount.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    // step-5: 
    const balanceRate = document.getElementById('balance-total');
    const previousBalanceRateString = balanceRate.innerText;
    const previousBalanceRate = parseFloat(previousBalanceRateString);


    if (newWithdrawAmount > previousBalanceRate) {
        alert('Baap er Bank e eto Taka nei');
        return;
    }

    // step-4: 
    const currentWithdrawAmount = previousWithdrawTotal + newWithdrawAmount;

    // step-4.5:
    withdrawTotalAmount.innerText = currentWithdrawAmount;

    // step-6:
    const currentBalanceRate = previousBalanceRate - newWithdrawAmount;

    // step-6.5:
    balanceRate.innerText = currentBalanceRate;

})
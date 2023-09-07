// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: get the deposit amount from the deposit input field
    // For input field use .value to get the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepostitAmountString = depositField.value;
    const newDepostitAmount = parseFloat(newDepostitAmountString);

    // step-3: get the current deposit total amount
    // For non-input element(without input or text-area) use .innerText to get the text
    const depositTotalAmount = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalAmount.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepostitAmount;

    depositTotalAmount.innerText = currentDepositTotal;

    // step-5: get balance current total
    const balanceRate = document.getElementById('balance-total');
    const previousBalanceRateString = balanceRate.innerText;
    const previousBalanceRate = parseFloat(previousBalanceRateString);

    // step-6: calculate current total balance
    const currentBalanceRate = previousBalanceRate + newDepostitAmount;

    balanceRate.innerText = currentBalanceRate;

    // step-7: Clear the input field
    depositField.value = '';
})

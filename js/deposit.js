// setp-1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2 get the deposit ammount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount =parseFloat(newDepositAmountString);
    // step-3 get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal =parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

  


        //step Clear the deposit field
        depositField.value = '';
})
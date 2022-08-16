//step-1: add event listener to the deposite button
document.getElementById('btn-deposite').addEventListener('click',function(){
    //step-2: get the deposite amount from the deposite input field
    //for input field use .value to the value inside the input field
    const depositeField = document.getElementById('user-deposite');
    const depositeAmountString = depositeField.value;
    const depositeAmount = parseFloat(depositeAmountString);
    
    //step-3: get the current deposite total
    //for non-input use innerText to get the text
    const depositeTotalElement = document.getElementById('deposite-total');

    const previousDepositeTotal =parseFloat (depositeTotalElement.innerText);
    if(isNaN(depositeAmount)){
        alert('please provide a valid number');
        return;
    }
    //step-4: add numbers to set the total deposite
    const currentDepositeTotal = previousDepositeTotal+depositeAmount;
    //set the deposite total
    depositeTotalElement.innerText=currentDepositeTotal;
     
    //step-5:get balance current total
    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotal=parseFloat(balanceTotalElement.innerText);

    //step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + depositeAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    
    //step-7: clear the deposite field
    depositeField.value='';
})
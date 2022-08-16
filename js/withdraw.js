//1.add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //2. get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawAmount = parseFloat(withdrawField.value);

    //3.get previous withdraw total
    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(WithdrawTotalElement.innerText);

   

    //5.get the previous balance total
    const balanceTotalElement =document.getElementById('balance-total');
    const previousBalanceTotal =parseFloat(balanceTotalElement.innerText);

    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }

    //7. clear input field
    withdrawField.value='';

    if(newWithdrawAmount>previousBalanceTotal){
        alert('You have not enough money!');
        return;
    }
     //4. calculate and set total withdraw amount
     const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     WithdrawTotalElement.innerText = currentWithdrawTotal;

    //6.calculate and set new balance total
    const newBalanceTotal= previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
   

    
})
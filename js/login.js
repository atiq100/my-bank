//step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    //step-2: get the email address inside the input field
    //always remember to use .value to get text from an input field
    const emailField=document.getElementById('user-email');
    const email =emailField.value;
    //step-3:get password,get the element, get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //Danger: Do not verify email password on the client side
    //step-4: verify email and password
    if(email==='webhero@gmail.com' && password==='webhero'){
        window.location.href = 'bank.html'
    }
    else{
        alert('invalid user or password')
    }
})
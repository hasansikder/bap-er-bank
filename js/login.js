// step #01 
document.getElementById('btn-submit').addEventListener('click', function () {
    // Step #02 get the email address inside the email input filed
    // always remember to use  .value to get text from an input field
    const emailField =document.getElementById('user-email');
    const email =emailField.value;
    // step #03 get password
    const passwordField =document.getElementById('user-password');
    const password =passwordField.value;
    // step #04 verify email and password (its not right way)
    if (email === 'hasan@gmail.com' && password==='admin'){
        console.log("valid user")
    }
    else{
        console.log('invalid pass')
    }

})
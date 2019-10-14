
const signupForm=document.querySelector('#signupform');
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    //get info
    const username=signupForm['inputUserame'].value;
    const email =signupForm['inputEmail'].value;
    const password=signupForm['inputPassword'].value;
    const confpassword=signupForm['inputConfirmPassword'].value;
    auth.createUserWithEmailAndPassword(email, password).then(cred=>{

        console.log(cred);
    });
    document.location.href="signin.html";
    

});


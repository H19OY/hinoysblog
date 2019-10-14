	
var credRef=firebase.database().ref('credentials');

document.getElementById('signupform').addEventListener('submit',submitForm);
function submitForm(e){
  e.preventDefault();

  var name=getInputVal('inputUserame');
  var email=getInputVal('inputEmail');
  var password=getInputVal('inputPassword');

  //save message
  savecred(name,email,password);

  //show alert
  document.querySelector('.alert').style.display='block';

  //Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert'.style.display)='none';
  },3000);

  document.getElementById('signupform').reset();

  setTimeout(function(){
    document.location.reload();
  },3050);

}

function getInputVal(id){
    return document.getElementById(id).value;
}

function savecred(name,email,password){
  var newcredRef=credRef.push();
  newcommentRef.set({
    name:name,
    email:email,
    password:password
  });

}
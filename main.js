
// Your web app's Firebase configuration
	var firebaseConfig = {
	  apiKey: "AIzaSyBAbxcaNHWDPi5NyaQfT8hMzL-NpLxuMBY",
	  authDomain: "login-2fc92.firebaseapp.com",
	  databaseURL: "https://login-2fc92.firebaseio.com",
	  projectId: "login-2fc92",
	  storageBucket: "",
	  messagingSenderId: "371838009403",
	  appId: "1:371838009403:web:4ad04f930fcccd78991c1e"
	};
	// Initialize Firebase
  firebase.initializeApp(firebaseConfig);




document.getElementById('signupform').addEventListener('submit',submitForm);//submit button paoar shathe shathe will call submitform

var credref=firebase.database().ref('cred');//creats a table in the database named messages


function submitForm(e)
{
  e.preventDefault();//prevents html from doing any default work upon getting an event

  var name= getInputVal('inputUserame');
  var email= getInputVal('inputEmail');
  //inputPassword
  var pass= getInputVal('inputPassword');
  //var message= getInputVal('message');

  savecred(name,email,pass);

  /*document.querySelector('.alert').style.display='block';

  setTimeout(function(){
    document.querySelector('.alert').style.display='none';
  },3000);*/

  document.getElementById('signupform').reset();

  setTimeout(function(){
    document.location.href="signin.html";
  },2000);

}

function getInputVal(id)
{
  return document.getElementById(id).value; //returning the value of designated id
}

function savecred(name,email,pass)
{
  var newcredref=credref.push();

  newcredref.set({
    name: name,
    email:email,
  });



  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...

      window.alert("error" +errorMessage);
    });
}
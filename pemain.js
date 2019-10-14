  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA7GOf2DGIXKkEWQbCzV7DydHiWI6R9eoQ",
    authDomain: "personalex-d13d3.firebaseapp.com",
    databaseURL: "https://personalex-d13d3.firebaseio.com",
    projectId: "personalex-d13d3",
    storageBucket: "personalex-d13d3.appspot.com",
    messagingSenderId: "868066742381",
    appId: "1:868066742381:web:3a07f9b2535338a6a3ef64",
    measurementId: "G-PMXNH6VVDY"
  };


 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var messageRef=firebase.database().ref('posts');


document.getElementById('contactForm').addEventListener('submit',submitForm);
function submitForm(e){
  e.preventDefault();

  var name=getInputVal('name');
  var phone=getInputVal('phone');
  var email=getInputVal('email');
  var message=getInputVal('message');

  //save message
  saveMessage(name,email,phone,message);

  //show alert
  document.querySelector('.alert').style.display='block';

  //Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert'.style.display)='none';
  },3000);

  document.getElementById('contactForm').reset();

  setTimeout(function(){
    document.location.href="showpe.html";
  },3050);

}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name,email,phone,message){
  var newMessageRef=messageRef.push();
  newMessageRef.set({
    name:name,
    email:email,
    phone:phone,
    message:message
  });

}

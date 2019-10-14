  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBfask0MBGZASecZxD5TbBca1AQ7TxEg2U",
    authDomain: "fpro-1d1b3.firebaseapp.com",
    databaseURL: "https://fpro-1d1b3.firebaseio.com",
    projectId: "fpro-1d1b3",
    storageBucket: "fpro-1d1b3.appspot.com",
    messagingSenderId: "737593812499",
    appId: "1:737593812499:web:d1657ce02f2448878481e6",
    measurementId: "G-C74VZ7DLGK"
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
    document.location.href="showfpro.html";
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

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCi1_IQWvTczXGTmfyI8FgEeOiD9aB7zM4",
    authDomain: "messages-f87fe.firebaseapp.com",
    databaseURL: "https://messages-f87fe.firebaseio.com",
    projectId: "messages-f87fe",
    storageBucket: "",
    messagingSenderId: "666639344445",
    appId: "1:666639344445:web:74d14ec8e9ddefcbaedb54",
    measurementId: "G-VHPHQ1LC02"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var messageRef=firebase.database().ref('message');


document.getElementById('contactForm').addEventListener('submit',submitForm);
function submitForm(e){
  e.preventDefault();

  var name=getInputVal('name');
  var phone=getInputVal('phone');
  var company=getInputVal('company');
  var email=getInputVal('email');
  var message=getInputVal('message');

  //save message
  saveMessage(name,company,email,phone,message);

  //show alert
  document.querySelector('.alert').style.display='block';

  //Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert'.style.display)='none';
  },3000);

  document.getElementById('contactForm').reset();

  setTimeout(function(){
    document.location.href="./index.html";
  },3050);

}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name,company,email,phone,message){
  var newMessageRef=messageRef.push();
  newMessageRef.set({
    name:name,
    email:email,
    phone:phone,
    company:company,
    message:message
  });

}

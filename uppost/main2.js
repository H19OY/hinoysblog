  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB41ucvWV-UktGUVky7dR8fCA_q2MOY_xo",
    authDomain: "uppost-61715.firebaseapp.com",
    databaseURL: "https://uppost-61715.firebaseio.com",
    projectId: "uppost-61715",
    storageBucket: "uppost-61715.appspot.com",
    messagingSenderId: "787717647064",
    appId: "1:787717647064:web:f262f8986250c4fe7c85ad",
    measurementId: "G-2FD7KWNV0V"
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
    document.location.href="page.html";
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

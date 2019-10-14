  var firebaseConfig = {
    apiKey: "AIzaSyB41ucvWV-UktGUVky7dR8fCA_q2MOY_xo",
    authDomain: "uppost-61715.firebaseapp.com",
    databaseURL: "https://uppost-61715.firebaseio.com",
    projectId: "uppost-61715",
    storageBucket: "",
    messagingSenderId: "787717647064",
    appId: "1:787717647064:web:f262f8986250c4fe7c85ad",
    measurementId: "G-2FD7KWNV0V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




var commentRef=firebase.database().ref('schoolcomment');


document.getElementById('contactForm').addEventListener('submit',submitForm);
function submitForm(e){
  e.preventDefault();

  var name=getInputVal('name');
  var email=getInputVal('email');
  var comment=getInputVal('comment');

  //save message
  savecomment(name,email,comment);

  //show alert
  document.querySelector('.alert').style.display='block';

  //Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert'.style.display)='none';
  },3000);

  document.getElementById('contactForm').reset();

  setTimeout(function(){
    document.location.reload();
  },3050);

}

function getInputVal(id){
    return document.getElementById(id).value;
}

function savecomment(name,email,comment){
  var newcommentRef=commentRef.push();
  newcommentRef.set({
    name:name,
    email:email,
    comment:comment
  });

}
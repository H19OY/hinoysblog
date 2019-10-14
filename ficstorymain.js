  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC-wEbSMWIucKsYN-a7Ay0BTdD7s_WL2KE",
    authDomain: "ficstory-64bb3.firebaseapp.com",
    databaseURL: "https://ficstory-64bb3.firebaseio.com",
    projectId: "ficstory-64bb3",
    storageBucket: "ficstory-64bb3.appspot.com",
    messagingSenderId: "554169957055",
    appId: "1:554169957055:web:922cf8d4486363c724e40a",
    measurementId: "G-NZY95W3SBT"
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
    document.location.href="showficstory.html";
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

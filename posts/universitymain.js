  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAFXDvH7j7_UoqHm4ozAytsgA7mdgZq_2c",
    authDomain: "comments-16a5c.firebaseapp.com",
    databaseURL: "https://comments-16a5c.firebaseio.com",
    projectId: "comments-16a5c",
    storageBucket: "",
    messagingSenderId: "918171111649",
    appId: "1:918171111649:web:b0b8a3087ee6db215ba7a0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//show here

var commentRef=firebase.database().ref('varsitycomment');




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
    document.location.href="universitycomm.html";;
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

var vref=firebase.database().ref('varsitycomment');
vref.on('value',gotData,errData);

function gotData(data)
{
	//console.log(data.val());
	var com=data.val();
	var keys=Object.keys(com);
	console.log(keys);
	for(var i=0;i<keys.length;i++)
	{
		var k=keys[i];
		var name=com[k].name;
		var email=com[k].email;
		var comment=com[k].comment;
		console.log(name,email,comment);
		//var li=createElement('li',name+'('+email+')'+'->'+comment);
		//li.parent('commentslist');
	}
	
}
function errData(err)
{
	console.log('Error!');
	console.log(err);
	
}

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






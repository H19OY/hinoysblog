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

firebase.initializeApp(firebaseConfig);


$(document).ready(function(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      //document.location.href="./index.html";
      var token=firebase.auth().currentUser.uid;
      var token2=firebase.auth().currentUser.email;
      console.log("a user logged in " + firebase.auth().currentUser.uid +" " +firebase.auth().currentUser.email);


      var user = firebase.auth().currentUser;


      queryDatabase();
    } else {
      // No user is signed in.
      //window.alert("NOPW");
      //document.location.href="./log.html"
	   queryDatabase();
    }
  });
});


function queryDatabase()
{
  firebase.database().ref('/posts/').once('value').then(function(snapshot){


    var PostObject=snapshot.val();
    var currentRow;

    var keys=Object.keys(PostObject);

    for(var i=0;i<keys.length;i++)
    {
      var currentObject=PostObject[keys[i]];


      currentRow=document.createElement("div");
      $(currentRow).addClass("row");

      dummycol=document.createElement("div");
      $(dummycol).addClass("col-md-8");//setting class col-md-8
      $(currentRow).append(dummycol);


      dummycol2=document.createElement("div");//setting class card mb-4
      $(dummycol2).addClass("card mb-4");
      $(dummycol).append(dummycol2);

      dummycolname=document.createElement("div");
      $(dummycolname).addClass("card-body");
      $(dummycol2).append(dummycolname);

      dummycolfooter=document.createElement("div");
      $(dummycolfooter).addClass("card-footer text-muted");
      $(dummycol2).append(dummycolfooter);

      $("#contentHolder").append(currentRow);


      var col=document.createElement("div");
      $(col).addClass("col-lg-4");

      /*var image=document.createElement("img");
      image.src=currentObject.url;
      $(image).addClass("card-img-top");*/

      var name=document.createElement("p");
      $(name).html(currentObject.name);
      $(name).addClass("contentName");

      //caption to be written

      var title=document.createElement("h2");
      $(title).html(currentObject.phone);
      $(title).addClass("card-title");

      var message=document.createElement("p");
      $(message).html(currentObject.message);
      $(message).addClass("card-text");




      var time=document.createElement("p");
      $(time).html(currentObject.time);

      var zone=document.createElement("p");
      $(zone).html(currentObject.title);
		
      var email=document.createElement("p");
      $(email).html(currentObject.email);

      //$(dummycol2).append(image);

      $(dummycolfooter).append(name);
      $(dummycolfooter).append(time);
      $(dummycolfooter).append(zone);
      $(dummycolfooter).append(email);

	//vua title 
      $(dummycolname).append(title);
      $(dummycolname).append(message);
      //$(dummycolname).append(but);

      $(currentRow).append(col);

      console.log("done");

    }
    //console.log(keys);//to check if its working


  });
}

function logout(){
  firebase.auth().signOut();
  document.location.href="./log.html";
}

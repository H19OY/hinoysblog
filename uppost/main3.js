var firebaseConfig = {
    apiKey: "AIzaSyBz1NY32SanRAOCGR6SJjnnun1CEEZS50g",
    authDomain: "postwithpic.firebaseapp.com",
    databaseURL: "https://postwithpic.firebaseio.com",
    projectId: "postwithpic",
    storageBucket: "postwithpic.appspot.com",
    messagingSenderId: "737743839656",
    appId: "1:737743839656:web:e21bde46cb11e4c6dffd9d",
    measurementId: "G-FVRR7004MC"
  };



firebase.initializeApp(firebaseConfig);




//document.getElementById('contactForm').addEventListener('submit',submitForm);//submit button paoar shathe shathe will call submitform

var msgref=firebase.database().ref('messages');//creats a table in the database named messages

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //document.location.href="./index.html";
    //window.alert("hi again");


    var user = firebase.auth().currentUser;


    //console.log(user.name);
    //console.log(user.mail);
  } else {
    // No user is signed in.
    window.alert("NOPW");
    document.location.href="./log.html"
  }
});





function submitForm(e)
{
  e.preventDefault();//prevents html from doing any default work upon getting an event

  var name= getInputVal('name');
  var company= getInputVal('company');
  var phone= getInputVal('phone');
  var email= getInputVal('email');
  var message= getInputVal('message');

  saveMessage(name,company,email,phone,message);

  document.querySelector('.alert').style.display='block';

  setTimeout(function(){
    document.querySelector('.alert').style.display='none';
  },3000);

  document.getElementById('contactForm').reset();

  setTimeout(function(){
    document.location.href="./index.html";
  },2000);

}

function getInputVal(id)
{
  return document.getElementById(id).value; //returning the value of designated id
}

function saveMessage(name,company,email,phone,message)
{
  var newmsgref=msgref.push();

  newmsgref.set({
    name: name,
    company: company,
    email:email,
    phone:phone,
    message:message,
  });
}

$("#im_file").on("change",function(event){
  selectedFile=event.target.files[0];
}
);

/*function uploadfile()
{
  var filename=selectedFile.name;
  var storageRef=firebase.storage().ref('/img/' + filename);
  var uploadTask=storageRef.put(selectedFile);


        // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on('state_changed', function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        //var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, function(error) {
        // Handle unsuccessful uploads
        window.alert("error: "+error);
      }, function() {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL);



          var postKey=firebase.database().ref("Posts/").push().key;
          var downloadURL=uploadTask.snapshot.downloadURL;

          var updates={};
          var postData={
            url:downloadURL,
            name:$("#name").val(),
            user:us.uid
          };
          updates['/Posts/' +postKey]=postData;

          firebase.database().ref().update(updates);


        });
      });

  //var fileref=storage().child(filename);
}*/


var fileButton=getInputVal('im_file');


document.getElementById('im_file').addEventListener('change',function(e){


    if(!$("#name").val()||!$("#desc").val()||!$("#ptitle").val()||!$("#zone").val()||!$('#contact').val())
    {
      window.alert("Please fill up other sections before uploading");
      document.getElementById('contactForm').reset();
    }


    else {



    var file=e.target.files[0];

    var storageRef=firebase.storage().ref('sweet/'+ file.name);

    var task=storageRef.put(file);


    task.on('state_changed',

    function progress(snapshot){

        //var percentage=(snapshot.bytesTransferred/snapshot.totalBytes)*100;

        //uploader.value=percentage;
        update();
    },


    function error(err){


    },

    function complete(){

      task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log('File available at', downloadURL);
      });



      var postKey=firebase.database().ref("Posts/").push().key;
      var downloadURL=task.snapshot.downloadURL;

      var updates={};
      var postData={
        url:downloadURL,
        name:$("#name").val(),
        title:$("#ptitle").val(),
        desc:$("#desc").val(),
        //mail:$("#email").val(),
        contact:$("#contact").val(),
        mail:firebase.auth().currentUser.email,
        zone:$("#zone").val(),
        time:ts.toLocaleString()
      };
      updates['/Posts/' +postKey]=postData;

      firebase.database().ref().update(updates);

      console.log('done 2');



    }

  );//task on end

  }//if/else end right ere
});



function update() {
  var element = document.getElementById("myprogressBar");
  var width = 1;
  var identity = setInterval(scene, 10);
  function scene() {
    if (width >= 100) {
      clearInterval(identity);
    } else {
      width++;
      element.style.width = width + '%';
    }
  }
}

function goto()
{
  if(!$("#name").val()||!$("#desc").val()||!$("#ptitle").val()||!$("#zone").val()||!$('#contact').val())
  {
    window.alert("Please fill up the form first");
  }
  else {

          window.alert("A new post has been made by the user. Refreshing this page");


        }

}
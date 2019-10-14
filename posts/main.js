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
/*
var dataSource = [];
var no=0;

function showTable(){
    resetForm();
	document.getElementById("contactForm").style.display = 'none';
	document.getElementById("tour-places-div").style.display = 'block';
}

function BackToaddPlace() {
    resetForm();
	document.getElementById("contactForm").style.display = 'block';
    document.getElementById("tour-places-div").style.display = 'none';
}

function resetForm() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('comment').value = "";
}

function addPlace() {
    debugger
    var newPlace = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        comment: document.getElementById('comment').value
    };


    var reader = new FileReader();

        dataSource.push(newPlace);
        clearGrid()
        loadGrid(dataSource);

}

function loadGrid(data) {
    data.forEach(function (row) {
        var table = document.getElementById("table-places");
        var newRow = table.insertRow(table.rows.length);

        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);


        cel1.innerHTML = row.name;
        cel2.innerHTML = row.email;
        cel3.innerHTML = row.comment;
    });
    showTable();
}

function clearGrid() {
    var table = document.getElementById("table-places");
    for (var i = table.rows.length - 1; i > 0; --i)
        table.deleteRow(i);
}
//show ends
*/
var commentRef=firebase.database().ref('comment');



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

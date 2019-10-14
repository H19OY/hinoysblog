
// Your web app's Firebase configuration
	var firebaseConfig = {
	  apiKey: "AIzaSyBAbxcaNHWDPi5NyaQfT8hMzL-NpLxuMBY",
	  authDomain: "login-2fc92.firebaseapp.com",
	  databaseURL: "https://login-2fc92.firebaseio.com",
	  projectId: "login-2fc92",
	  storageBucket: "",
	  messagingSenderId: "371838009403",
	  appId: "1:371838009403:web:4ad04f930fcccd78991c1e"
	};
	// Initialize Firebase
  firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    //document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    document.location.href="homepage.html";

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    //document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}
 
function logout(){
  firebase.auth().signOut();
  document.location.href="signin.html";
}
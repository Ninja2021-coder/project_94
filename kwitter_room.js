// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDkyuDzZjPwMR3FFDmrNqDnAoUUFtn65Y4",
  authDomain: "kwitter-remodel.firebaseapp.com",
  databaseURL: "https://kwitter-remodel-default-rtdb.firebaseio.com",
  projectId: "kwitter-remodel",
  storageBucket: "kwitter-remodel.appspot.com",
  messagingSenderId: "1089149595386",
  appId: "1:1089149595386:web:cbda58b0cdbc85817ea343"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
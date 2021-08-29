//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCQ3N9xtTU2ICrEXHTBMBpl5fWQ1r8N1Aw",
      authDomain: "sns123-d5275.firebaseapp.com",
      databaseURL: "https://sns123-d5275-default-rtdb.firebaseio.com",
      projectId: "sns123-d5275",
      storageBucket: "sns123-d5275.appspot.com",
      messagingSenderId: "625403321769",
      appId: "1:625403321769:web:7de97d7f3ad25e276d78b8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
//class ="good" :) i used firebase again after a long time
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

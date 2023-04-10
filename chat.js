// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyClqC5R7fEy20glYRgw-GNSHzHRG2LSC2o",
    authDomain: "letschatapp-8ef07.firebaseapp.com",
    databaseURL: "https://letschatapp-8ef07-default-rtdb.firebaseio.com",
    projectId: "letschatapp-8ef07",
    storageBucket: "letschatapp-8ef07.appspot.com",
    messagingSenderId: "655301491142",
    appId: "1:655301491142:web:d91fd7be126ebb57d29ac7"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}




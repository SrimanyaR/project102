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

user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"     +user_name +"!";
    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "chat_room.html";
    }


    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
     
       console.log("Room Name-"+ Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row;
 
       
       });});}
      getData();
 
      function redirectToRoomName(name)
      {
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location= "chat_room.html"
      }
 function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name")
       window.location="index.html";
 }

var uSeRnAmE = localStorage.getItem("username");

document.getElementById("intro").innerHTML = "Welcome, " + uSeRnAmE;

//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDJ81X6IOLBpDfw7W6V79G75e04TiWQGBs",
      authDomain: "kwitter-7e5bb.firebaseapp.com",
      databaseURL: "https://kwitter-7e5bb-default-rtdb.firebaseio.com",
      projectId: "kwitter-7e5bb",
      storageBucket: "kwitter-7e5bb.appspot.com",
      messagingSenderId: "1017035264542",
      appId: "1:1017035264542:web:772a75acc5ae28cd6e540f",
      measurementId: "G-SH10HLBKX6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
       var row = "<div class='roomname' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML += row;
      //Start code

      //End code
      });});}
      getData();

function addRoom() {
      var roomName = document.getElementById("roomName").value;
      firebase.database().ref("/").child(roomName).update({purpose: "Adding RoomName"});
      localStorage.setItem("roomName", roomName);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(roomName) {
      localStorage.setItem("roomName", roomName);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomName");
      window.location = "index.html";
}
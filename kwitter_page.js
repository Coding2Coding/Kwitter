//YOUR FIREBASE LINKS
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
      var userName = localStorage.getItem("username");
      var RoomNames = localStorage.getItem("roomName");
      function send() {
            var message = document.getElementById("typeMessage").value;
            firebase.database().ref(RoomNames).push({
                  name: userName,
                  message: message,
                  likes: 0
            });
            document.getElementById("typeMessage").value="";

      }
      function getData() { firebase.database().ref("/"+RoomNames).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      console.log(message_data);
      console.log(firebase_message_id);
      var name = message_data["name"];
      var message = message_data["message"];
      var likes = message_data["likes"];
      var nameWithTag = "<h4>"+name+"<img src='tick.png' class='user_tick'>"+"</h4>";
      var messageWithTag = "<h4 class='message_h4'>"+message+"</h4>";
      var likeButton = "<button class='btn btn-info' id="+firebase_message_id+" value="+likes+" onclick='updateLikes(this.id)'>";
      var spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>"+"Likes: "+likes+"</span>"+"</button>";
      var row = nameWithTag+messageWithTag+likeButton+spanWithTag;
      document.getElementById("output").innerHTML+=row;
      

      } });  }); }
      getData();

      function updateLikes(message_id) {
            var likes = document.getElementById(message_id).value;
            var updatedLikes = Number(likes)+1;
            firebase.database().ref(RoomNames).child(message_id).update({
                  likes: updatedLikes
            });
      }

      function logout() {
            localStorage.removeItem("username");
            localStorage.removeItem("roomName");
            window.location = "index.html";
      }
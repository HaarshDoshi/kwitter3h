const firebaseConfig = {
      apiKey: "AIzaSyA0bR1li0M1XZITw-6d8QZ9C6KrWRAOLXw",
      authDomain: "kwitter--app-a2918.firebaseapp.com",
      databaseURL: "https://kwitter--app-a2918-default-rtdb.firebaseio.com",
      projectId: "kwitter--app-a2918",
      storageBucket: "kwitter--app-a2918.appspot.com",
      messagingSenderId: "981837459586",
      appId: "1:981837459586:web:ecee4e1c308680c578c49b"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name +"!";
function addRoom() {
room_name = document.getElementById("room_name").value; 

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"  
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name -" + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div></hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";  
}


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCIXwtuhwsQrjs9cLusgOwO61HAFMao6w8",
    authDomain: "validationo-7524c.firebaseapp.com",
    projectId: "validationo-7524c",
    storageBucket: "validationo-7524c.appspot.com",
    messagingSenderId: "94631291562",
    appId: "1:94631291562:web:3ee175374e7e2bd95afed3"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  auth.onAuthStateChanged(function (user){
     if(user){
        var email = user.email;
        var user = document.getElementById("user");
        var text = document.createTextNode(email);
        user.appendChild(text);
        console.log(user);
        //is signed in
     } else {
        alert("user not authenticated, Kindly login or signup");
        window.location = "index.html";
     }
  });

    
     //logout function
     let signOutButton = document.getElementById("signout");
     signOutButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("logout clicked")
        auth.signOut();
        alert("signed out");
        window.location  = "index.html";
     });
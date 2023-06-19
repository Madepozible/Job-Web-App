

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCniFaxrceMwqlPGsceZRf9woHzUxc_zz0",
    authDomain: "webapp-718b7.firebaseapp.com",
    projectId: "webapp-718b7",
    storageBucket: "webapp-718b7.appspot.com",
    messagingSenderId: "47341853964",
    appId: "1:47341853964:web:d57467ae2faa87ef98fd29"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

   //signup function
   let signUpButton = document.getElementById("signup");
   signUpButton.addEventListener("click", (e) =>{
      //prevent default form submission behaviour
      e.preventDefault();
      console.log("clicked");

      var email = document.getElementById("inputEmail");
      var password = document.getElementById("inputPassword");


      auth
      .createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) =>{
          location.reload();
          alert("user signed up successful");

             //signed in

              var user = userCredential.user;
              console.log("user, user.email");
        })

        .catch((error) =>{
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("error code", errorCode);
          console.log("error Message", errorMessage);
          alert(errorMessage);
        });
   });


     //SIGNIN FUNCTION

     let signInButton = document.getElementById("signin");
     signInButton.addEventListener("click", (e) =>{
       e.preventDefault();
       console.log("sign in clicked");

       var email = document.getElementById("inputEmail");
       var password = document.getElementById("inputPassword");

       auth
       .signInWithEmailAndPassword(email.value, password.value)
       .then((userCredential) =>{
          var user = userCredential.user;
          console.log("user", user.email);
          window.location = "index.html";
       })

       .catch((error) =>{
          var errorCode = error.code;
          var errorMessage = error.message;
         alert(errorMessage);
       });
     });
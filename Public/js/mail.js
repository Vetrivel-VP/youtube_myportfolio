const firebaseConfig = {
  apiKey: "AIzaSyBD4LFkhNa5U2bKL7cpZVQRYdjH9yeLzmY",
  authDomain: "portfolio-fa558.firebaseapp.com",
  databaseURL: "https://portfolio-fa558-default-rtdb.firebaseio.com",
  projectId: "portfolio-fa558",
  storageBucket: "portfolio-fa558.appspot.com",
  messagingSenderId: "571931779391",
  appId: "1:571931779391:web:52c3f363adf01aa18fb38a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormRef = firebase.database().ref("contactMessages");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("name");
  var emailid = getInputVal("emailid");
  var msgContent = getInputVal("msgContent");

  //   save messages
  saveMessages(name, emailid, msgContent);

  //   enable the alert
  document.querySelector(".alert").style.display = "block";

  //   Hide it after tree seconds
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const getInputVal = (id) => {
  return document.getElementById(id).value;
};

const saveMessages = (name, emailid, msgContent) => {
  var newcontactFormRef = contactFormRef.push();
  newcontactFormRef.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

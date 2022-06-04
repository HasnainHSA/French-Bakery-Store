
const firebaseConfig = {
    apiKey: "AIzaSyCL2xEtrEFjQ0PxkAN7dzg0zBdc4TgjIAw",
    authDomain: "french-bakery-store.firebaseapp.com",
    databaseURL: "https://french-bakery-store-default-rtdb.firebaseio.com",
    projectId: "french-bakery-store",
    storageBucket: "french-bakery-store.appspot.com",
    messagingSenderId: "168317164789",
    appId: "1:168317164789:web:62335f31eac07b8aaa39bc",
    measurementId: "G-7MGCPS3HQW"
  };
  
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  var saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  var getElementVal = (id) => {
    return document.getElementById(id).value;
  };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA56aMLDnwrAuYQ85udKnmzXG1xOhZto-c",
  authDomain: "aaaagh-c8514.firebaseapp.com",
  projectId: "aaaagh-c8514",
  storageBucket: "aaaagh-c8514.appspot.com",
  messagingSenderId: "891645262722",
  appId: "1:891645262722:web:130ff4399b1326f0cdad9b",
  measurementId: "G-PWS4MERM4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Database reference
const databaseRef = firebase.database().ref();
const contactRef = databaseRef.child("contacts");

//GUI contact placeholder
const contactListGUI = document.getElementById("userList");
contactRef.on("child-key", snap => {
    let user = snap.val();
    let $li = document.createElement("li");

    $li.innerHTML = user.name;
    $li.setAttribute("child-key", snap.key);
    $li.addEventListener("click", contactClicked //contactListGUI.append($li);));
});

contactClicked(){
    const contactID = e.target.getAttribute("child-key");
    const contactRef = databaseRef.child("contacts/" + contactID);
    const contactDetailsGUI = document.getElementById("userDetails");
};

/*
import (collection, getDocs) from "firebase/firestore";

const staffCollectionReferece = collection(db, "users");

get a single staff members info
const userDoc = doc(db, "users", "alovelace");
*/

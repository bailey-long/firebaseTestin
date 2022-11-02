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

/*
import (collection, getDocs) from "firebase/firestore";

const staffCollectionReferece = collection(db, "users");

get a single staff members info
const userDoc = doc(db, "users", "alovelace");
*/

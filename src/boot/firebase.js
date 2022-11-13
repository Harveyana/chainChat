// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// PUT YOUR OWN FIREBASE CONFIGURATION HERE
const firebaseConfig = {
  apiKey: "AIzaSyA95dXLZ0bur6ldx6WbWDKp6LUS7inRU_A",
  authDomain: "chainchat-1974c.firebaseapp.com",
  databaseURL: "https://chainchat-1974c-default-rtdb.firebaseio.com",
  projectId: "chainchat-1974c",
  storageBucket: "chainchat-1974c.appspot.com",
  messagingSenderId: "551710242542",
  appId: "1:551710242542:web:41e9e61498b44ae65065ff"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }

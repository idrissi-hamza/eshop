import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
 
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "movex-c3bf2.firebaseapp.com",
  projectId: "movex-c3bf2",
  storageBucket: "movex-c3bf2.appspot.com",
  messagingSenderId: "115580926853",
  appId: "1:115580926853:web:21f7a7d1b2835f68d5a2ec"
};

//init firebase after cheching if it s not already initialized
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp=firebase.firestore.Timestamp

export { projectAuth,projectFirestore ,timestamp};

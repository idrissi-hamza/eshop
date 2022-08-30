import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig"





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

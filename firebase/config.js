import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyB2T7BMyFzmgBsVORWSk0JScCPIL_0xIwc",
  authDomain: "eshop-128da.firebaseapp.com",
  projectId: "eshop-128da",
  storageBucket: "eshop-128da.appspot.com",
  messagingSenderId: "676754748860",
  appId: "1:676754748860:web:8aa990df5c27f4579de7b9"
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

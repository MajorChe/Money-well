import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//initialize service
const projectMoneyWell = firebase.firestore();
const projectMoneyWellAuth = firebase.auth();

export { projectMoneyWell, projectMoneyWellAuth };

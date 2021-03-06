import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_MESSAGEID,
  appId: process.env.REACT_APP_ID,
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//initialize service
const projectMoneyWell = firebase.firestore();
const projectMoneyWellAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp

export { projectMoneyWell, projectMoneyWellAuth,timestamp };

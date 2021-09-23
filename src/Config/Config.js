// import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDX5s6A-geBNxPPb_wWxxYwECfH81uatPM",
  authDomain: "tooyoung-ba7e2.firebaseapp.com",
  projectId: "tooyoung-ba7e2",
  storageBucket: "tooyoung-ba7e2.appspot.com",
  messagingSenderId: "136512005477",
  appId: "1:136512005477:web:0feb40e6dd0626bc516d8c",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };

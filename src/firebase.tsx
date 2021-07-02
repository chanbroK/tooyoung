import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDX5s6A-geBNxPPb_wWxxYwECfH81uatPM",
  authDomain: "tooyoung-ba7e2.firebaseapp.com",
  projectId: "tooyoung-ba7e2",
  storageBucket: "tooyoung-ba7e2.appspot.com",
  messagingSenderId: "136512005477",
  appId: "1:136512005477:web:0feb40e6dd0626bc516d8c",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };

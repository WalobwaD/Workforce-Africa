import * as firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyJH4hS_1oXveOWa20nxRNr-fyjBnJQMw",
  authDomain: "workforce-assessment.firebaseapp.com",
  projectId: "workforce-assessment",
  storageBucket: "workforce-assessment.appspot.com",
  messagingSenderId: "881655851412",
  appId: "1:881655851412:web:2059dbf6e4b8b52a1cc781",
  measurementId: "G-90V14Y8BGM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
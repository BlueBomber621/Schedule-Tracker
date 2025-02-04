// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKuBs5JQVV4JevO86qmRQrV3FxMnn2VrY",
  authDomain: "schedule-tracker-bdc9d.firebaseapp.com",
  projectId: "schedule-tracker-bdc9d",
  storageBucket: "schedule-tracker-bdc9d.firebasestorage.app",
  messagingSenderId: "207826163408",
  appId: "1:207826163408:web:666eaead388cfdaab1f0d5",
  measurementId: "G-LB1TBFWWYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth }
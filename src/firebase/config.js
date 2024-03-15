// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBry8pFNebc9bedIuQej8GTssTFpD4Mg90",
  authDomain: "portfolio-911b9.firebaseapp.com",
  projectId: "portfolio-911b9",
  storageBucket: "portfolio-911b9.appspot.com",
  messagingSenderId: "91084969440",
  appId: "1:91084969440:web:5a13c885c4858a57838785",
  measurementId: "G-PSEQ2NMFCE"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const FirebaseAnalytics = getAnalytics(FirebaseApp);

export const FirebaseDB = getFirestore( FirebaseApp );
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSb0jMv3zwV-6Km3FlfygnY0glccspAdY",
  authDomain: "yout-fbbd2.firebaseapp.com",
  projectId: "yout-fbbd2",
  storageBucket: "yout-fbbd2.appspot.com",
  messagingSenderId: "576833422089",
  appId: "1:576833422089:web:99e325d26a86ea0f8909d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

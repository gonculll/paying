// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI1WVUQFGzl4N4zYM5ps4pGi3PAicF5_g",
  authDomain: "comida-75862.firebaseapp.com",
  databaseURL: "https://comida-75862-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "comida-75862",
  storageBucket: "comida-75862.appspot.com",
  messagingSenderId: "194932457510",
  appId: "1:194932457510:web:ce71a3d7a751224c65e6e7",
  measurementId: "G-CTPVHBLSZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
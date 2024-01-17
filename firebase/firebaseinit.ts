// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAltWIiqUPq85371v_kGerFyPv7Dy6ODAY",
  authDomain: "pizzamania-17377.firebaseapp.com",
  projectId: "pizzamania-17377",
  storageBucket: "pizzamania-17377.appspot.com",
  messagingSenderId: "392545389429",
  appId: "1:392545389429:web:0d6be450abc546f0ada13c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);
 
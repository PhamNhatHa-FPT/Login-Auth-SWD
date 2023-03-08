// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxIUodlCWR9GVH20q0fGx0IrLlEvXdWa4",
  authDomain: "astrodaily-af227.firebaseapp.com",
  projectId: "astrodaily-af227",
  storageBucket: "astrodaily-af227.appspot.com",
  messagingSenderId: "1095306987875",
  appId: "1:1095306987875:web:5f097ca29a3fd30f74ab56",
  measurementId: "G-N6FPKJ0NZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvOnTe4vqz_vMH8VTdaa_ChwDP4SgfnNA",
  authDomain: "react-firebase-auth-692f7.firebaseapp.com",
  projectId: "react-firebase-auth-692f7",
  storageBucket: "react-firebase-auth-692f7.appspot.com",
  messagingSenderId: "420406987072",
  appId: "1:420406987072:web:d70d0a68d4e5f4d6d192a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXRdgXMxdIYResr27hyZaUUVhgA8HG5qk",
  authDomain: "netflixgpt-4e799.firebaseapp.com",
  projectId: "netflixgpt-4e799",
  storageBucket: "netflixgpt-4e799.appspot.com",
  messagingSenderId: "998577123742",
  appId: "1:998577123742:web:417aa0f23cd9e6a153268f",
  measurementId: "G-2V9PG884W4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)

export const auth  = getAuth()
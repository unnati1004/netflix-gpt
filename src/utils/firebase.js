// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqWlc2Na0jCNyw5kWx-82ggYr88mFu6ew",
  authDomain: "netflixgpt-ec205.firebaseapp.com",
  projectId: "netflixgpt-ec205",
  storageBucket: "netflixgpt-ec205.firebasestorage.app",
  messagingSenderId: "992122045934",
  appId: "1:992122045934:web:86318d7dfd5fcd8f413aff",
  measurementId: "G-YSLFZRYW7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
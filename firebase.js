// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "yash-blog-93fe8.firebaseapp.com",
  projectId: "yash-blog-93fe8",
  storageBucket: "yash-blog-93fe8.firebasestorage.app",
  messagingSenderId: "413868986727",
  appId: "1:413868986727:web:59268e8bbd2991ade1dfc2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-e9271.firebaseapp.com",
  projectId: "taskmanager-e9271",
  storageBucket: "taskmanager-e9271.firebasestorage.app",
  messagingSenderId: "20554488834",
  appId: "1:20554488834:web:7b9acb3ee076eff1fd1b1b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
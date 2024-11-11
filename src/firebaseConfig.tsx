// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGsACBGaSeWqDJ6blfWkiSylEKo6jk__8",
    authDomain: "drive-clone-519ed.firebaseapp.com",
    projectId: "drive-clone-519ed",
    storageBucket: "drive-clone-519ed.firebasestorage.app",
    messagingSenderId: "763289417876",
    appId: "1:763289417876:web:edb59b81b6b029cc49dc81",
    measurementId: "G-DH2MVM7YTD"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);


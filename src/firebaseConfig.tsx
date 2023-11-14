import { initializeApp } from "@firebase/app";
import { getStorage } from '@firebase/storage';
import{ getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCaL8-CC63kiZAqeiaoGSMalPbBgT-r5G8",
  authDomain: "drive-765e4.firebaseapp.com",
  projectId: "drive-765e4",
  storageBucket: "drive-765e4.appspot.com",
  messagingSenderId: "536598291805",
  appId: "1:536598291805:web:3ea1da524a49b1db32f4b4",
  measurementId: "G-5S383FV50E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app)
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import{ getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBtWveNnLlM9gpelhibOLTnPZjay71O_BU",
  authDomain: "drive-clone-653c4.firebaseapp.com",
  projectId: "drive-clone-653c4",
  storageBucket: "drive-clone-653c4.appspot.com",
  messagingSenderId: "1056527699697",
  appId: "1:1056527699697:web:bb72b0a584e88eb31de350",
  measurementId: "G-99MK1CNC7M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app)
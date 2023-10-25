// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhHhmdZ0iZamsGraUf4TzgFqxtJ6EGmdA",
  authDomain: "web-kelas-db784.firebaseapp.com",
  projectId: "web-kelas-db784",
  storageBucket: "web-kelas-db784.appspot.com",
  messagingSenderId: "747517056156",
  appId: "1:747517056156:web:5933a8fd241ae722564959",
  measurementId: "G-FLSFRM36PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
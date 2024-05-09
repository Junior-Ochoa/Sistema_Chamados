import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBd8AJ5_CpjSSqe5QluwKJ57KXvvUcRPa8",
  authDomain: "tickets-70ed6.firebaseapp.com",
  projectId: "tickets-70ed6",
  storageBucket: "tickets-70ed6.appspot.com",
  messagingSenderId: "572156972859",
  appId: "1:572156972859:web:7dafcd0ee7aa6e8107f11e",
  measurementId: "G-YES6ZMYZKN",
};

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export { auth, db, storage };

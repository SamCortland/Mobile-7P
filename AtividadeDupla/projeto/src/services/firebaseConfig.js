import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBr3BKvfhQKQCBZXwliW2-9LA4ZyStHtcM",
  authDomain: "pratica-02-5c931.firebaseapp.com",
  projectId: "pratica-02-5c931",
  storageBucket: "pratica-02-5c931.firebasestorage.app",
  messagingSenderId: "738261352140",
  appId: "1:738261352140:web:e7e677bc9a0471212b0c69",
  measurementId: "G-9CYX0RMNKE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
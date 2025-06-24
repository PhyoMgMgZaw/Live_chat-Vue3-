// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDN0NZVJGmUXUqdsCU632-7_y_A0NMtA5E",
  authDomain: "live-chat-b0c7e.firebaseapp.com",
  projectId: "live-chat-b0c7e",
  storageBucket: "live-chat-b0c7e.appspot.com",
  messagingSenderId: "208819126836",
  appId: "1:208819126836:web:88c52a8647ebc542308061",
  measurementId: "G-TRKD22CQCB"
};

// initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const timestamp = serverTimestamp;

export { db, auth, timestamp };

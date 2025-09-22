import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "YOUR_API_KEY_HERE",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN_HERE",
  databaseURL: process.env.FIREBASE_DATABASE_URL || "YOUR_DATABASE_URL_HERE",
  projectId: process.env.FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID_HERE",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "YOUR_SENDER_ID_HERE",
  appId: process.env.FIREBASE_APP_ID || "YOUR_APP_ID_HERE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };

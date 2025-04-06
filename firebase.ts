import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkaGPvLPu87M4HVUZ6hAThJfus3HarxOI",
  authDomain: "of-us-baae7.firebaseapp.com",
  projectId: "of-us-baae7",
  storageBucket: "of-us-baae7.firebasestorage.app",
  messagingSenderId: "526562719630",
  appId: "1:526562719630:web:42b322b8f5a43104ec96df",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };

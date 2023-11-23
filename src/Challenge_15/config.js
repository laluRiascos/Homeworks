import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALCsG4LXF5KMXi19ziC1XB6iB7YrpVXLs",
  authDomain: "proyectoweb01-3e15e.firebaseapp.com",
  projectId: "proyectoweb01-3e15e",
  storageBucket: "proyectoweb01-3e15e.appspot.com",
  messagingSenderId: "1038109076987",
  appId: "1:1038109076987:web:e87c212dd196752be6af5e",
  measurementId: "G-KBZPP07BEM"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const firebaseStorage = getStorage(firebaseApp);

export { auth, firebaseApp, firebaseStorage };
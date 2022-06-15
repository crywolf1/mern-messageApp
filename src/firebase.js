import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCvqsfmYLd16q54YjtV-4VbMioOfwOKz-8",

  authDomain: "messaging-mern-app-80e02.firebaseapp.com",

  projectId: "messaging-mern-app-80e02",

  storageBucket: "messaging-mern-app-80e02.appspot.com",

  messagingSenderId: "853117760574",

  appId: "1:853117760574:web:62682fa1628c588bd68d6f",

  measurementId: "G-12R0JX808N",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
export { db, auth, provider, storage };

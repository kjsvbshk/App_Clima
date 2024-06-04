import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEZ75A_JKuGgKjGYEocntPOqgOTjXOmmg",
  authDomain: "app-clima-6e02b.firebaseapp.com",
  projectId: "app-clima-6e02b",
  storageBucket: "app-clima-6e02b.appspot.com",
  messagingSenderId: "138594272560",
  appId: "1:138594272560:web:e13ce223c6f863d24e74f5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
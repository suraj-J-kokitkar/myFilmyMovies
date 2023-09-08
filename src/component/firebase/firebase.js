
import { initializeApp } from "firebase/app";
import { getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyByjA2TJFK66s9VHRF-vnnQznDCEO3xrQc",
  authDomain: "myfilmymovies-96c6c.firebaseapp.com",
  projectId: "myfilmymovies-96c6c",
  storageBucket: "myfilmymovies-96c6c.appspot.com",
  messagingSenderId: "611733207011",
  appId: "1:611733207011:web:b6ca787d2a7c5cb7b792d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db,"movies");
export const reviewRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
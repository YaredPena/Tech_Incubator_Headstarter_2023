// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1Aa_fGbrwudchPjzjNhP8y5G7iJZvL-k",
  authDomain: "tech-incubator-d7cc7.firebaseapp.com",
  projectId: "tech-incubator-d7cc7",
  storageBucket: "tech-incubator-d7cc7.appspot.com",
  messagingSenderId: "101914512124",
  appId: "1:101914512124:web:be158ab31b36e83f7ae579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const realtimeDb = getDatabase(app);

export default app;
export { db, realtimeDb };
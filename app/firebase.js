// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL90sgdIJ6CgrBA47g1wYPfglDkiZ2xS8",
  authDomain: "pantry-checker-mdoty.firebaseapp.com",
  projectId: "pantry-checker-mdoty",
  storageBucket: "pantry-checker-mdoty.appspot.com",
  messagingSenderId: "285061607458",
  appId: "1:285061607458:web:e333e3c622f49d95e4da7b",
  measurementId: "G-YP3WSQMQ67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtYYArDrQ21pnmzBAQD-Irhxs3oChPmHA",
  authDomain: "festive-crayon.firebaseapp.com",
  projectId: "festive-crayon",
  storageBucket: "festive-crayon.appspot.com",
  messagingSenderId: "563816921433",
  appId: "1:563816921433:web:fbfacc5a77b170ecae3448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
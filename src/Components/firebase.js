// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg2vKZEosX8P6O-ioMkBMnBQ0K352oDZU",
  authDomain: "nitp-placements.firebaseapp.com",
  projectId: "nitp-placements",
  storageBucket: "nitp-placements.appspot.com",
  messagingSenderId: "976395564981",
  appId: "1:976395564981:web:31ed363b8f6fa5b9f78bfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase();
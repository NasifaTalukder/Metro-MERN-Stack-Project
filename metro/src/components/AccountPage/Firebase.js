import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDeppSw3H17OfXdVI66aTIE1escyCJ9okM",
  authDomain: "metro-website-2d893.firebaseapp.com",
  databaseURL: "https://metro-website-2d893-default-rtdb.firebaseio.com",
  projectId: "metro-website-2d893",
  storageBucket: "metro-website-2d893.appspot.com",
  messagingSenderId: "961177031576",
  appId: "1:961177031576:web:ea533e67a2757374aa11ed"
};


const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const db = getFirestore(app);

export { Auth, db };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7Egk7XH7vie36b9SVZHArkcPqxAU4sHg",
  authDomain: "jsearch-11e02.firebaseapp.com",
  projectId: "jsearch-11e02",
  storageBucket: "jsearch-11e02.appspot.com",
  messagingSenderId: "208107636200",
  appId: "1:208107636200:web:0d7d45e1be3fac2b45d05d",
  measurementId: "G-FXZBF6T02L"
};

// Initialize Firebase
// export const firebaseApp = initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;



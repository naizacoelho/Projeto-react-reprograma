// Import the functions you need from the SDKs you need
import {getDatabase} from "firebase/database"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI3qEK-mkpdGGE5hwjX9sGUvR_7ZzWQYw",
  authDomain: "projeto-naizas15.firebaseapp.com",
  projectId: "projeto-naizas15",
  storageBucket: "projeto-naizas15.appspot.com",
  messagingSenderId: "68087796541",
  appId: "1:68087796541:web:5df170c8dcf37f2447eb54",
databaseURL: "https://projeto-naizas15-default-rtdb.firebaseio.com/",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database= getDatabase()
export default database
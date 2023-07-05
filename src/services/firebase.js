// Import the functions you need from the SDKs you need
import {getDatabase} from "firebase/database"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MENSSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
databaseURL: import.meta.env.VITE_DATABASE_URL,
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database= getDatabase()
export default database
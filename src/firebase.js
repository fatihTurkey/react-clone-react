// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJP8uuLrXbQWFyJGViTWd68M4S0hvyrW0",
  authDomain: "realtor-clone-react-d9056.firebaseapp.com",
  projectId: "realtor-clone-react-d9056",
  storageBucket: "realtor-clone-react-d9056.appspot.com",
  messagingSenderId: "441755557307",
  appId: "1:441755557307:web:22e589633ba2739d6db89e",
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()

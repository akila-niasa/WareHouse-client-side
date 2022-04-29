// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-f1AZ-xw2q3qOURjSyiqi3QkcVtzubjY",
  authDomain: "warehouse-management-2d317.firebaseapp.com",
  projectId: "warehouse-management-2d317",
  storageBucket: "warehouse-management-2d317.appspot.com",
  messagingSenderId: "850130248671",
  appId: "1:850130248671:web:7fa892cd7e5debcde39a6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth
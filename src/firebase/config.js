// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEi389iMeZzb_z2UeWMCdmvnAcaLGeB6A",
  authDomain: "tienda-lamp.firebaseapp.com",
  projectId: "tienda-lamp",
  storageBucket: "tienda-lamp.appspot.com",
  messagingSenderId: "786730277374",
  appId: "1:786730277374:web:c05b5e80f15ec8702688af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
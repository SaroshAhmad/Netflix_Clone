import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBk82kJ7ohS_s9cXq5QcHfH7c2lbIHYBpU",
    authDomain: "netflix-clone-47030.firebaseapp.com",
    projectId: "netflix-clone-47030",
    storageBucket: "netflix-clone-47030.appspot.com",
    messagingSenderId: "534875990484",
    appId: "1:534875990484:web:3a9a7509e49f350de24e41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
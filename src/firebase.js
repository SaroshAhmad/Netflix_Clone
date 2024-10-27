import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";


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

const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        alert(error)
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error)
    }
}

const logout = () => {
    signOut(auth);
}

export { auth, db, login, logout, signUp };
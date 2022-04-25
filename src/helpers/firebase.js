// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Xs17QMMO8vp_KPTQR_YPCBM7QLP3Ktc",
  authDomain: "blog-milestone.firebaseapp.com",
  projectId: "blog-milestone",
  storageBucket: "blog-milestone.appspot.com",
  messagingSenderId: "1070907205799",
  appId: "1:1070907205799:web:219d42af643b6e2b599382"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, 
  password, navigate) =>{
  try {
    let userCredential = await createUserWithEmailAndPassword (
      auth, 
      email, 
      password
    )
    navigate("/dashboard")
    console.log(userCredential)
  } catch (error) {
    
  }
}

export const signIn = async (email, 
  password, navigate) =>{
  try {
    let userCredential = await signInWithEmailAndPassword(auth, email, password)
    navigate("/dashboard")

  } catch (err) {
    alert(err.message)
  }
}
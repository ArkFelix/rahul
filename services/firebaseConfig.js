import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpfxS7abrWqcARPxSwIFr7ri4N5JMOeS4",
  authDomain: "gifs-c4406.firebaseapp.com",
  projectId: "gifs-c4406",
  storageBucket: "gifs-c4406.appspot.com",
  messagingSenderId: "762481832806",
  appId: "1:762481832806:web:01073a2729988d1bf60ea7",
  measurementId: "G-7YGT25PPC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Additional actions after successful signup (e.g., update user profile)
    return userCredential;
  } catch (error) {
    console.error('Signup Error:', error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Additional actions after successful login
    return userCredential;
  } catch (error) {
    console.error('Login Error:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    // Additional actions after successful logout
  } catch (error) {
    console.error('Logout Error:', error);
    throw error;
  }
};
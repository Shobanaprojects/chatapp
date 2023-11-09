import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDh1IdM6d26cPRE6H0GPzdazSKwLJBkExw",
  authDomain: "chattestapp-f2834.firebaseapp.com",
  projectId: "chattestapp-f2834",
  storageBucket: "chattestapp-f2834.appspot.com",
  messagingSenderId: "543120371532",
  appId: "1:543120371532:web:92f8cdfd09a80c9937e9e9",
  measurementId: "G-608HLCVZKG"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();






import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDcRH43_V1dPpViDs5xDlec0yukU5qF9Dw",
    authDomain: "hustlers-heaven-webstore.firebaseapp.com",
    projectId: "hustlers-heaven-webstore",
    storageBucket: "hustlers-heaven-webstore.appspot.com",
    messagingSenderId: "808093424362",
    appId: "1:808093424362:web:7b2a45cf7d0ccc7991d593",
    measurementId: "G-K60228V1ZX"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiHPSVPkWaRf9latZYbCzx-YZHfhNH8EA",
    authDomain: "ema-john-simple-65562.firebaseapp.com",
    projectId: "ema-john-simple-65562",
    storageBucket: "ema-john-simple-65562.appspot.com",
    messagingSenderId: "260069310745",
    appId: "1:260069310745:web:68385fb947409fc2bd0588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default (auth)
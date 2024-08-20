// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-09tRW2sEJbtwP0bDgSqjuGbBD6thnMk",
    authDomain: "flashcards-5519a.firebaseapp.com",
    projectId: "flashcards-5519a",
    storageBucket: "flashcards-5519a.appspot.com",
    messagingSenderId: "1001321386686",
    appId: "1:1001321386686:web:eef55578bfc1e8ba5884ef",
    measurementId: "G-H0DK8XX03L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
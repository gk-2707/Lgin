// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPCYHfuDUPunhW3RmsO5oGwL0pEc-6ogE",
    authDomain: "data-b-db426.firebaseapp.com",
    projectId: "data-b-db426",
    storageBucket: "data-b-db426.appspot.com", // Fixed typo in the storageBucket URL
    messagingSenderId: "664478112145",
    appId: "1:664478112145:web:924135c404a088322f6230"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google Sign-In
document.getElementById("googleLogin").addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            // Store user info in sessionStorage to pass to the next page
            sessionStorage.setItem('userName', user.displayName);
            sessionStorage.setItem('userEmail', user.email);
            sessionStorage.setItem('userPhoto', user.photoURL);

            // Redirect to next page
            window.location.href = "next.html";
        })
        .catch((error) => {
            console.error("Error:", error);
            alert(`Error: ${error.message}`);
        });
});

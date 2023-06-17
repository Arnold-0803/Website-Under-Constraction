import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAiL_KIWJTR50ACCnIbueNd2ZxEZD1sggc",
    authDomain: "data-arnold.firebaseapp.com",
    databaseURL: "https://data-arnold-default-rtdb.firebaseio.com",
    projectId: "data-arnold",
    storageBucket: "data-arnold.appspot.com",
    messagingSenderId: "9239573221",
    appId: "1:9239573221:web:b607a13392fb7a429d9a0c"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

const logInEmail = document.querySelector('.login-email');
const logInPassword = document.querySelector('.login-password');
const logInButton = document.querySelector('.login-button');

const userName = document.querySelector('.user-name');
const userEmail = document.querySelector('.user-email');
const userPassword = document.querySelector('.user-password');
const signUpButton = document.querySelector('.signup-button');

signUpButton.addEventListener('click', function () {
    var signUpName = userName.value;
    var signUpEmail = userEmail.value;
    var signUpPassword = userPassword.value;

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then((userCredentila) => {
            const user = userCredentila.user;

            // set(ref(auth, 'user/' + user.uid), {
            //     signUpName: signUpName,
            //     signUpEmail: signUpEmail
            // })
            window.alert('SUCCESSFULLY USER CREATED!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            window.alert(errorMessage);
        })
})

logInButton.addEventListener('click', function () {
    var email = logInEmail.value;
    var password = logInPassword.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredentila) => {
            window.alert('SUCCESSFULLY LOGGED IN WELLCOME!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            window.alert(errorMessage);
        })
})







const wrapper = document.querySelector('#wrapper');
const loginLink = document.querySelector('.login-link');
const signupLink = document.querySelector('.signup-link');

signupLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})
/***************************
 *   
 * file: 
 * /middleware/firebase/index.js
 *
 * Summary: 
 * Create connection with firebase.
 *
 * Description: 
 * In order to create connection and set on local storage the info.
 *
 * Files Using: 
 * /middleware/firebase/database/index.js
 *
***************************/

import firebase from 'firebase/app';

import auth from 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';
import 'firebase/firestore';
import 'firebase/storage';

// ## Firebase connections details
const firebaseConfig = {
    apiKey: "AIzaSyAq90zzMd89b-FnNc-XEiWvKMqzr2lszZE",
    authDomain: "get-statistics-aa262.firebaseapp.com",
    databaseURL: "https://get-statistics-aa262-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "get-statistics-aa262",
    storageBucket: "get-statistics-aa262.appspot.com",
    messagingSenderId: "1034836682103",
    appId: "1:1034836682103:web:58a97bf6795e3caa4f6d72"
};

// ## Create the connection init.
firebase.initializeApp(firebaseConfig);

// When auth state changes -> 
// Save User Info on Local Storage + window
firebase.auth().onAuthStateChanged(user => {
    window.user = user;
    user = JSON.stringify(user)
    localStorage.setItem('user', user);
});

export default {
    firebase
};
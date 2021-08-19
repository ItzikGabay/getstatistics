/***************************
 *
 * file: 
 * /firebase/firestore/index.js
 *
 * Summary: 
 * FIRESTORE - Database CRUD functions.
 *
 * Description: 
 * Functions that gives you communication with the Firebase & Firestore DB.
 *
 *
***************************/ 

import firestoreInstance from '../'
import database from 'firebase/database'
import firestore from 'firebase/firestore'


/**
 * Send get request to retrieve all data from firebase.
 * @param {Object} options - object {id:} of user & {route:} where to read in Firebase.
 * @return {Array} array Data of request.
 */
function findAll(options) {
    // Add a new document with a generated id.
    debugger;
    firestoreInstance.firebase.firestore().collection("test").add({
        name: "Tokyo",
        country: "Japan"
    })
        .then((docRef) => {
            debugger;
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}


export default {
    findAll
}
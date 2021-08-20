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

import firestoreInstance from '../';
import database from 'firebase/database';
import firestore from 'firebase/firestore';


/**
 * Send get request to retrieve all data from firebase.
 * @param {Object} options - object {id:} of user & {route:} where to read in Firebase.
 * @return {Array} array Data of request.
 */
async function findAll(options) {

    const snapshot = await firestoreInstance.firebase.firestore().collection(options.endpoint).get();
    return snapshot.docs.map(doc => doc.data());

    // Add a new document with a generated id.
}


/**
 * Find specific item from database
 * @param {Object} options - object {endpoint: 'tablename'}  & {id: }.
 * @return {object} return the specific item.
 */
async function findById(options) {
    const snapshot = await firestoreInstance.firebase.firestore().collection(options.endpoint).doc(options.id).get();
    // return snapshot.docs.map(doc => doc.data());
    return snapshot;
}


/**
 * Insert new item to Firestore.
 * @param {Object} options - object {endpoint: 'tablename'}  & {item: {newitem:} }.
 * @return {null} return null
 */
async function insertItem(options) {
    firestoreInstance.firebase.firestore().collection("test").add({
    name: "Tokyo",
    country: "Japan"
    })
    .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}


export default {
    findAll,
    findById,
    insertItem
};
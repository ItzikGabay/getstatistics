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
 * @param {Object} options - {route:} where to read in Firebase.
 * @return {Array} array Data of request.
 */
async function findAll(options) {

    const snapshot = await firestoreInstance.firebase.firestore().collection(options.endpoint).get();
    return snapshot.docs.map(doc => doc.data());

    // Add a new document with a generated id.
}

/**
 * Send get request to retrieve all data with query from firebase.
 * @param {Object} options - object {queryKey: queryValue} of search & {endpoint:} where to read in Firebase.
 * @return {Array} array Data of request.
 */
async function findAllWhere(options) {

    const snapshot = await firestoreInstance.firebase.firestore().collection(options.endpoint)
        .where(options.queryKey, '==', options.queryValue)
        .get();
    let result = snapshot.docs.map(doc => {
        let documentId = doc.id;
        doc = doc.data();
        doc.accountId = documentId;
        return doc;
    });
    return result;

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
    firestoreInstance.firebase.firestore().collection(options.endpoint).add(options.item)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        return 'Item added sucessfully!';
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}


export default {
    findAll,
    findById,
    insertItem,
    findAllWhere
};
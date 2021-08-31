/***************************
 *
 * file: 
 * /firebase/firestore/index.js
 *
 * Summary: 
 * Firestore (collections) Database CRUD functions.
 *
 * Description: 
 * Functions that gives you communication with the Firestore DB.
 *
 *
***************************/ 


// 1. if we have state
// 1.1 if we dont- Actions of GET




import firestoreInstance from '../';
import database from 'firebase/database';
import firestore from 'firebase/firestore';


/**
 * findAll function - 
 * Retrieve all data from firebase specific table collection.
 * @param {Object}: options - {endpoint: which table to read} 
 * @return {Array}: Firestore Promise table data.
 */
async function findAll(options) {

    const snapshot = await firestoreInstance.firebase.firestore().collection(options.endpoint).get();
    return snapshot.docs.map(doc => doc.data());

    // Add a new document with a generated id.
}

/**
 * findAllWhere function - 
 * Retrieve all data with query.
 * @param {Object}: options - {queryKey: which key to search} & 
 * {queryValue: which value is should to be} 
 * & {endpoint: Which table to read.} 
 * @return {Array}: Firestore Promise table data.
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
}

/**
 * findSubItem function - 
 * Find __DOC__ inside collection table.
 * @param {Object}: options - {endpoint: which table to read} & 
 * {account_id: doc ID to search} &
 * {subEndpoint: which second collection to read}.
 * @return {Array}: Firestore Promise table data.
 */
async function findSubItem(options) {

    const snapshot = await firestoreInstance.firebase.firestore()
        .collection(options.endpoint)
        .doc(options.account_id)
        .collection(options.subEndpoint)
        .get();
    
    let result = snapshot.docs.map(doc => {
        // pushing ID inside of the doc.
        let documentId = doc.id;
        doc = doc.data();
        doc.id = documentId;
        return doc;
    });
    return result;
}

/**
 * findSubItemById function -
 * Retrieve all data from firebase by ID query.
 * @param {Object}: options - {endpoint: which table to read} & 
 * {account_id: doc ID to search} &
 * {subEndpoint: which second collection to read}.
 * {item_sub_item_id: doc ID to get data}.
 * @return {Array}: Firestore Promise table data.
 */
async function findSubItemById(options) {

    const snapshot = await firestoreInstance.firebase.firestore()
        .collection(options.endpoint)
        .doc(options.account_id)
        .collection(options.subEndpoint)
        .doc(options.item_sub_item_id)
        .get();
    
    return { ...snapshot.data(), id: snapshot.id };
}

/**
 * findById function -
 * Find specific document by ID.
 * @param {Object}: options - {endpoint: which table to read} & 
 * {id: which doc ID you want to get data}
 * @return {Array}: Firestore Promise table data.
 */
async function findById(options) {
    const snapshot = await firestoreInstance.firebase.firestore().collection(options.endpoint).doc(options.id).get();
    // return snapshot.docs.map(doc => doc.data());
    return snapshot;
}

/**
 * InsertItem function - 
 * Insert new doc to collection table.
 * @param {Object}: options - {endpoint: which table to read}
 * {item: {Object} - which item you adding}
 */
async function insertItem(options) {
    return firestoreInstance.firebase.firestore().collection(options.endpoint).add(options.item)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        return docRef;
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

/**
 * insertSubItem function - 
 * Insert new doc to new or existed collection.
 * @param {Object}: options - 1. {endpoint: which table to read} &
 * 2. {item: {Object} - which item you adding} & 
 * 3. {doc_id: doc ID to search} &
 * 4. {subEndpoint: which second collection to read} & 
 * 5. {item: {Object} - which item you adding}
 * @return {Object}: new item added
 */
async function insertSubItem(options) {
    return firestoreInstance.firebase.firestore()
        .collection(options.endpoint)
        .doc(options.doc_id)
        .collection(options.subEndpoint)
        .add(options.item)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        return docRef;
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

/**
 * insertItemSubItem function - 
 * Insert new doc to new or existed collection under doc's 
 * collection that is under doc's collections. (Nested)
 * exp: collection1/:docs1/collection2/:docs2/collection3/:docs3 <- here.
 * @param {Object}: options - 
 * 1. {endpoint: which table to read} &
 * 2. {item: {Object} - which item you adding} & 
 * 3. {doc_id: doc ID to search} &
 * 4. {subEndpoint: which second collection to read} & 
 * 5. {id: doc ID to search inside} &
 * 6. {thirdEndpoint: which second collection to read inside} & 
 * 7. {item: {Object} - which item you adding}
 * @return {Object}: new item added
 */
async function insertItemSubItem(options) {
    let temp = { ...options };
    delete temp.item;
    temp.item = { name: 'Test' };
    let result = await insertSubItem(temp);
    return firestoreInstance.firebase.firestore()
        .collection(options.endpoint)
        .doc(options.doc_id)
        .collection(options.subEndpoint)
        .doc(result.id)
        .collection(options.thirdEndpoint)
        .add(options.item)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        return docRef;
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

/**
 * InsertItem function - 
 * Insert new doc to collection table.
 * @param {Object}: options - {endpoint: which table to read}
 * @param {Object}: options - {doc_id: which doc to search}
 * {item: {Object} - which type you adding to current item - object, array, etc}
 */
async function setAtDoc(options) {
    return firestoreInstance.firebase.firestore().collection(options.endpoint).doc(options.doc_id).set(options.item)
    .then((docRef) => {
        return docRef;
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

/**
 * InsertItem function - 
 * Insert new doc to collection table.
 * @param {Object}: options - {endpoint: which table to read}
 * @param {Object}: options - {doc_id: which doc to search}
 * {item: {Object} - which type you adding to current item - object, array, etc}
 */
async function updateSubDocById(options) {
    return firestoreInstance.firebase.firestore()
        .collection(options.endpoint)
        .doc(options.account_id)
        .collection(options.subEndpoint)
        .doc(options.item_sub_item_id)
        .update(options.item)
    .then((docRef) => {
        return docRef;
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

export default {
    findAll,
    findById,
    insertItem,
    findAllWhere,
    insertSubItem,
    findSubItem,
    findSubItemById,
    insertItemSubItem,
    setAtDoc,
    updateSubDocById
};
/***************************
 *
 * file: 
 * /firebase/database/realtime/index.js
 *
 * Summary: 
 * FIREBASE Realtime Database CRUD functions.
 *
 * Description: 
 * With the functions on this file,
 * you are communicate with realtime DB
 * when needed. 
 *
 *
***************************/ 

import firebaseInstance from '../';
import database from 'firebase/database';


/**
 * Send get request to retrieve all data from firebase.
 * @param {Object} options - object {id:} of user & {route:} where to read in Firebase.
 * @return {Array} array Data of request.
 */
function findAll(options) {
    return firebaseInstance.firebase.database().ref(`${options.endpoint}/${window.user.uid}`).once('value')
        .then(res => {
            const arr = [];
            const map = res.val();
            for (const key in map) {
                const item = map[key];
                item.id = key;
                arr.push(item);
            }
            return arr;
        });
}


/**
 * Find specific item from database
 * @param {Object} options - object {endpoint: 'tablename'}  & {id: }.
 * @return {object} return the specific item.
 */
function findById(options) {
    return firebaseInstance.firebase.database().ref(`${options.endpoint}/${window.user.uid}`).once('value')
        .then(res => {
            const map = res.val();
            const filter = options.postId;
            return map[filter];
        });
}


/**
 * Insert new item to Firebase.
 * @param {Object} options - object {endpoint: 'tablename'}  & {item: {newitem:} }.
 * @return {null} return null
 */
function insertItem(options) {
    return firebaseInstance.firebase.database()
        .ref(`${options.endpoint}/${window.user.uid}`)
        .push(options.item);
}


/**
 * Find by id & Update the item to Firebase.
 * @param {Object} options - object {endpoint: 'tablename'},
 * {id: } of which to update,
 * {data: } data to update in db.
 * @return {null} return null
 */
function findByIdAndUpdate(options) {
    return firebaseInstance.firebase.database()
        .ref(`${options.endpoint}/${window.user.uid}/${options.id}`)
        .update(options.data);
}


/**
 * Find by id & Remove the item from Firebase.
 * @param {Object} options - object {endpoint: 'tablename'},
 * {id: } of which to remove,
 * @return {null} return null
 */
function findByIdAndRemove(options) {
    return firebaseInstance.firebase.database()
        .ref(`${options.endpoint}/${window.user.uid}/${options.id}`)
        .remove();
}



export default {
    findAll,
    insertItem,
    findById,
    findByIdAndUpdate,
    findByIdAndRemove
};
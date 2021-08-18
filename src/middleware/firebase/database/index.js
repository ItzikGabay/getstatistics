/***************************
 *
 * file: 
 * /firebase/database/index.vue
 *
 * Summary: 
 * Database CRUD functions.
 *
 * Description: 
 * Functions that gives you communication with the Firebase & Firestore DB.
 *
 *
***************************/ 

import firebaseInstance from '../'
import database from 'firebase/database'

/**
 * Send get request to retrieve all data from firebase.
 * @param {Object} options - {id:} of user & {route:} where to read in Firebase.
 * @return {Array} Data of request.
 */
function findAll(options) {
    return firebaseInstance.firebase.database().ref(`users/${window.user.uid}${options.endpoint}`).once('value')
        .then(res => {
            const arr = []
            const map = res.val()
            for (const key in map) {
                const item = map[key];
                item.id = key;
                arr.push(item)
            }
            return arr
    })
}

export default {
    findAll
}
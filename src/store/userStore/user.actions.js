/***************************
 *   
 * file: 
 * /store/userStore/actions.js
 *
 * Summary: 
 * Vuex Actions store file.
 *
 *
***************************/

import firestore from '../../middleware/database/firestore/index';

export default {
    // Set main user state as current user.
    setUserState: async ({ commit }, user) => {
        if (!user) {
            user = window.user;
        }
        commit("setUserConnectedID", user.uid);
        commit("setUserConnectedState", { name: user.displayName, username: user.uid, email: user.email });
    }
};
/***************************
 *   
 * file: 
 * /store/accountStore/actions.js
 *
 * Summary: 
 * Vuex Actions store file.
 *
 *
***************************/

import firestore from '../../middleware/database/firestore/index';

export default {
    test: async ({ commit }, item) => {
        const accounts = await firestore.findAll({ endpoint: 'accounts' });
        commit("setAccountsState", accounts)
        return accounts;
    }
};
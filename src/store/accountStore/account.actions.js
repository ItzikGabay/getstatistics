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
import firebaseInstance from "../../middleware/database/index";

export default {
    getUserAccounts: async ({ commit }, item) => {
        // TODOS: Change to generic
        const accounts = await firestore.findAllWhere({ endpoint: 'accounts', queryKey: 'owner_id', queryValue: 'H9mzR35AQ1MdHIi5Ifg1t1uAaRY2' });
        commit("setAccountsState", accounts);
        return accounts;
    },
    getAccountApiList: async ({ commit }, options) => {
        // TODOS: Change to generic
        const ApiList = await firestore.findSubItem(
            {
                endpoint: 'accounts',
                subEndpoint: 'platforms_connected',
                account_id: options.account_id,
                stats_ref: ''
            });
        commit("setApiConnectionsState", ApiList)
        return ApiList;
    },
    addAccount: async ({ commit }, accountName) => {
        let item = {
            // TODOS: Change to generic
            owner_id: 'H9mzR35AQ1MdHIi5Ifg1t1uAaRY2',
            name: accountName,
            // users_connected: [], // will create collection later
            // platforms_connected: []
            // posts: []
        };
        const accounts = await firestore.insertItem({ endpoint: 'accounts', item: item });
        commit("setAccountsState", accounts);
        return accounts;
    },
    addNewApiConnection: async ({ commit }, options) => {
        const newApiConnection = await firestore.insertSubItem({ endpoint: 'accounts', subEndpoint: 'platforms_connected', doc_id: options.doc_id, item: options.item });
        return newApiConnection;
    }
};
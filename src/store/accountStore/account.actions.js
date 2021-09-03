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
    /**
     * getUserAccounts function - 
     * Retrieve all accounts that registerd to
     * the current user logged in & Commit to state.
     * @params: not needed.
     * @return: [Array] - list of accounts objects
     */
    getUserAccounts: async ({ commit }, item) => {
        // TODOS: Change to generic
        const accounts = await firestore.findAllWhere({ endpoint: 'accounts', queryKey: 'owner_id', queryValue: 'H9mzR35AQ1MdHIi5Ifg1t1uAaRY2' });
        commit("setAccountsState", accounts);
        return accounts;
    },
    /**
 * getUserAccounts function - 
 * Retrieve all accounts that registerd to
 * the current user logged in & Commit to state.
 * @params: not needed.
 * @return: [Array] - list of accounts objects
 */
    getAccountById: async ({ commit }, options) => {
        // TODOS: Change to generic
        const account = await firestore.findById({ endpoint: 'accounts', id: options.accountId});
        // commit("setAccountsState", accounts);
        return account;
    },
    /**
     * getAccountApiList function - 
     * Retrieve all Connected Platforms (api) that connected
     * to this specific account (with id).
     * @params: {Object} options.endpoint - which table to search in Firestore. (exp: 'accounts')
     * @params: {Object} options.subEndpoint - which collections to search in the table. (exp: 'platforms_connected')
     * @params: {Object} options.account_id - from which id we retrieve the data. (exp: 'fdfg4gt43dxfds42fd')
     * @return: [Array] of {Object} - the list from the firestore.
     */
    getAccountApiList: async ({ commit }, options) => {
        // TODOS: Change to generic
        const ApiList = await firestore.findSubItem(
            {
                endpoint: 'accounts',
                subEndpoint: 'platforms_connected',
                account_id: options.account_id
            });
        commit("setApiConnectionsState", ApiList);
        return ApiList;
    },
    /**
     * getItemSubItemById function - 
     * Retrieve specific connected platform data trough ID (api).
     * @params: {Object} options.endpoint - Which table to search in Firestore. (exp: 'accounts')
     * @params: {Object} options.subEndpoint - Which collections to search in the table. (exp: 'platforms_connected')
     * @params: {Object} options.account_id - From which id we retrieve the data. (exp: 'fdfg4gt43dxfds42fd')
     * @params: {Object} options.item_sub_item_id - Which ID to look in the table -> collection -> doc -> collection -> id (it's here). (exp: 'fdfg4gt43dxfds42fd')
     * @return: [Array] of {Object} - List from the firestore.
     */
    getItemSubItemById: async ({ commit }, options) => {
        // TODOS: Change to generic
        const ApiList = await firestore.findSubItemById(
            {
                endpoint: 'accounts',
                subEndpoint: 'platforms_connected',
                account_id: options.account_id,
                item_sub_item_id: options.itemSubItemID
            });
        commit("setCurrentPlatformState", ApiList);
        return ApiList;   
    },
    /**
     * addAccount function - 
     * Add new account with owner(user) id.
     * @params: String - Account name (exp: 'itzik').
     * @return: New account created.
     */
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
        
        // After account added to DB, update in state aswell ->
        let DBResult = await firestore.findById({ endpoint: 'accounts', id: accounts.id })
        DBResult = DBResult.data()
        // push the id
        DBResult.accountId = accounts.id;
        // commit new result to state
        commit("pushAccountState", DBResult)
        return accounts;
    },
    addNewApiConnection: async ({ commit }, options) => {
        const newApiConnectionDB = await firestore.insertItem({ endpoint: 'stats', item: { account_id: options.doc_id } });
        let manipulatedItem = { ...options.item, stats_id: newApiConnectionDB.id };
        const newApiConnection = await firestore.insertSubItem({ endpoint: 'accounts', subEndpoint: 'platforms_connected', doc_id: options.doc_id, item: manipulatedItem });

        let DBResult = await firestore.findSubItemById({ endpoint: 'accounts', account_id: options.doc_id, subEndpoint: 'platforms_connected', item_sub_item_id: newApiConnection.id })
        commit("pushApiConnectionsState", DBResult)        
        return newApiConnection;
    },
};
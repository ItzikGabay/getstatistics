/***************************
 *   
 * file: 
 * /store/accountStore/mutations.js
 *
 * Summary: 
 * Vuex Mutations store file.
 *
 *
***************************/

export default {

    /***************
     * ! Account State
     ***************/

    // Set posts array to state.
    setAccountsState: ((state, accounts) => state.accounts = accounts),

    // Reset the id of the specific post of editing.
    resetAccountsState: ((state) => state.accounts = ''),

    // Set edited post to to the main state.
    setCurrentAccountState: ((state, account) => state.currentAccount = account),

    // Push post to posts array of state.
    pushAccountState: ((state, newAccount) => state.accounts.push(newAccount)),

    // Reset edited post to to the main state.
    resetAccountState: ((state) => {
        for (const key in state.currentAccount) {
            state.currentAccount[key] = '';
        }        
    }),


    /***************
     * ! Account_ID State
     ***************/

    // Set the id of the specific post of editing.
    setAccountId: ((state, id) => state.account_id = id),

    // Reset the id of the specific post of editing.
    resetAccountId: ((state) => state.account_id = ''),

    
    /***************
     * ! Current_Platform inside account State
     ***************/
    
    // Set api connection to array of state.
    setApiConnectionsState: ((state, list) => state.currentAccount.platforms_connected = list),
    
    // Push api connection to state.
    pushApiConnectionsState: ((state, newApi) => state.currentAccount.platforms_connected.push(newApi)),

    // Set current platform of account id state.
    setCurrentPlatformState: ((state, platform) => state.currentApi = platform)

};
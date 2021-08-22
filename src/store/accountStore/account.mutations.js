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
    
    // Set posts array to state.
    setAccountsState: ((state, accounts) => state.accounts = accounts),

    // Set the id of the specific post of editing.
    setAccountId: ((state, id) => state.account_id = id),

    // Reset the id of the specific post of editing.
    resetAccountId: ((state) => state.account_id = ''),

    // Set edited post to to the main state.
    setAccountState: ((state, account) => state.currentAccount = account),
    
    // Reset edited post to to the main state.
    resetAccountState: ((state) => {
        for (const key in state.currentAccount) {
            state.currentAccount[key] = '';
        }        
    }),
    
    // Set posts array to state.
    setApiConnectionsState: ((state, list) => state.currentAccount.platforms_connected = list),

    setCurrentPlatformState: ((state, platform) => state.currentApi = platform)

};
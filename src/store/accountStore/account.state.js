/***************************
 *   
 * file: 
 * /store/accountStore/state.js
 *
 * Summary: 
 * Vuex State store file.
 *
 *
***************************/

export default {
    accounts: [],
    account_id: '',
    currentAccount: {
        name: '', // 'Flashdev',
        owner_id: '',
        platforms_connected: [{
            name: '', //'facebook',
            connected: '', // 'true',
        }],
    }
}
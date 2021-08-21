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
        account_id: '',
        owner_id: '',
        platforms_connected: [{
            name: '', //'facebook',
            connected: '', // 'true',
        }],
    }
};
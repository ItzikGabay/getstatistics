/***************************
 *   
 * file: 
 * /store/accountStore/index.js
 *
 * Summary: 
 * Import vuex from files.
 *
 *
***************************/

import state from './account.state';
import mutations from './account.mutations';
import actions from './account.actions';
import getters from './account.getters';

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
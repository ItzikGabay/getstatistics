/***************************
 *   
 * file: 
 * /store/index.js
 *
 * Summary: 
 * System store file.
 *
 *
***************************/

import Vue from 'vue'
import Vuex from 'vuex'
import postsStore from './postsStore'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        postsStore
    }
})

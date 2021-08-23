/***************************
 *   
 * file: 
 * /store/postsStore/actions.js
 *
 * Summary: 
 * Vuex Actions store file.
 *
 *
***************************/

import firestore from '../../middleware/database/firestore/index';

export default {
    test: async ({ commit }, item) => {
        const posts = await firestore.insertItem({ endpoint: 'posts', item: item });
        return posts;
    },
    getAccountPosts: async ({ commit }, options) => {
        const posts = await firestore.findAll({ endpoint: 'posts' });
        commit("setPostsState", posts);
        return posts;
    },
};
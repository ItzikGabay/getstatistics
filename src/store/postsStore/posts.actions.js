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
        const posts = await firestore.findSubItem({ endpoint: 'posts', account_id: options.id, subEndpoint: 'list'});
        commit("setPostsState", posts);
        return posts;
    },
    createPost: async ({ commit }, options) => {
        const posts = await firestore.insertSubItem({ endpoint: 'posts', subEndpoint: 'list', doc_id: options.accoundId, item: options.item });
        return posts;
    },
    setOrUpdatePost: async ({ commit }, options) => {
        firestore.setAtDoc({ endpoint: 'posts', doc_id: options.doc_id, item: options.item });
    },
};
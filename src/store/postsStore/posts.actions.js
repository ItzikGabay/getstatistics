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
        const posts = await firestore.findSubItem({ endpoint: 'posts', account_id: options.id, subEndpoint: 'list' });
        commit("resetPostsState");
        commit("setPostsState", posts);
        return posts;
    },
    getPostById: async ({ commit }, options) => {
        const post = await firestore.findSubItemById({ endpoint: 'posts', account_id: options.id, subEndpoint: 'list', item_sub_item_id: options.postId});
        commit("setEditedPostState", post);
        return post;
    },
    createPost: async ({ commit }, options) => {
        const newPost = await firestore.insertSubItem({ endpoint: 'posts', subEndpoint: 'list', doc_id: options.accoundId, item: options.item });
        let newPostId = newPost.id;
            
        let newPostData = await firestore.findSubItemById({ endpoint: 'posts', account_id: options.accoundId, subEndpoint: 'list', item_sub_item_id: newPostId});
        commit("pushPostsState", newPostData);
        return newPostData;
    },
    setOrUpdatePost: async ({ commit }, options) => {
        firestore.setAtDoc({ endpoint: 'posts', doc_id: options.doc_id, item: options.item });
    },
    updatePostById: async ({ commit }, options) => {
        firestore.updateSubDocById({
            endpoint: 'posts',
            subEndpoint: 'list',
            doc_id: options.account_id,
            item_sub_item_id: options.post_id,
            item: options.item
        });
    }
};
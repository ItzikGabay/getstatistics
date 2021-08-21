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

import realtime from '../../middleware/database/realtime/index';

export default {
    test: async ({ commit }, item) => {
        const posts = await realtime.insertItem({ endpoint: 'posts', item: item });
        return posts;
    }
};
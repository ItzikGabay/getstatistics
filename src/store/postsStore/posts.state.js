/***************************
 *   
 * file: 
 * /store/postsStore/state.js
 *
 * Summary: 
 * Vuex State store file.
 *
 *
***************************/

export default {
    posts: [],
    editedPostId: '',
    editedPost: {
        user_id: "",
        account_id: "",
        dateCreated: "",
        data: {
            title: "",
            content: "",
        },
        platforms: [{
            platform: "",
            posted: "",
            clickUrl: '',
            clickLinks: "",
            scheduleDate: "",
            scheduleTime: ""
            }]
      }
}

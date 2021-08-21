/***************************
 *   
 * file: 
 * /store/userStore/mutations.js
 *
 * Summary: 
 * Vuex Mutations store file.
 *
 *
***************************/

export default {
    
    // Set the id of the specific post of editing.
    setUserConnectedID: ((state, id) => state.userConnectedID = id),

    // Reset the id of the specific post of editing.
    resetUserConnectedID: ((state) => state.userConnectedID = ''),

    // Set edited post to to the main state.
    setUserConnectedState: ((state, post) => state.userConnected = post),
    
    // Reset edited post to to the main state.
    resetUserConnectedState: ((state) => {
        for (const key in state.userConnected) {
            state.userConnected[key] = '';
        }
    })
};
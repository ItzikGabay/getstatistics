export default {
    
    // Set posts array to state.
    setPostsState: ((state, posts) => state.posts = posts),

    // reset posts state
    resetPostsState: ((state) => state.posts = ''),

    // Push post to posts array of state.
    pushPostsState: ((state, post) => state.posts.push(post)),


    // Set the id of the specific post of editing.
    setEditedPostId: ((state, id) => state.editedPostId = id),

    // Reset the id of the specific post of editing.
    resetEditedPostId: ((state) => state.editedPostId = ''),


    // Set edited post to to the main state.
    setEditedPostState: ((state, post) => state.editedPost = post),
    
    // Reset edited post to to the main state.
    resetEditedPostState: ((state) => {
        for (const key in state.editedPost) {
            state.editedPost[key] = '';
        }
    })

};
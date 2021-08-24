/***************************
 *   
 * file: 
 * /components/posts/Add.vue
 *
 * Summary: 
 * Adding new post to user/account/posts
 *
 * Description: 
 * Whenever client want to add or add & schedule post,
 * we using this component.
 *
 * Father Components: 
 * views/posts/Posts.vue
 *
***************************/ 

<template>
  <div style="width: 300px;">
      <q-input standout v-model="name" label="Post name" />
      <q-input standout v-model="content" label="Content" />
      <q-btn color="primary" @click="addPost()">Add Post</q-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Add',
  data() {
    /**
     * name: name of post input.
     * content: content of post input.
     */
    return {
      name: '',
      content: '',
    }
  },
  methods: {
    ...mapActions("postsStore", ["createPost", "setAtDoc"]),
    /**
     * addPost() function - 
     * Sending user schema with user input data
     * to store actions, that's going to send
     * request to firebase and update state.
     */
    addPost() {
      // getting user id from LocalStorage
      const userId = JSON.parse(localStorage.getItem('user')).uid;
      // User schema we are sending.
      let post = {
        name: this.name,
        content: {
          title: 'hey!',
          data: this.content
        },
        schedules: [{
          title: 'facebook!',
          date: '11-11-1111'
        }],
        user_id: userId
      };
      // Action function:
      this.createPost({accoundId: this.$route.params.id, item: post})
      .then((res) => {
        // we can delete the res, 
        // it's here just for future use.
          return;
      })
      // this.setOrUpdatePost({item: post, account_id: this.$route.params.id, post_id: })
    }
  },
}
</script>

<style>

</style>
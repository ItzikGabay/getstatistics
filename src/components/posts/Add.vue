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
  <div>
    {{this.currentPost}}
    <!-- {{this.postId}} -->
      <!-- New Changes -->
    <div class="text-editor">
      <!-- <q-input standout v-model="this.currentPost.content.title" label="Title" /> -->
      <q-input standout v-model="currentPost.content.title" label="Title" />

      <q-editor
        v-model="currentPost.content.data"
        min-height="20rem"
        class="text-editor"
      />
    </div>

    <q-btn
      color="white"
      text-color="black"
      label="Insert"
      @click="addPost()"
      class="buttonMargin"
    />
    <q-btn
      color="white"
      text-color="black"
      label="Save"
      @click="updatePost"
      class="buttonMargin"
    />
    
    <div class="row">
      <div class="col-6" style="padding-right: 10px">
        <h5>HTML Preview:</h5>
        <q-card flat bordered>
          <q-card-section v-html="currentPost.content.data" />
        </q-card>
      </div>
      <div class="col-6">
        <h5>Hardcoded Preview:</h5>
        <q-card flat bordered>
          <q-card-section>
            <pre style="white-space: pre-line">{{ currentPost.content.data }}</pre>
          </q-card-section>
        </q-card>
      </div>
    </div>

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
      // currentPost: {
      //   title: '',
      //   content: ''
      // }
      currentPost: {
        content: {
          title: 'sdf',
          data: 'sdf'
        }
      },
      postId: this.$route.params.postId
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
        name: this.currentPost.content.title,
        date_created: '11-11-1111',
        content: {
          title: this.currentPost.content.title,
          data: this.currentPost.content.data
        },
        schedules: [{
          title: 'twitter',
          date: '11-11-1111',
          posted: false,
          published_url: '',
          clicks: 0,
          published_time: ''
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
      this.$router.push(`/accounts/${this.$route.params.id}/posts`)
    },
    updatePost() {
      alert('hello!')
    }
  },
  created() {
    // Checks if state is commited or not,
    // if not, we going to retrieve it again.
    // if(!this.$store.state.postsStore.editedPost.content.title) {
    //   // get request retreive data
    // } else {
    //   this.currentPost = this.$store.state.postsStore.editedPost
    // }
  }
}
</script>

<style>
.text-editor {
  margin: 30px 0 0 0;
}
</style>
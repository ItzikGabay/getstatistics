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
    
    <!-- Text Editor -->
    <div class="text-editor">
      <q-input standout v-model="currentPost.content.title" label="Title" />
      <q-editor
        v-model="currentPost.content.data"
        min-height="20rem"
        class="text-editor"
              :dense="$q.screen.lt.md"
      :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          },
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['print', 'fullscreen'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
    />
    </div>
    <!-- Text Editor -->

  <!-- Update button -->
      <q-btn
        v-if="this.$route.params.post_id"
        color="white"
        text-color="black"
        label="Save"
        @click="updatePost"
        class="buttonMargin"
      />
  <!-- Update button -->


  <!-- Add button -->
        <q-btn
        v-else
        color="white"
        text-color="black"
        label="Insert"
        @click="addPost()"
        class="buttonMargin"
      />
  <!-- Add button -->
    
    <hr style="margin: 15px 0 15px 0;">

    <!-- HTML Preview -->
    <div class="row">
      <div class="col-6" style="padding-right: 10px">
        <h5>HTML Preview:</h5>
        <q-card flat bordered>
          <q-card-section v-html="currentPost.content.data" />
        </q-card>
      </div>
      <!-- HTML Preview -->

      <!-- Harcoded Preview -->
      <div class="col-6">
        <h5>Hardcoded Preview:</h5>
        <q-card flat bordered>
          <q-card-section>
            <pre style="white-space: pre-line">{{ currentPost.content.data }}</pre>
          </q-card-section>
        </q-card>
      </div>
      <!-- Harcoded Preview -->

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Add',
  data() {

    /**
     * title: name of post input.
     * data: content of post input.
     */
    return {
      postId: this.$route.params.postId,
      currentPost: {
        content: {
          title: '',
          data: ''
        }
      },
    }
  },
  methods: {
    ...mapActions("postsStore", ["createPost", "setAtDoc", "updatePostById"]),

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

    /**
     * updatePost() function - 
     * Updating specific post by his ID.
     */
    async updatePost() {
      let result = await this.updatePostById({
        account_id: this.$route.params.id, 
        post_id: this.$route.params.post_id, 
        item: post
        })
    }
  },
  created() {
    // Checks if state is commited or not,
    // if not, we going to retrieve it again.
    if(this.$route.params.post_id) {
      // get request retreive data
      // but needs checks first if loaded
      return this.currentPost = this.$store.state.postsStore.editedPost;
      }
      let result = this.$q.lang.rtl
      // debugger;
    }
}
</script>

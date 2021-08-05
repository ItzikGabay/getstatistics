<template>
  <div class="q-px-lg q-pb-md">
    <h4>Goodluck!</h4>

     <q-input standout v-model="editedPost.title" label="Title" />
    <div>Content:</div>
    <q-editor v-model="editedPost.content" min-height="20rem" />

    <q-btn v-if="!post" color="white" text-color="black" label="Insert" @click="insertPost" />
    <q-btn v-if="post" color="white" text-color="black" label="Save" @click="updatePost" />

    <h4>HTML Preview:</h4>
    <q-card flat bordered>
      <q-card-section>
        <pre style="white-space: pre-line">{{ editor }}</pre>
      </q-card-section>
    </q-card>

    <h4>Hardcoded Preview:</h4>
    <q-card flat bordered>
      <q-card-section v-html="editor" />
    </q-card>
  </div>
</template>

<script>
import localStorageDriver from "../../middleware/local-storage/index";
import PostViewer from "../../components/PostViewer.vue";

export default {
  name: "PostCreate",
  props: ['post'],
  components: {
    PostViewer,
  },
  data() {
    return {
      editedPost: {
        id: new Date().getTime(),
        title: '',
        content: '',
        dateCreated: new Date().getTime()
      },
      // title: this.post.title,
      title: 'hey222',
      editor: '',
      userPost: {
        title: "This is title of post",
        content: {
          0: "This is a test for a post. It should to be a lot long...",
        },
      },
    };
  },
  methods: {
    updatePost() {
    localStorageDriver.update("posts", this.post.id, this.editedPost);
    this.$router.push(`/posts/${this.post.id}`)
    },
    insertPost() {
      localStorageDriver.insert("posts", this.editedPost);
      this.$router.push(`/posts${this.editedPost.id}/`)
    },
  },
  created() {
    if(this.post) {
      this.editedPost = this.post
    }
  }
};
</script>

<style></style>

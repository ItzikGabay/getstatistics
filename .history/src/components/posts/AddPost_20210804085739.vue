<template>
  <div class="q-px-lg q-pb-md">
    <h4>Goodluck!</h4>

     <q-input standout v-model="editedPost" label="Title" />
    <div>Content:</div>
    <q-editor v-model="editor" min-height="20rem" />

    <q-btn v-if="!post" color="white" text-color="black" label="Insert" @click="insertPost" />
    <q-btn v-if="post" color="white" text-color="black" label="Save" @click="insertPost" />

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
        title: 'hey',
        content: 'helcccc',
        dateCreated: '123'
      },
      title: this.post.title,
      editor: this.post.content,
      userPost: {
        title: "This is title of post",
        content: {
          0: "This is a test for a post. It should to be a lot long...",
        },
      },
    };
  },
  methods: {
    insertPost() {
      let newPost = {
        id: Math.floor(Math.random() * (500 - 30 + 1)) + 30,
        title: this.title,
        content: this.editor,
        dateCreated: new Date().getTime(),
      };
      localStorageDriver.insert("posts", newPost);
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

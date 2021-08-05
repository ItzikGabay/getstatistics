<template>
  <div class="q-px-lg q-pb-md">
    <h4>Your title:</h4>

    <q-input standout v-model="editedPost.title" label="Title" />
    <div>Content:</div>
    <q-editor v-model="editedPost.content" min-height="20rem" />

    <q-btn
      v-if="!post"
      color="white"
      text-color="black"
      label="Insert"
      @click="insertPost"
    />
    <q-btn
      v-if="post"
      color="white"
      text-color="black"
      label="Save"
      @click="updatePost"
    />

    <div class="row">
      <div class="col-6" style="padding-right: 10px">
        <h5>HTML Preview:</h5>
        <q-card flat bordered>
          <q-card-section v-html="editedPost.content" />
        </q-card>
      </div>
      <div class="col-6">
        <h5>Hardcoded Preview:</h5>
        <q-card flat bordered>
          <q-card-section>
            <pre style="white-space: pre-line">{{ editedPost.content }}</pre>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import localStorageDriver from "../../middleware/local-storage/index";
import PostViewer from "./PostViewer.vue";

export default {
  name: "PostCreate",
  props: ["post"],
  components: {
    PostViewer,
  },
  data() {
    return {
      editedPost: {
        id: new Date().getTime(),
        title: "",
        content: "",
        dateCreated: new Date().getTime(),
        
      },
    };
  },
  methods: {
    updatePost() {
      localStorageDriver.update("posts", this.post.id, this.editedPost);
      this.$router.push(`/posts/${this.post.id}`);
    },
    insertPost() {
      localStorageDriver.insert("posts", this.editedPost);
      this.$router.push(`/posts/${this.editedPost.id}/`);
    },
  },
  created() {
    if (this.post) {
      this.editedPost = this.post;
    }
  },
};
</script>

<style></style>

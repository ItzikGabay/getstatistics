<template>
  <div>
    <div class="text-editor">
      <q-input standout v-model="editedPost.title" label="Title" />

      <q-editor
        v-model="editedPost.content"
        min-height="20rem"
        class="text-editor"
      />
    </div>

    <q-btn
      v-if="!post"
      color="white"
      text-color="black"
      label="Insert"
      @click="insertPost"
      class="buttonMargin"
    />
    <q-btn
      v-if="post"
      color="white"
      text-color="black"
      label="Save"
      @click="updatePost"
      class="buttonMargin"
    />

    <div class="row">
      <div class="col-6" style="padding-right: 10px">
        <h5>HTML Preview:</h5>
        <h5>{{ editedPost.title }}</h5>
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
import Drivers from "../../middleware/drivers/index";
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
        postedBy: "Itzikgabay",
        title: "",
        content: "",
        dateCreated: Drivers.todayDateString()[0].toString(),
        isScheduled: true,
        scheduleTime: {
          year: "2020",
          month: "04",
          day: "09",
          hour: "18",
          minute: "30",
          platforms: ["facebook", "youtube", "ravmeser", "google"],
          platformsObj: {
            facebook: {
              posted: true,
              clickLinks: 0,
              dateScheduled: "",
            },
            youtube: { posted: true },
            ravmeser: { posted: true, clickLinks: 0, dateScheduled: "" },
            google: { posted: true },
            taboola: {},
          },
        },
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

<style>
.text-editor {
  margin: 30px 0 0 0;
}
</style>

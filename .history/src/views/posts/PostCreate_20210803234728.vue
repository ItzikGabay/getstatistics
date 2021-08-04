<template>
  <div class="q-px-lg q-pb-md">

    <AddPost/>
  </div>
</template>

<script>
import localStorageDriver from "../../middleware/local-storage/index";
import AddPost from "../../components/posts/AddPost.vue";

export default {
  name: "PostCreate",
  components: {
    AddPost
  },
  data() {
    return {
      title: "",
      editor: "",
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
};
</script>

<style></style>

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
  methods: {
      
  }
};
</script>

<style></style>

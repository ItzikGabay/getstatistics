<template>
  <div class="q-px-lg q-pb-md">
    <AddPost :post="post"/>
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
          post: ''
      }
  },
  methods: {
    getItem() {
         this.post = localStorageDriver.getItemByID('posts', this.$route.params.id)
    }
  },
  created() {
    this.getItem()
  }
};
</script>

<style></style>

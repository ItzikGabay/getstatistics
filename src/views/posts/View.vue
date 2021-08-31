/***************************
 *   
 * file: 
 * /views/posts/View.vue
 *
 * Summary: 
 * Main view *Post* component.
 *
 * Description: 
 * Let user see data about specific post
 *
 * Components used: 
 * components/posts/Info.vue
 * components/posts/Schedules.vue
 *
***************************/ 

<template>
  <div>
    <Info :postData="this.editedPost" />
    <Schedules :postData="this.editedPost" />
  </div>
</template>

<script>
import Info from "../../components/posts/Info.vue";
import Schedules from "../../components/posts/Schedules.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Viewer",
  components: {
    Info,
    Schedules,
  },
  computed: {
    ...mapState("postsStore", ["posts", "editedPost"]),
  },
  methods: {
    ...mapActions("postsStore", ["getPostById"]),
    async read() {
      this.$q.loading.show()
      await this.getPostById({
        id: this.$route.params.id,
        postId: this.$route.params.post_id,
      });
      this.$q.loading.hide()
    },
  },
  created() {
    this.read();
  },
};
</script>

<style>
</style>
<template>
  <div>
      <Info :postData="this.currentPost"/>
      <Schedules :postData="this.currentPost"/>
  </div>
</template>

<script>
import Info from '../../components/posts/Info.vue';
import Schedules from '../../components/posts/Schedules.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Viewer',
  components: {
    Info, Schedules
  },
  data() {
    return {
      currentPost: {content: {
        title: 'Loading..',
        data: 'Loading..'
      }}
    }
  },
  methods: {
    ...mapActions("postsStore", ["getPostById"]),
    async read() {
      await this.getPostById({id: this.$route.params.id, postId: this.$route.params.post_id});
      this.currentPost = this.$store.state.postsStore.editedPost;
    }
  },
  created() {
    this.read();
  }
}
</script>

<style>

</style>
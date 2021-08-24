<template>
  <div style="width: 300px;">
      <q-input standout v-model="name" label="Post name" />
      <q-input standout v-model="content" label="Content" />
      <q-btn color="primary" @click="addPost()">Add Post</q-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Add',
  data() {
    return {
      name: '',
      content: '',
    }
  },
  methods: {
    ...mapActions("postsStore", ["createPost"]),
    addPost() {
      const userId = JSON.parse(localStorage.getItem('user')).uid;
      let post = {
        name: this.name,
        content: this.content,
        user_id: userId
      };
      this.createPost({accoundId: this.$route.params.id, item: post})
      .then((res) => {
          return;
      })
    }
  },
}
</script>

<style>

</style>
<template>
  <div style="width: 300px;">
      <q-input standout v-model="name" label="Post name" />
      <q-input standout v-model="content" label="Content" />
      <q-btn color="primary">Add Post</q-btn>
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
    ...mapActions("postsStore", ["getAccountPosts"]),

  },
}
</script>

<style>

</style>
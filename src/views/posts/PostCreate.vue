<template>
  <div class="q-px-lg q-pb-md">
    
    <q-breadcrumbs class="text-brown">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" color="primary" />
      </template>

      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Posts" icon="widgets" to="/posts" />
      <q-breadcrumbs-el label="Create Post" />
    </q-breadcrumbs>

    <AddPost />
  </div>
</template>

<script>
import AddPost from "../../components/posts/AddPost.vue";

export default {
  name: "PostCreate",
  components: {
    AddPost,
  },
};
</script>

<style></style>

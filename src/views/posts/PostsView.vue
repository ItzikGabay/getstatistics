<template>
  <div class="q-px-lg q-pb-md">

    <q-breadcrumbs class="text-brown">
      <template v-slot:separator>
        <q-icon
          size="1.5em"
          name="chevron_right"
          color="primary"
        />
      </template>

      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Posts" icon="widgets" />
    </q-breadcrumbs>


    <q-timeline color="secondary">
      <q-timeline-entry heading>
        <q-chip size="18px" icon="bookmark">
          August, 2021
        </q-chip>
      </q-timeline-entry>
      <PostViewer />
      <q-timeline-entry heading>
        <q-chip size="18px" icon="bookmark">
          Septemember, 2021
        </q-chip>
      </q-timeline-entry>
      <hr />
    </q-timeline>
  </div>
</template>

<script>
import PostViewer from "../../components/posts/PostViewer.vue";

export default {
  name: "PostsView",
  components: {
    PostViewer,
  },
};
</script>

<style>


</style>

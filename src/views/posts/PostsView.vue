<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry heading>
      August, 2021
      </q-timeline-entry>
        <PostViewer/>
      <q-timeline-entry heading>
        Septemember, 2021
      </q-timeline-entry>
      <hr>

    </q-timeline>
  </div>
</template>

<script>

import PostViewer from '../../components/posts/PostViewer.vue'

export default {
    name: 'PostsView',
    components: {
        PostViewer
    }
}
</script>

<style>
</style>
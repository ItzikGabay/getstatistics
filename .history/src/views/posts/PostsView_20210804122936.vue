<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry heading>
      <h4>August, 2021</h4>
      </q-timeline-entry>
      <hr>
        <PostViewer/>
      <q-timeline-entry heading>
        Septemember, 2021
      </q-timeline-entry>
      <hr>

    </q-timeline>
  </div>
</template>

<script>

import PostViewer from '../../components/PostViewer.vue'

export default {
    name: 'PostsView',
    components: {
        PostViewer
    }
}
</script>

<style>
</style>
<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry heading>
        Timeline heading
      </q-timeline-entry>

        <PostViewer/>

      <q-timeline-entry heading>
        November, 2017
      </q-timeline-entry>


    </q-timeline>
  </div>
</template>

<script>

import PostViewer from '../components/PostViewer.vue'

export default {
    name: 'Posts',
    components: {
        PostViewer
    }
}
</script>

<style>

</style>
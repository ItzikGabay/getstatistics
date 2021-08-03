<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry heading>
        August
      </q-timeline-entry>
        <PostViewer test="'test'"/>
        <PostViewer/>
      <q-timeline-entry heading>
        Septemember
      </q-timeline-entry>
        <PostViewer/>   

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
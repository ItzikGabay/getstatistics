<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry heading>
        August
      </q-timeline-entry>
        <PostViewer :data="userPost"/>
        <PostViewer :data="userPost"/>
      <q-timeline-entry heading>
        Septemember
      </q-timeline-entry>
        <PostViewer :data="userPost"/>

    </q-timeline>
  </div>
</template>

<script>

import PostViewer from '../components/PostViewer.vue'

export default {
    name: 'Posts',
    components: {
        PostViewer
    },
    data() {
        return {
            userPost: {
                title: 'This is title of post',
                content: {
                    0: 'This is a test for a post. It should to be a lot long...'
                }
            }
        }
    }
}
</script>

<style>

</style>
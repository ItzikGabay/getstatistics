<template>
  <div class="q-px-lg q-pb-md">

  </div>
</template>

<script>

import PostViewer from '../components/PostViewer.vue'

export default {
    name: 'CreatePost',
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
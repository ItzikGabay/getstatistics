<template>
    <div>
        <q-timeline-entry
         v-for="post in posts" :key="post.settings"
        :title="post.title"
        subtitle="POST #1: February 22, 1986"
        style="width: 700px;"
        color="orange"
        icon="done_all"
      >


        <div>
          {{post.content}} <a href="#"><b>Read more..</b></a>
        </div>

        <b>Posted at: </b>
        <q-badge rounded color="red" label="ins" class="socialBadge" />
        <q-badge rounded color="primary" label="fb" class="socialBadge"/>
        <q-badge rounded color="orange" label="rav-meser" class="socialBadge" />


    <div class="q-gutter-sm">
      <q-chip class="publisherChip">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        Published By Itzik
      </q-chip>
    </div>  
      </q-timeline-entry>
      </div>
</template>

<script>

import localStorageDriver from "../middleware/local-storage/index.js"

export default {
    name: 'PostViewer',
    props: ['data'],
    data() {
        return {
          posts: {}
        }
    },
    methods: {
      read() { 
        this.posts = localStorageDriver.select('posts')
      }
    },
    created() { 
      this.read()
      console.log(this.posts);
    }
}
</script>

<style scoped> 
.socialBadge {
    margin-right: 10px
}

.publisherChip {
    margin-top: 15px;
}
</style>
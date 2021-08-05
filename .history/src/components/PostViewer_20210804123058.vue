<template>
    <div>
        <q-timeline-entry
         v-for="post in posts" :key="post.settings"
        :title="post.title"
        :subtitle="String(post.dateCreated)"
        style="width: 700px;"
        color="orange"
        icon="done_all"
      >


        <div>
          <div v-html="post.content"></div>
        </div>
        <hr>
        <b>Posted at: </b>
        <q-badge rounded color="red" label="ins" class="socialBadge" />
        <q-badge rounded color="primary" label="fb" class="socialBadge"/>
        <q-badge rounded color="orange" label="rav-meser" class="socialBadge" />
        <hr>
    <div class="q-gutter-sm">
      <q-chip class="publisherChip">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        Published By Itzik
      </q-chip>
      <hr>
    </div>  
      <q-btn color="primary" size="sm" text-color="white" label="More info" @click="edit(post.id)" rounded/>
      <q-btn color="red" size="sm" text-color="white" label="Delete post" @click="deletePost(post.id)" rounded/>
      
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
        this.posts = localStorageDriver.select('posts').reverse()
      },
      edit(id) { 
        this.$router.push(`/posts/${id}`)
      },
      deletePost(id) { 
        localStorageDriver.remove('posts', id)
        this.read()
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
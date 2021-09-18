/***************************
 *   
 * file: 
 * /components/posts/List.vue
 *
 * Summary: 
 * Show posts as a component.
 *
 * Description: 
 * Whenever client ask to see posts, we use this component
 *
 * Father Components: 
 * views/posts/Posts.vue
 *
***************************/ 

<template>
  <div>
    <q-timeline-entry
      class="timeline"
      v-for="post in this.postsData"
      :key="post.id"
      :title="'ID: ' + post.id"
      :subtitle="String(post.content.title)"
      color="green"
      icon="done_all"
    >
      <div>
        <q-btn
          size="lg"
          text-color="#FF0080"
          :label="post.content.title"
          @click="goTo(post.id)"
           flat
        />

        <q-separator />

        <div style="width: 95%" v-html="post.content.data"></div>
      </div>
      <q-separator />
      <p>Posted:</p>
      <!-- {{post.schedules}} -->
      <q-badge
        v-for="(value, key) in post.schedules"
        :key="key"
        flat
        color="green"
        :label="value.title"
        class="socialBadge"
      />
      <q-badge flat color="orange" label="Taboola" class="socialBadge" />
      <!-- <q-badge rounded color="red" label="ins" class="socialBadge" />
        <q-badge rounded color="primary" label="fb" class="socialBadge"/>
        <q-badge rounded color="orange" label="rav-meser" class="socialBadge" /> -->
      <q-separator />
      
      <p>More actions:</p>
      <q-btn
        size="md"
        text-color="primary"
        label="More info"
        @click="goTo(post.id)"
        push
      />

      <q-btn
        size="sm"
        text-color="red"
        label="Delete post"
        @click="deletePost(post.id)"
        flat
      />

      <q-separator />
      <div class="q-gutter-sm">
        <q-chip class="publisherChip">
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          Published By {{post.user_id}}
        </q-chip>
      </div>
    </q-timeline-entry>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'List',
    props: ['postsData'],
    methods: {
      ...mapActions("postsStore", ["deletePostById"]),
      goTo(id) {
        this.$router.push(`/accounts/${this.$route.params.id}/posts/${id}`)
      },
      deletePost(id) {
        // alert(id)
        this.deletePostById({postId: id, account_id: this.$route.params.id})
      }
    }
}
</script>

<style scoped>
.socialBadge {
  margin-right: 10px;
}

.publisherChip {
  margin-top: 15px;
}

.timeline {
  background: #ffffff;
  width: 900px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-bottom: 50px;
  margin-left: 18px;
}

h5 {
  margin: 0;
}

.q-separator {
  margin: 12px 0 12px 0;
  width: 95%;
}
</style>
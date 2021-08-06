<template>
  <div>
    <q-timeline-entry
      class="timeline"
      v-for="post in posts"
      :key="post.settings"
      :title="'ID: ' + post.id"
      :subtitle="String(post.dateCreated)"
      color="green"
      icon="done_all"
    >
      <div>
        <q-btn
          size="lg"
          text-color="#FF0080"
          :label="post.title.substring(0, 70)"
          @click="edit(post.id)"
           flat
        />
        <q-separator />
        <div style="width: 95%" v-html="post.content.substring(0, 70)"></div>
      </div>
      <q-separator />
      <p>Posted:</p>
      <q-badge
        v-for="(value, key) in post.scheduleTime.platforms"
        :key="key"
        flat
        color="green"
        :label="value"
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
        @click="edit(post.id)"
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
          Published By Itzik
        </q-chip>
      </div>
    </q-timeline-entry>
  </div>
</template>

<script>
import localStorageDriver from "../../middleware/local-storage/index.js";

export default {
  name: "PostViewer",
  props: ["data"],
  data() {
    return {
      posts: {},
    };
  },
  methods: {
    read() {
      this.posts = localStorageDriver.select("posts").reverse();
    },
    edit(id) {
      this.$router.push(`/posts/${id}`);
    },
    deletePost(id) {
      localStorageDriver.remove("posts", id);
      this.read();
    },
  },
  created() {
    this.read();
    console.log(this.posts);
  },
};
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
}

h5 {
  margin: 0;
}

.q-separator {
  margin: 20px 0 20px 0;
  width: 95%;
}
</style>

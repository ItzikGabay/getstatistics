<template>
  <div>
    <div class="actions">
      <q-btn
        size="sm"
        text-color="black"
        label="Edit this post"
        @click="goToItem(post.id)"
        flat
      />
      <q-btn
        size="sm"
        text-color="red"
        label="Delete this post"
        @click="deletePost(post.id)" 
        flat
      />
    </div>
    <q-card class="my-card" flat>
      <!--  bordered-->
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <h5>{{ this.post.title }}</h5></q-item-label
          >
          <q-item-label caption>
            published by <b>@{{ this.post.postedBy }}</b>, at
            {{ this.post.dateCreated }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <q-card-section id="q-card-left">
          <p>[notes]</p>
        </q-card-section>

        <q-separator vertical />

        <q-card-section class="col-4">
          <div v-html="this.post.content"></div>
        </q-card-section>
      </q-card-section>

      <q-separator />
    </q-card>

    <PostLinks :postData="this.post" />
  </div>
</template>

<script>
import localStorageDriver from "../../middleware/local-storage/index.js";
import PostLinks from "../../components/posts/PostLinks.vue";

// get data of the single post

export default {
  name: "PostView",
  components: {
    PostLinks,
  },
  data() {
    return {
      post: "",
      platforms: "",
    };
  },
  methods: {
    goToItem(id) {
      this.$router.push(`/posts/${id}/edit`);
    },
    deletePost(id) {
        localStorageDriver.remove('posts', id)
        this.read()
        this.$router.push(`/posts/`);
    },
    read() {
      this.post = localStorageDriver.getItemByID(
        "posts",
        this.$route.params.id
      );
    },
  },
  created() {
    this.read();
    this.platforms = this.post.scheduleTime.platforms;
  },
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}

#q-card-left {
  font-size: 12px;
}

.q-card {
  margin: 20px 20px 20px 20px;
}

h5 {
  margin: 12px 0 12px 0
}
</style>

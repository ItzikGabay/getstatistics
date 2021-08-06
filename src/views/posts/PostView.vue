<template>
  <div>
    <div class="actions">
      <span><b>Actions: </b></span>
      <q-btn
        color="primary"
        size="sm"
        text-color="white"
        label="Edit post"
        @click="goToItem(post.id)"
        rounded
      />
      <q-btn
        color="red"
        size="sm"
        text-color="white"
        label="Delete post"
        @click="deletePost(post.id)" 
        rounded
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
          <q-item-label
            ><b>Post title: </b>
            <h5>{{ this.post.title }}</h5></q-item-label
          >
          <q-item-label caption>
            published by {{ this.post.postedBy }}, at
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
          <b>Post content: </b>
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
</style>

<template>
  <div>
    <q-card class="my-card" flat style="width: 700px; margin: 20px 0 0 20px">
      <!--  bordered-->
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ this.post.title }}</q-item-label>
          <q-item-label caption>
            published by {{ this.post.postedBy }}, at
            {{ this.post.dateCreated }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <q-card-section id="q-card-left">
          <p>Successfully posted:</p>
          <div v-for="(value, key) in this.platforms" :key="key">
            <a href="#">{{ value }} (post link)</a>
          </div>
          <br />
          <p>Still not posted:</p>
          <div>
            <a href="#">Taboola (Schedule)</a>
          </div>
        </q-card-section>

        <q-separator vertical />

        <q-card-section class="col-4">
          <div v-html="this.post.content"></div>
        </q-card-section>
      </q-card-section>
    </q-card>
    <hr />
    <q-btn
      color="primary"
      size="sm"
      text-color="white"
      label="Edit post"
      @click="goToItem(post.id)"
      rounded
    />
  </div>
</template>

<script>
import localStorageDriver from "../../middleware/local-storage/index.js";

// get data of the single post

export default {
  name: "PostView",
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
</style>

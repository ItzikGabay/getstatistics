/***************************
 *   
 * file: 
 * /views/posts/Posts.vue
 *
 * Summary: 
 * Main view Posts component.
 *
 * Description: 
 * Let user see is own posts from the account he's connected.
 *
 * Components used: 
 * components/posts/list
 *
***************************/ 

<template>
  <div>
    <hr>
      <div v-if="this.posts.length < 1" >
        <q-banner rounded class="bg-yellow-8 text-white">
          Seems that you didnt create your Posts yet. Please add one in
          order to start schedule.
        </q-banner>
      <q-btn
        style="margin-top: 25px;"
        size="md"
        text-color="white"
        label="Add your first post"
        @click="goTo('add')"
        padding="lg"
        icon="add"
        class="full-width"
        color="primary"
        push
      />
      </div>

    <div v-else>
      <q-btn
        size="md"
        text-color="white"
        label="Add Post"
        @click="goTo('add')"
        padding="lg"
        icon="add"
        class="full-width"
        color="amber"
        push
      />
      <!-- <button @click="read()">Refresh Data</button> -->
      <!-- Posts Lists div -->
      <q-timeline color="secondary">
        <!-- Month Display -->
        <q-timeline-entry heading>
          <q-chip size="18px" icon="bookmark">
            August, 2021
          </q-chip>
        </q-timeline-entry>
        <!-- End of Month Display -->
        <List :postsData="this.getPostsData" />

        <!-- Month Display -->
        <q-timeline-entry heading>
          <q-chip size="18px" icon="bookmark">
            Septemember, 2021
          </q-chip>
        </q-timeline-entry>
      </q-timeline>
      <!-- End of Month Display -->
    </div>
    </div>
</template>

<script>
import List from "../../components/posts/List.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Posts",
  components: {
    List
  },
  computed: {
    ...mapState("postsStore", ["posts"]),
    getPostsData() {
      return [...this.posts]
    }
  },
  methods: {
    ...mapActions("postsStore", ["getAccountPosts", "createPost"]),
    /**
     * Send get request to retrieve all data from firebase,
     * and changing on current data object.
     * @param {Object} options - {endpoint:} where to read in Firebase.
     */
    read() {
      // this.data = this.$store.state.postsStore.posts;
      // if (this.data.length < 1) {
        this.getAccountPosts({ id: this.$route.params.id });
      // }
      this.$q.loading.hide();
    },
    goTo(id) {
      this.$router.push(`/accounts/${this.$route.params.id}/posts/${id}`);
    }
  },
  async created() {
    // if (!this.posts && !this.posts !== '') {
      // }
    this.$q.loading.show();
    await this.read();
  }
  // watch: {
  //   posts: () => {
  //     this.$q.loading.hide()
  //   }
  // }
};
</script>

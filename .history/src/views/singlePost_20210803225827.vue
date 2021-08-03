<template>
  <div>
      {{this.post}}

    <q-card class="my-card" flat style="width: 700px; margin: 20px 0 0 20px">
        <!--  bordered-->
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{this.post.title}}</q-item-label>
          <q-item-label caption>
            published by [Todo user Owner], at {{this.post.dateCreated}}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <q-card-section>
          <p>Not Published Yet</p>
          <p>Publish now at:</p>
        </q-card-section>

        <q-separator vertical />

        <q-card-section class="col-4">
          <div v-html="this.post.content"></div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>

</template>

<script>
import localStorageDriver from "../middleware/local-storage/index.js"


// get data of the single post

export default {
    name: 'singlePost',
    data() {
        return {
            post: localStorageDriver.getItemByID('posts', this.$route.params.id)
        }
    }
}
</script>

<style>

</style>
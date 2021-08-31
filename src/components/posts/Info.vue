/***************************
 *   
 * file: 
 * /components/posts/Info.vue
 *
 * Summary: 
 * Show title & content of specific post.
 *
 * Description: 
 * Whenever client want to see the data of his post
 * we using this component.
 *
 * Father Components: 
 * views/posts/View.vue
 *
***************************/ 

<template>
  <div>

  <!-- Card Section -->
    <q-card class="my-card" flat>

      <!-- Avatar -->
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>
        <!-- End of Avater -->


        <!-- Post info -->
        <q-item-section>
          <q-item-label>
            <!-- Post title -->
            <h5>{{postData.content.title}}</h5></q-item-label>
          <!-- Post Publish Owner & date -->
          <q-item-label caption>
            published by <b>@{{postData.user_id}}</b>, at
            11-11-11
          </q-item-label>
        </q-item-section>
      </q-item>
      <!-- End of Post info -->

      <q-separator />

      <!-- Notes info -->
      <q-card-section horizontal>
        <q-card-section id="q-card-left">
          <p>[notes]</p>
        </q-card-section>
        <!-- End of Notes info -->

        <q-separator vertical />

      <!-- Post Content -->
        <q-card-section class="col-4">
          <div v-html="postData.content.data"></div>
        </q-card-section>
      </q-card-section>
      <!-- End Post Content -->

      <q-separator />
    </q-card>
    <!-- End of Card Section -->
  </div>
</template>

<script>
export default {
    name: 'Info',
    props: ["postData"],
}
</script>

<style>

</style>
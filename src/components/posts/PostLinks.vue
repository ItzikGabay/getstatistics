<template>
  <div class="q-pa-md">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">Platform</th>
          <th class="text-left">Clicks on link</th>
          <th class="text-right">Link</th>
          <th class="text-right">Date Posted</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in post.scheduleTime.platforms" :key="key">
          <td class="text-left" v-if="post.scheduleTime.platformsObj[value].posted"><q-badge color="green">{{ value }}</q-badge></td>
          <td class="text-left" v-if="!post.scheduleTime.platformsObj[value].posted"><q-badge color="amber">{{ value }}</q-badge></td>
          <td class="text-left">{{ key }}</td>
          <td class="text-right"><a href="#">Post Link</a></td>
          <td class="text-right">02-03-2021 17:59</td>
        </tr>
        <tr>
          <td class="text-left"><q-badge color="amber">Taboola</q-badge></td>
          <td class="text-left">no data</td>
          <td class="text-right"><a href="#">Schedule Now</a></td>
          <td class="text-right">02-03-2021 17:59</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
export default {
  name: "PostLinks",
  props: ["postData"],
  data() {
    return {
      post: this.postData,
    };
  },
  created() {
    //   this.test = 'hey'
  },
};
</script>

<style></style>

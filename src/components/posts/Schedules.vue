/***************************
 *   
 * file: 
 * /components/posts/Schedules.vue
 *
 * Summary: 
 * Show list of schedules of specific post.
 *
 * Description: 
 * Whenever client want to see platform schedules
 * of current post we using this component.
 *
 * Father Components: 
 * views/dashboard/Info.vue
 *
***************************/ 

<template>
  <div>
          <q-markup-table>
      <thead>
        <!-- Table Columns -->
        <tr>
          <th class="text-left">Platform</th>
          <th class="text-left">Clicks on link</th>
          <th class="text-right">Link</th>
          <th class="text-right">Date Posted</th>
        </tr>
        <!-- End of Table Columns -->
      </thead>
      <tbody>

        <!-- Dynamic table -->
        <tr v-for="(value, key) in postData.schedules" :key="key">
          <!-- <div>{{value}}</div> -->
          <td class="text-left"><q-badge color="green">{{ value.title }}</q-badge></td>
          <!-- <td class="text-left" v-if="postData"><q-badge color="green">{{ value }}</q-badge></td> -->
          <!-- <td class="text-left" v-if="!post.scheduleTime.platformsObj[value].posted"><q-badge color="amber">{{ value }}</q-badge></td> -->
          <td class="text-left">{{ value.clicks }}</td>
          <td class="text-right"><a href="#">Post Link</a></td>
          <td class="text-right">02-03-2021 17:59</td>
        </tr>
        <!-- End of Dynamic table -->

        <!-- Static table just to show -->
        <tr>
          <td class="text-left"><q-badge color="amber">Taboola</q-badge></td>
          <td class="text-left">no data</td>
          <td class="text-right"><a href="#">Schedule Now</a></td>
          <td class="text-right">02-03-2021 17:59</td>
        </tr>
        <!-- End of Static table just to show -->

      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
export default {
  name: 'Schedules',
  props: ["postData"],
}
</script>

<style>

</style>
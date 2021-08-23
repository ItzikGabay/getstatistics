/***************************
 *   
 * file: 
 * /components/dashboard/Info.vue
 *
 * Summary: 
 * Show info of specific Platform id
 *
 * Description: 
 * Whenever client ask to see specific platform info, 
 * we using this component.
 *
 * Father Components: 
 * views/dashboard/Api.vue
 *
***************************/ 

<template>
  <div>
  <p>This is info paragraph</p>
  {{apiData}}
  </div>
</template>

<script>

export default {
  name: 'Info',
  props: ["apiData"],
}
</script>

<style>

</style>
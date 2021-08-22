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
  watch: {
    apiData() {
      
    }
  }
}
</script>

<style>

</style>
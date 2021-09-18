<template>
      <div class="q-pa-md q-gutter-sm">
    <q-banner rounded class="bg-purple-8 text-white">
      {{this.text}}
    </q-banner>
  </div>
</template>

<script>
export default {
   name: 'Banner',
   props: ['text']

}
</script>

<style>

</style>
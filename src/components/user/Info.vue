<template>
  <div>
        <q-input filled v-model="userData.uid" :dense="dense" readonly hint="ID" />
      <q-input filled v-model="userData.uid" :dense="dense" readonly hint="Username" />
      <q-input filled v-model="userData.email" :dense="dense" readonly hint="Email" />
      <q-input filled v-model="userData.displayName" :dense="dense" readonly hint="Full name" />
      <q-input filled v-model="userData.providerData[0].providerId" :dense="dense" readonly hint="Provider" />
  </div>
</template>

<script>
export default {
name: 'Info',
    props: ["userData"],
    data() {
        return {
            dense: false
        }
    }
}
</script>

<style>

</style>
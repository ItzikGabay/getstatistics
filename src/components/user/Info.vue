<template>
  <div>
    <q-item clickable v-ripple class="bg-grey-2">
      <q-item-section avatar>
        <q-avatar rounded>
          <img src="https://cdn.quasar.dev/img/chaosmonkey.png">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>
          {{userData.displayName}}
        </q-item-label>
        <q-item-label caption>
          <q-badge color="yellow-6" text-color="black">
            Posts created by you: 43
            <q-icon
              name="info"
              size="14px"
              class="q-ml-xs"
            />
          </q-badge>
        </q-item-label>
      </q-item-section>

      <q-item-section side>
        <span>Registerd 3 month's ago</span>
      </q-item-section>
    </q-item>

<hr>
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
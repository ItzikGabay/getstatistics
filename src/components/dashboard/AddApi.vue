/***************************
 *   
 * file: 
 * /components/accounts/AddApi.vue
 *
 * Summary: 
 * Add API connection as a form to specific account.
 *
 * Description: 
 * Whenever client ask to add new platform, this component is used.
 *
 * Father Components: 
 * views/accounts/Accounts.vue
 *
***************************/ 

<template>

<div>
  
<!-- Changes! -->
<!-- <q-btn label="Reset" push color="white" text-color="primary" @click="reset" class="q-mb-md" /> -->

    <q-stepper
      v-model="step"
      header-nav
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Select campaign settings"
        icon="settings"
        :done="done1"
      >
        Please choose the name or the platform you are going to add.
        <q-input v-model="platform_name" standout hint="API Name"  label="Enter API Name" />
        <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Create an ad group"
        caption="Optional"
        icon="create_new_folder"
        :done="done2"
      >
        
        For each ad campaign that you create, you can control how much you're willing to
        spend.
        <q-input v-model="platform_key" standout hint="API Key"  label="Enter API Key" />
        For each ad campaign that you create, you can control how much you're willing to
        spend.
        <q-input v-model="platform_secret" standout hint="API Secret"  label="Enter API Secret" />

        <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Create an ad"
        icon="add_comment"
        :done="done3"
      >
        Okay, everything seems to be set.
        Please click ADD in order to add this connection.
        <q-stepper-navigation>
          <!-- <q-btn color="primary" @click="done3 = true" label="Finish" /> -->
          <q-btn style="background: #FF0080; color: white" label="ADD account" @click="AddApiConnection()"/>
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
<!-- ######### -->
<!-- Changes -->
  <!-- <div class="getWhiteBackground">
    <q-input v-model="platform_name" standout hint="API Name"  label="Enter API Name" />
    <q-input v-model="platform_key" standout hint="API Key"  label="Enter API Key" />
    <q-input v-model="platform_secret" standout hint="API Secret"  label="Enter API Secret" />
    <q-btn style="background: #FF0080; color: white" label="Create account" @click="AddApiConnection()"/>
  </div> -->
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AddApi',
    data() {
      /**
       * platform_name: User platform name.
       * platform_key: User platform key.
       * platform_secret: User platform secret.
       */
      return {
        platform_name: '',
        platform_key: '',
        platform_secret: '',
        step: 1,
        done1: false,
        done2: false,
        done3: false
      }
    },
    methods: {
      ...mapActions("accountStore", ["addNewApiConnection"]),
      /**
       * AddApiConnection function -
       * Adding API trough store.actions and redirect after success.
       * @return - redirect to "/accounts/:id/dashboard"
       */
        AddApiConnection() {
          
          let ApiConnectionData = {
            name: this.platform_name,
            connected: false,
            key: this.platform_key,
            secret: this.platform_secret
          }
          this.addNewApiConnection({doc_id: this.$route.params.id, item: ApiConnectionData})
          this.done3 = true;
          this.$router.push(`/accounts/${this.$route.params.id}/dashboard/`)
        }
    }
}
</script>

<style>

</style>
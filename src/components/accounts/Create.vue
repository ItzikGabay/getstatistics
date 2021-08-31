/***************************
 *   
 * file: 
 * /components/accounts/Create.vue
 *
 * Summary: 
 * Creating an account to user.
 *
 * Description: 
 * Component of creating account.
 *
 * Father Components: 
 * views/accounts/Add.vue
 *
***************************/ 

<template>
<div>
<q-stepper
      v-model="step"
      vertical
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Start"
        icon="settings"
        :done="step > 1"
      >
        Hello, we going to create a new account and you going to be the owner of the account.
        details cannot be changed later, so make sure you putting the right details.
        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Account name & more"
        caption="Account settings"
        icon="create_new_folder"
        :done="step > 2"
      >
        Please enter account name:
            <q-input v-model="accountInputName" standout hint="Account name"  label="Enter account name" />

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Create an account"
        icon="add_comment"
      >
        Please click on Create to finish the process ->

        <q-stepper-navigation>
          <q-btn style="background: #FF0080; color: white" label="Create account" @click="createAccount()"/> 
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>

<!-- New Changes -->
    <div class="addAccount">

    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'createAccount',
    data() {
        /**
        * accountInputName: String of user input for account name.
        */
        return {
            accountInputName: '',
            step: 1
        }
    },
    methods: {
        ...mapActions("accountStore", ["addAccount"]),
    /**
     * Creating an accont for current user.
     */
        createAccount() {
            this.addAccount(this.accountInputName)
            .then(res => {
                this.$router.push("/accounts")
            })
        }
    }
}

</script>

<style>
    .addAccount {
        width: 400px;
    }
    .q-input {
        margin-bottom: 10px;
    }
</style>
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
<div class="addAccount">
  <q-input v-model="accountInputName" standout hint="Account name"  label="Enter account name" />
  <q-btn style="background: #FF0080; color: white" label="Create account" @click="createAccount()"/>
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
            accountInputName: ''
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
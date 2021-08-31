/***************************
 *   
 * file: 
 * /views/accounts/Add.vue
 *
 * Summary: 
 * Creating and adding new account to current user.
 *
 * Description: 
 * Make the user owner of the current new account.
 *
 * Path: 
 * '/accounts/add',
 *
 * Components used: 
 * components/accounts/Create.vue
 *
***************************/ 

<template>
    <div>
        <Create/>
    </div>
</template>

<script>
import Create from '../../components/accounts/Create.vue'

export default {
    name: 'AddAccount',
    components: {
        Create
    }

}
</script>

<style>

</style>
/***************************
 *   
 * file: 
 * /components/accounts/List.vue
 *
 * Summary: 
 * Show all accounts as a component.
 *
 * Description: 
 * Whenever client ask to see accounts, we use this component
 *
 * Father Components: 
 * views/accounts/Accounts.vue
 *
***************************/ 

<template>
<div>
  <p>List component working:</p>
    {{data}}
</div>
  
</template>

<script>
export default {
    name: 'List',
    props: ["data"],
}
</script>

<style>

</style>
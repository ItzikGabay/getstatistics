<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <AddItem :tableName="'tableItem'"/>
    <TableViewer :tableName="'tableItem'"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddItem from '../components/AddItem.vue'
import TableViewer from '../components/TableViewer.vue'


export default {
  name: 'Home',
  components: {
   TableViewer, AddItem
  }
}
</script>

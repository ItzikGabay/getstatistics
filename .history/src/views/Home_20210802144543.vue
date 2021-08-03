<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <AddItem :tableName="'tableItem'" @itemAdded="reloadTable" />
    <TableViewer tableName="tableItem" :needToReload="reloadValue" />
  </div>
</template>

<script>
// @ is an alias to /src
import AddItem from '../components/AddItem.vue'
import TableViewer from '../components/TableViewer.vue'


export default {
  name: 'Home',
  components: {
   TableViewer
  },
  data() {
    return {
      reloadValue: false
    }
  },
  methods: {
    reloadTable(temp) {
      debugger
      this.reloadValue = !this.reloadValue
    }
  }
}
</script>

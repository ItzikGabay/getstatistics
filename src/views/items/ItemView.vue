<template>
  <div class="q-px-lg q-pb-md getWhiteBackground">
    <AddItem :item="item" :tableName="tableName" />
  </div>
</template>

<script>
import localStorageDriver from "../../middleware/local-storage/index.js";
import AddItem from "../../components/items/AddItem.vue";

export default {
  name: "Item",
  components: {
    AddItem,
  },
  data() {
    return {
      item: {},
      tableName: "tableItem",
    };
  },
  methods: {
    getItem() {
      this.item = localStorageDriver.getItemByID(
        this.tableName,
        this.$route.params.id
      );
    },
  },
  created() {
    this.getItem();
  },
};
</script>

<style></style>

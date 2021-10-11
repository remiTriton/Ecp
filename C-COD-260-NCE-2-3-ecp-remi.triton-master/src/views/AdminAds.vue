<template>
  <div>
    <Table v-if="user && user.type == 'admin'" />
    <WrongAccess v-else />
  </div>
</template>

<script>
import Table from "../components/admin/Table.vue";
import WrongAccess from "../components/admin/WrongRole.vue";

export default {
  components: {
    Table,
    WrongAccess,
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style>
</style>
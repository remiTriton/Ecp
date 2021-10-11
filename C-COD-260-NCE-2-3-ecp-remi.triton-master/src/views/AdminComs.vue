<template>
  <TableBis v-if='user && user.type == "admin"' />
      <WrongAccess v-else />

</template>

<script>
import TableBis from "../components/admin/TableBis.vue";
import WrongAccess from "../components/admin/WrongRole.vue";

export default {
components : {
    TableBis,
    WrongAccess,
},
  computed: {
    user() {
      return this.$store.state.auth.user;
    },}
}
</script>

<style>

</style>
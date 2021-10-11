<template>
  <TableUser v-if='user && user.type == "admin"' />
      <WrongAccess v-else />

</template>

<script>
import TableUser from "../components/admin/TableUser.vue";
import WrongAccess from "../components/admin/WrongRole.vue";

export default {
components : {
    TableUser,
    WrongAccess,
},
  computed: {
    user() {
      return this.$store.state.auth.user;
    },

}}
</script>

<style>

</style>
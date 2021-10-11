<template>
  <div>
    <navAdmin />
    <div class="shadow flex mb-5">
      <input
        class="w-full rounded p-2 border border-indigo-600"
        v-model="query"
        type="text"
        placeholder="Search..."
      />
      <button
        class="bg-blue-900 text-white p-2 hover:bg-blue-400"
        type="submit"
        @click.prevent="search(query)"
      >
        Search
      </button>
    </div>
    <table class="bg-white w-full" id="Tableau">
      <thead>
        <tr>
          <th class="bg-blue-900 text-white">Mail</th>
          <th class="bg-blue-900 text-white">Prénom</th>
          <th class="bg-blue-900 text-white">Nom</th>

          <th class="bg-blue-900 text-white">Rôle</th>
          <th class="bg-blue-900 text-white"></th>
          <th class="bg-blue-900 text-white"></th>
        </tr>
      </thead>
      <tbody v-for="(user, index) in users" :key="user._id">
        <tr :class="{ even: index % 2 === 0, odd: index % 2 !== 0 }">
          <td>{{ user.email }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.type }}</td>

          <td>
            <router-link :to="{ name: 'Edituser', params: { id: user._id } }"
              ><button
                class="
                  bg-white
                  hover:bg-blue-900
                  hover:text-white
                  text-blue-900
                  font-semibold
                  py-2
                  px-4
                  border border-blue-900
                  rounded
                  shadow
                "
              >
                Update
              </button></router-link
            >
          </td>
          <td>
            <button
              class="
                bg-white
                hover:bg-red-600
                hover:text-white
                text-red-600
                font-semibold
                py-2
                px-4
                border border-red-700
                rounded
                shadow
              "
              @click.prevent="Delete(user._id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import navAdmin from "./AdminLinks.vue";

export default {
  name: "AdminUser",
  components: {
    navAdmin,
  },
  data() {
    return {
      query: "",
    };
  },
  created() {
    return this.$store.dispatch("auth/fetchUser");
  },
  computed: {
    users() {
      return this.$store.state.auth.users;
    },
  },
  methods: {
    async search(query) {
      await this.$store.dispatch("auth/fetchUser");
      return this.$store.dispatch("auth/searchUser", query);
    },
    async Delete(id) {
      await this.$store.dispatch("auth/deleteUser", id);
      await this.$store.dispatch("auth/fetchUser");
    },
  },
};
</script>

<style>
.even {
  background: #b1d6ff;
}

.odd {
  background: #eff6ff;
}

input {
  width: auto;
}
</style>
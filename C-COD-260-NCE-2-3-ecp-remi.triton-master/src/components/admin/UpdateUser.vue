<template>
  <div class="w-screen max-w-xs mt-10 mx-96">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-11/12">
      <p class="block text-gray-700 text-sm font-bold mb-2">Edit a user</p>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          First Name
        </label>
        <input
          class="
            shadow
            appearance-none
            border
            rounded
            w-11/12
            py-2
            px-3
            text-gray-700
            leading-tight
            focus:outline-none
            focus:shadow-outline
          "
          type="text"
          :placeholder="user.firstName"
          v-model="user.firstName"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Last Name
        </label>
        <input
          class="
            shadow
            appearance-none
            border
            rounded
            w-11/12
            py-2
            px-3
            text-gray-700
            leading-tight
            focus:outline-none
            focus:shadow-outline
          "
          type="text"
          :placeholder="user.lastName"
          v-model="user.lastName"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Email
        </label>
        <textarea
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            mb-3
            leading-tight
            focus:outline-none
            focus:shadow-outline
          "
          v-model="user.email"
          type="text"
          :placeholder="user.email"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          User type
        </label>
        <select v-model="user.type" name="type" id="type">
          <option value="bde" selected>BDE</option>
          <option value="pedago">Pedago</option>
          <option value="ads">Annonces</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
            focus:outline-none
            focus:shadow-outline
          "
          type="button"
          @click.prevent="update()"
        >
          Confirm
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "UpdateUser",
  created() {
    this.$store.dispatch("auth/getOneUser", this.$route.params.id);
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    async update() {
      await fetch("http://127.0.0.1:8000/api/user/" + this.$route.params.id, {
        method: "PATCH",
        body: JSON.stringify({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          type: this.user.type,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }),
        this.$router.back();
    },
  },
};
</script>

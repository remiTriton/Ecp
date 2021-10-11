<template>
  <header class="HEADER">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div
        class="
          w-full
          py-6
          flex
          items-center
          justify-between
          border-b border-indigo-500
          lg:border-none
        "
      >
        <div class="flex items-center">
          <router-link to="/">
            <span class="sr-only">Workflow</span>
            <img class="h-10 w-auto" src="../assets/epitech-logo.png" alt="" />
          </router-link>
          <div class="hidden ml-10 space-x-8 lg:block">
            <router-link v-if="isLogged" to="/profile">
              <button>
                <span class="inline-block relative">
                  <img
                    class="inline-block h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80"
                    alt=""
                  />
                  <span
                    class="
                      absolute
                      bottom-0
                      right-0
                      block
                      h-2
                      w-2
                      rounded-full
                      ring-2 ring-white
                      bg-green-400
                    "
                  />
                </span></button
            ></router-link>
            <router-link to="/print">
              <button>
                <span
                  class="
                    inline-flex
                    items-center
                    px-3
                    py-0.5
                    rounded-full
                    text-sm
                    font-medium
                    bg-blue-100
                    text-blue-800
                  "
                >
                  Annonces
                </span>
              </button></router-link
            >
            <router-link to="/new-post">
              <button v-if="user">
                <span
                  class="
                    inline-flex
                    items-center
                    px-3
                    py-0.5
                    rounded-full
                    text-sm
                    font-medium
                    bg-blue-100
                    text-blue-800
                  "
                >
                  Poster une annonce
                </span>
              </button></router-link
            >
            <button v-if="user && user.type == 'admin'">
              <router-link to="/admin/ads">
                <span
                  class="
                    inline-flex
                    items-center
                    px-3
                    py-0.5
                    rounded-full
                    text-sm
                    font-medium
                    bg-blue-100
                    text-blue-800
                  "
                >
                  Admin
                </span>
              </router-link>
            </button>
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <router-link
            to="/login"
            v-if="!isLogged"
            class="
              inline-block
              bg-#CDDCED-500
              py-2
              px-4
              border border-transparent
              rounded-md
              text-base
              font-medium
              text-white
              hover:bg-opacity-75
            "
            >Se connecter</router-link
          >
          <router-link
            to="/register"
            v-if="!isLogged"
            class="
              inline-block
              bg-#CDDCED
              py-2
              px-4
              border border-transparent
              rounded-md
              text-base
              font-medium
              text-white
              hover:bg-indigo-50
            "
            >S'inscrire</router-link
          >
          <button
            class="
              inline-block
              bg-#CDDCED
              py-2
              px-4
              border border-transparent
              rounded-md
              text-base
              font-medium
              text-white
              hover:bg-indigo-50
            "
            v-if="isLogged"
            @click.prevent="logout"
          >
            Se déconnecter
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    async logout() {
      await this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
  },
  computed: {
    isLogged() {
      return this.$store.state.auth.token;
    },
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style lang="css">
.dropdown:hover .dropdown-menu {
  display: block;
}
.HEADER {
  background-color: #215895;
}
</style>
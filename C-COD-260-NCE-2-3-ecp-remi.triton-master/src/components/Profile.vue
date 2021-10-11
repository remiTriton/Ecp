<template>
  <div class="posts">
    <div>
      <router-link to="/new-post" class="btn btn-link text-muted"
        >Poster une annonce</router-link
      >
         <router-link to="/edit-profile" class="btn btn-link text-muted"
        >Changer vos informations</router-link
      >
    </div>

    <!-- Popup -->%
    <!---------------------------------------------- Form Profile Start --->
    
    <!----------------------------------------------- Form Profile Ends --->
    <!------------------------------------------------ Post Cards Start --->
    <div
      class="p-6 bg-white-100 flex items-center justify-center"
      v-for="post in posts"
      :key="post.id"
    >
      <div
        v-if="post.authorId == user._id"
        class="
          card
          bg-blue-100
          max-w-screen-lg
          mx-auto
          w-full
          rounded-lg
          shadow-lg
          p-4
          flex
          md:flex-row
          flex-col
        "
      >
        <div class="flex-1">
          <h3 class="font-semibold text-lg tracking-wide uppercase">
            {{ post.title }}
          </h3>
          <p class="text-gray-500 my-1">{{ post.body }}</p>
        </div>
        <div class="md:px-2 mt-3 md:mt-0 items-center flex">
          <div class="md:col-span-5 text-right">
            <div class="inline-flex items-end">
              <router-link :to="{ name: 'Editpost', params: { id: post._id } }">
                <button
                  class="
                    bg-blue-500
                    hover:bg-blue-700
                    text-white
                    font-bold
                    py-2
                    px-4
                    mx-1
                    rounded
                  "
                  :id="post.id"
                >
                  Update
                </button></router-link
              >
            </div>
            <div class="inline-flex items-end">
              <button
                class="
                  bg-red-500
                  hover:bg-red-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  mx-1
                  rounded
                "
                @click="deletePost(post.id)"
              >
                Delete
              </button>
              <router-link :to="{ name: 'UnicVue', params: { id: post._id } }">
                <button
                  class="
                    bg-green-500
                    hover:bg-green-700
                    text-white
                    font-bold
                    py-2
                    px-4
                    mx-1
                    rounded
                  "
                >
                  See
                </button></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!------------------------------------------------- Post Cards Ends --->
  </div>
</template>
<script>
import Popup from "../components/Popup.vue";

export default {
  components: {
    Popup,
  },
  name: "posts",

  data: () => ({
    showPopUp: false,
  }),

  async created() {
    await this.$store.dispatch("posts/fetchPost");
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    isLogged() {
      return this.$store.state.auth.token;
    },
    posts() {
      return this.$store.state.posts.posts;
    },
  },
  methods: {
    async deletePost(id) {
      await this.$store.dispatch("posts/deletePost", id);
    },
  },
};
</script>
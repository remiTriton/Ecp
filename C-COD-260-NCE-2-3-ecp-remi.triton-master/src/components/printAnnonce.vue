<template>
  <div
    class="
      h-screen
      bg-gray-200
      dark:bg-gray-800
      flex flex-wrap
      items-center
      justify-center
      rounded-sm
    "
  >
    <div
      class="
        container
        lg:w-2/6
        xl:w-2/7
        sm:w-full
        md:w-2/3
        bg-white
        shadow-lg
        transform
        duration-200
        easy-in-out
        rounded-sm
      "
    >
      <div class="h-32 overflow-hidden">
        <img
          class="w-full rounded-t"
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt=""
        />
      </div>
      <button
        class="
          bg-transparent
          hover:bg-blue-500
          text-blue-700
          font-semibold
          hover:text-white
          py-2
          px-4
          border border-blue-500
          hover:border-transparent
          rounded
        "
        @click.prevent="back()"
      >
        Back
      </button>
      <br />
      <div class="">
        <div class="text-center px-14">
          <h2 class="text-gray-800 text-3xl font-bold">{{ posts[0].title }}</h2>
          <br />
          <tbody>
            <p class="mt-2 text-gray-600 rounded-sm">
              {{ posts[0].body }}
            </p>
          </tbody>
        </div>
        <hr class="mt-6" />
        <div class="flex bg-blue-100 rounded-sm">
          <div
            class="
              text-center
              w-1/2
              p-4
              hover:bg-blue-500
              cursor-pointer
              rounded-sm
            "
          >
            <p v-on:click="seen = !seen">
              <span class="font-semibold"></span> Commentaires
            </p>
          </div>
          <div class="border"></div>
          <div
            class="
              text-center
              w-1/2
              p-4
              hover:bg-blue-500
              cursor-pointer
              rounded-sm
            "
          >
            <p v-on:click="seen = !seen">
              <span class="font-semibold"></span> Commenter
            </p>
          </div>
        </div>
        <div class="" v-if="seen">
          <div class="mt-2 text-gray-600">
            <label for="commentaire"> Votre commentaire : </label>
            <input
              class="champ w-60 h-5 border-solid border-2 w-full"
              type="text"
              v-model="body"
            />

            <form>
              <button
                class="
                  container
                  bg-blue-500
                  hover:bg-blue-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded
                  justify-center
                  mb-5
                "
                @click.prevent="addCom(body, posts[0].title)"
              >
                Publier
              </button>
            </form>
          </div>
          <div
            class="text-center px-14 mb-10"
            v-for="(com, index) in comments"
            :key="index"
          >
            <p class="mt-2 text-gray-600" v-if='com.postId === posts[0]._id'>
              {{ com.body }}
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "printAnnonce",
  data() {
    return {
      comments: [],
      seen: false,
    };
  },
  created() {
    this.$store.dispatch("posts/findOnePost", this.$route.params.id);
    this.$store.dispatch("comments/getComment");
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
    comments() {
      return this.$store.state.comments.comments;
    },
  },
  methods: {
        back() {
      this.$router.back();
    },
    async addCom(body, title) {
      await this.$store.dispatch("comments/addComments", {
        postId: this.$route.params.id,
        body: body,
        postTitle:title,
      });
      await this.$store.dispatch('comments/getComment');
    },
  },
};
</script>
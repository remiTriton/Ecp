<template>
  <div class="w-screen max-w-xs mt-10 mx-96">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-11/12">
      <p class="block text-gray-700 text-sm font-bold mb-2">Edit your post !</p>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Title
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
          v-model="post.title"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Body
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
          v-model="post.body"
          type="text"
        />
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
  name: "UpdatePost",
  props: ["posts"],
  created() {
    this.$store.dispatch("posts/findOnePost", this.$route.params.id);
  },
  computed: {
    post() {
      return this.$store.state.posts.post;
    },
  },
  methods: {
    async update() {
      await fetch("http://127.0.0.1:8000/api/post/" + this.$route.params.id, {
        method: "PUT",
          headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title: this.post.title, body: this.post.body }),
      
      });
        this.$router.back()
    },
  },
};
</script>

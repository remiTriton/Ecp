<template>
  <div>
    <router-link to="/profile" class="btn btn-link text-muted"
      >Profile Post</router-link
    >
  </div>
  <div class="p-6 bg-white-100 flex items-center justify-center">
    <div class="container max-w-screen-lg mx-auto">
      <div>
        <!-- <h2 class="font-semibold text-xl text-gray-600">Responsive Form</h2>
      <p class="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p> -->

        <div class="bg-gray-100 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div
            class="
              bg-gray-100
              grid
              gap-4 gap-y-2
              text-sm
              grid-cols-1
              lg:grid-cols-3
            "
          >
            <div class="text-gray-600">
              <p class="font-medium text-lg">Add Your Post</p>
              <p></p>
            </div>
            <!--- Form Profile Inputs --->
            <div class="lg:col-span-2">
              <form @submit.prevent="createPost()">
                <div
                  class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                >
                  <div class="md:col-span-5">
                    <label class="form-label" for="post-title">Title</label>
                    <input
                      type="text"
                      name="post-title"
                      id="post-title"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      v-model="title"
                    />
                  </div>
                  <div class="md:col-span-5">
                    <label class="form-body" for="post-body">Post</label>
                    <textarea
                      class="
                        w-full
                        px-3
                        py-2
                        text-gray-700
                        border
                        rounded-lg
                        focus:outline-none
                      "
                      id="post-body"
                      rows="4"
                      name="body"
                      v-model="body"
                    ></textarea>
                    <!-- <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" /> -->
                  </div>

                  <div class="md:col-span-5 text-right">
                    <div class="inline-flex items-end">
                      <button
                        type="submit"
                        class="
                          bg-blue-500
                          hover:bg-blue-700
                          text-white
                          font-bold
                          py-2
                          px-4
                          mx-2
                          rounded
                        "
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
     async createPost() {
      const post = {
        title: this.title,
        body: this.body,
      };

       await this.$store.dispatch("posts/addPost", post);
       this.$router.back();
    },
  },
};
</script>


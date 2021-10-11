<template>
  <div>
    <select name="filters" id="filters" @change="onChange($event)">
      <option value="bde" selected>BDE</option>
      <option value="pedago">Pedago</option>
      <option value="ads">Annonces</option>
    </select>
    <div  v-for="post in posts" :key="post._id">
      <div
        v-if="post.type === this.filter"
        class="h-screen bg-gray-400 flex flex-grow items-center justify-center"
      >
        <div
          class="
            container
            width-400
            bg-white
            shadow-lg
            mx-10
            transform
            flex-wrap
            items-center
            duration-500
            easy-in-out
          "
        >
          <div class="h-10 overflow-hidden rounded-t">
                  <img v-if='post.type == "ads"'      
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
              <img v-else-if='post.type == "bde"'      
              src="https://media.discordapp.net/attachments/852437264126181386/895580209724665887/9k.png"
              alt=""
            />
               <img v-else     
              src="https://media.discordapp.net/attachments/852437264126181386/895582621197795358/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
              class='w-full'
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
          <div>
            <br />
            <div class="">
              <div class="text-center px-14 rounded-t">
                <h2 class="text-gray-800 text-3xl font-bold">
                  {{ post.title }}
                </h2>
                <br />
                <tbody>
                  <p class="mt-2 text-gray-600">{{ post.body }}</p>
                </tbody>
              </div>
              <br />
              <hr class="mt-6" />
              <router-link :to="{ name: 'UnicVue', params: { id: post._id } }">
                <div class="flex bg-blue-100">
                  <div
                    class="
                      text-center
                      w-1/2
                      p-4
                      hover:bg-blue-500
                      cursor-pointer
                      rounded-t
                    "
                  >
                    <p><span class="font-semibold"></span> Commentaires</p>
                  </div>
                  <div class="border"></div>
                  <div
                    class="
                      text-center
                      w-1/2
                      p-4
                      hover:bg-blue-500
                      cursor-pointer
                      rounded-t
                    "
                  >
                    <p><span class="font-semibold"></span> Commenter</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Print",
  data() {
    return {
      filter: "bde"
    };
  },
  created() {
     this.$store.dispatch("posts/fetchPost");
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
  },
  methods: {
    back() {
      this.$router.back();
    },
    onChange(event) {
      this.filter = event.target.value || "bde";
      console.log(this.filter);
    },
  },

};
</script>

<style scoped>
</style>

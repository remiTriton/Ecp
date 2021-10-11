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
          <th class="bg-blue-900 text-white">Type</th>
          <th class="bg-blue-900 text-white">Titre</th>
          <th class="bg-blue-900 text-white">Contenu</th>
          <th class="bg-blue-900 text-white">Auteur</th>

          <th class="bg-blue-900 text-white">Date</th>
          <th class="bg-blue-900 text-white"></th>
          <th class="bg-blue-900 text-white"></th>
        </tr>
      </thead>
      <tbody v-for="(post, index) in posts" :key="post._id">
        <tr :class="{ even: index % 2 === 0, odd: index % 2 !== 0 }">
          <td>{{ post.type }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td>{{ post.author }}</td>
          <td>{{ post.created_at }}</td>
          <td>
            <router-link :to="{ name: 'Editpost', params: { id: post._id } }"
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
              @click.prevent="Delete(post._id)"
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
  name: "Table",
  components: {
    navAdmin,
  },
  data() {
    return {
      query: "",
    };
  },
  created() {
    return this.$store.dispatch("posts/fetchPost");
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
  },
  methods: {
    async search(query) {
      await this.$store.dispatch("posts/fetchPost");
      return this.$store.dispatch("posts/searchPost", query);
    },
    async Delete(id) {
      await this.$store.dispatch("posts/deletePost", id);
      await this.$store.dispatch("posts/fetchPost");
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
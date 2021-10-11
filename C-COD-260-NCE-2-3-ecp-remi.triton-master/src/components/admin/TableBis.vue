<template>
  <div>
    <navBar />

    <div class="shadow flex mb-5">
      <v-form>
       
        <input
          class="w-full rounded p-2 border border-indigo-600"
          type="text"
          placeholder="Search..."
          v-model="query"
        />
        <button
          class="bg-blue-900 text-white p-2 hover:bg-blue-400"
          type="submit"
          @click.prevent="search(query)"
        >
          Search
        </button>
      </v-form>
    </div>
    <table class="bg-white w-full" id="Tableau">
      <thead>
        <tr>
          <th class="bg-blue-900 text-white">Auteur</th>
          <th class="bg-blue-900 text-white">Contenu</th>
          <th class="bg-blue-900 text-white">Date</th>
          <th class="bg-blue-900 text-white">Annonce</th>
          <th class="bg-blue-900 text-white"></th>
          <th class="bg-blue-900 text-white"></th>
        </tr>
      </thead>
      <tbody v-for="(com, index) in comments" :key="index">
        <tr :class="{ even: index % 2 === 0, odd: index % 2 !== 0 }">
          <td>{{ com.author }}</td>
          <td>{{ com.body }}</td>
          <td>{{ com.created_at.split("T")[0] }}</td>
          <td>{{ com.postTitle }}</td>
          <td>
            <button
              class="
                bg-white
                hover:bg-blue-300
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
            </button>
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
              @click.prevent='Delete(com._id)'
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
import navBar from "./AdminLinks.vue";

export default {
  name: "TableBis",
  components: {
    navBar,
  },

  created() {
    return this.$store.dispatch("comments/getComment");
  },

  computed: {
    comments() {
      return this.$store.state.comments.comments;
    },
  },
    methods: {
      async search(query) {
        await fetch("http://127.0.0.1:8000/api/commentaire?s=" + query)
          .then((response) => response.json())
          .then((json) => (this.posts = json));
      },

      async Delete(id){
        await this.$store.dispatch("comments/deleteComments", id)
      }
    },
  }
</script>

<style>
.even {
  background: #b1d6ff;
}

.odd {
  background: #eff6ff;
}
</style>
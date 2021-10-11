<template>
  <div>
    <section class="container mx-auto mt-10" id="bg-sup">
      <div
        class="slider-track"
        v-for="post in posts"
        :key="post.id"
        
      >
        <div class="mr-10">
          <div
            class="
              container
              bg-white
              shadow-lg
              transform
              duration-200
              easy-in-out
              rounded-sm
              w-auto
              h-auto
            "
          >
          <div v-if="post.type === this.filter">
            
            <br />
            <div class="" >
              <div class="text-center" >
                <h2 class="text-gray-800">{{ post.title }}</h2>
                <br />
                <tbody>
                  <p class="mt-2 text-gray-600 rounded-sm">
                    {{ post.body }}
                  </p>
                </tbody>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
   
   
    <div class="container mx-auto mt-10 flex-rows">
      <div  v-for="post in posts" :key="post.id">
        <div class="container"  v-if="post.type != this.filter">
          <div class="h-10 overflow-hidden">
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
          <div class="">
            <div class="text-center px-14">
              <h2 class="text-gray-800">from : {{ post.author }}</h2>
              <h2 class="text-gray-800 text-3xl font-bold">{{ post.title }}</h2>
              <br />
              <tbody>
                <p class="mt-2 text-gray-600">{{ post.body }}</p>
              </tbody>
            </div>
            <br />
            <hr class="mt-6" />
          </div>
        </div>
      </div>
    </div>
    <select name="filters" id="filters" @change="onChange($event)">
      <option value="bde" selected>BDE</option>
      <option value="pedago">Pedago</option>
      <option value="ads">Annonces</option>
    </select>

  </div>
</template>

<script>
import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";
export default {
  name: "HomePage",
  components: {
    SplitCarousel,
    SplitCarouselItem,
  },
  data() {
    return {
      filter: "bde"
    };
  },

  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
  },

  created() {
    this.$store.dispatch("posts/fetchPost");
  },

  methods: {
    onChange(event) {
      this.filter = event.target.value || 'bde';
      console.log(this.filter);
    },
  },
};
</script>

<style scoped>
#bg-sup {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: white;
  margin-bottom: 25px;
  position: relative;
}
#bg-sup::before,
#bg-sup::after {
  content: "";
  width: auto;
  height: 450px;
  background-color: #215895;
  z-index: 2;
  position: absolute;
}
#bg-sup::before {
  top: 0;
  left: 0;
}
#bg-sup::after {
  top: 0;
  right: 0;
  transform: rotateZ(180deg);
}
#bg-sup .slider-track {
  display: flex;
  justify-content: space-between;
  animation: scroll 30s infinite linear;
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
</style>

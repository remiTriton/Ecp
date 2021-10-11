<template>
  <div id="app">
    <div id="nav">
      <Header />
      <router-view></router-view>
    </div>
    <Footer />

  </div>
</template>


<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};

</script>


<style lang="css">
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>

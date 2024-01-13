<template>
  <div class="">
    <Navbar />
  </div>
  <router-view></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
body {
  /* font-family: 'Lato', sans-serif; */
  font-family: "Montserrat Alternates", sans-serif;
}
</style>

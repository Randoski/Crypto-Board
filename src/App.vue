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
  /* font-family: "Comic Neue", cursive; */
  font-family: "Montserrat Alternates", sans-serif !important;
}

h1 {
  font-size: 28px !important;
  font-weight: bold !important;
}

@media (min-width: 768px) {
  .cont {
    margin: 0 35px;
  }
  .nav-links {
    margin-left: 35px;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 18px !important;
    font-weight: bold !important;
  }

  p {
    font-size: 14px !important;
  }
}
</style>

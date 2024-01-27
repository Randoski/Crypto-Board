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
  color: rgb(69, 66, 66) !important;
}

@media (min-width: 850x) {
  /* .cont {
    margin: 0 35px;
  } */
  .nav-links {
    margin-left: 35px;
  }
}

@media (max-width: 850px) {
  h1 {
    font-size: 18px !important;
    font-weight: bold !important;
  }

  p {
    font-size: 14px !important;
  }
}

/* @media (min-width: 590px) and (max-width: 1000px) {
  body {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
} */
</style>

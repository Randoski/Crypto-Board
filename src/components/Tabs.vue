<template>
  <div>
    <section class="tablet tab-container">
      <div>
        <router-link
          to="/"
          class="tabs-link"
          :class="{ 'active-tab': $route.path === '/' }"
          >All</router-link
        >
      </div>
      <div v-for="link in links" :key="link">
        <router-link
          :to="'/' + link"
          class="tabs-link"
          :class="{ 'active-tab': $route.path === '/' + link }"
          >{{ capitalizeFirstLetter(link) }}</router-link
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        "gainers",
        "losers",
        "stablecoin",
        "layer-1",
        "layer-2",
        "exchange",
        "defi",
        "nft",
        "web3",
        "metaverse",
        "dex",
        "staking",
        "dao",
        "meme",
        "privacy",
        "gaming",
        "wrapped",
        "fan-token",
        "football-club",
        "social",
      ],
    };
  },

  methods: {
    capitalizeFirstLetter(link) {
      if (link && link.length > 0) {
        return link.charAt(0).toUpperCase() + link.slice(1);
      } else {
        return "";
      }
    },
  },
};
</script>

<style>
/* Tab */
.tab-container {
  display: flex;
}

/* Tabs */
.tablet {
  overflow-x: auto;
  font-size: 12px;
  font-weight: bold;
  color: white;
  margin-top: 32px;
}

/* Tabs scrollbar*/
.tablet::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}

/* Tabs scrollbar (Firefox)*/
.tablet {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* Active Tab link */
.active-tab {
  background: #0e8900;
}

/* Tab links */
.tabs-link {
  color: rgb(100, 100, 100);
  text-decoration: none;
  white-space: nowrap;
  overflow: visible;
  margin: 0 10px;
  padding: 12px 16px;
  background: rgba(14, 137, 0, 0.2);
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.5;
  border: 1px solid transparent;
  display: inline-block;
  line-height: normal;
  box-sizing: border-box;
}

.tabs-link:hover {
  background: #0e8900;
  color: white;
}

/* Active Tab Link */
.active-tab {
  color: white !important;
  background: #0e8900;
}

@media (max-width: 576px) {
  .dropdown-menu {
    position: fixed;
    top: 50px; /* Adjust as needed */
    left: 0;
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    border-top: none;
    max-height: calc(100vh - 50px); /* Adjust as needed */
    overflow-y: auto;
  }
}
</style>

<template>
  <div>
    <section class="tablet tab-container">
      <!-- Default state for the "Cryptocurrencies" tab -->
      <div class="tabs" :class="{ 'active-tab': $route.path === '/' }">
        <router-link to="/" class="tabs-link">All</router-link>
      </div>
      <!-- Loop through other tabs and apply styling based on active route -->
      <div
        v-for="link in links"
        :key="link"
        class="tabs"
        :class="{ 'active-tab': $route.path === '/' + link }"
      >
        <router-link :to="'/' + link" class="tabs-link">{{ link }}</router-link>
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
        "layer-1",
        "layer-2",
        "stablecoin",
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

/* Tabs */
.tabs {
  margin-right: 10px;
  background: rgba(14, 137, 0, 0.2);
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  transition: background 0.3s;
  border: 1px solid transparent;
}

/* Active Tab link */
.active-tab {
  background: #0e8900; /* Dark green background for active tab */
}

/* Tab links */
.tabs-link {
  color: rgb(100, 100, 100) !important;
  text-decoration: none;
  white-space: nowrap;
  overflow: visible;
}

/* Active Tab Link */
.active-tab .tabs-link {
  color: white !important;
}
</style>

<template>
  <div>
    <section class="tablet tab-container">
      <div class="tabs active-tab">
        <router-link to="/" class="tabs-link">Cryptocurrencies</router-link>
      </div>
      <div v-for="link in links" :key="link" class="tabs active-tab">
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
        "defi",
        "stablecoin",
        "nft",
        "dex",
        "exchange",
        "staking",
        "dao",
        "meme",
        "privacy",
        "metaverse",
        "gaming",
        "wrapped",
        "layer-1",
        "layer-2",
        "fan-token",
        "football-club",
        "web3",
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
  background: transparent;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  transition: background 0.3s;
  border: 1px solid transparent;
}

/* Tab hover */
.tabs:hover {
  color: white;
  background-color: rgba(14, 137, 0, 0.2);
}

/* Tab links */
.tabs-link {
  color: rgb(100, 100, 100) !important;
  text-decoration: none;
  white-space: nowrap;
  overflow: visible;
}

/* Active Tab link */
.active-tab,
.active-tab:hover {
  background: #0e8900;
  color: white;
}

/* Active Tab Link */
.active-tab .tabs-link {
  color: white !important;
}
</style>

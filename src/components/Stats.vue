<template>
  <div>
    <section class="style-header row">
      <div class="stats-design col-sm-2">
        <p>Total Coins</p>
        <p>{{ stats.totalCoins }}</p>
      </div>

      <div class="stats-design col-sm-2">
        <p>Total Market Cap</p>
        <p>${{ stats.totalMarketCap }}</p>
      </div>

      <div class="stats-design col-sm-2">
        <p>24 Hours Vol</p>
        <p>${{ stats.total24hVolume }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: [],
    };
  },

  mounted() {
    fetch("https://api.coinranking.com/v2/coins")
      .then((response) => response.json())
      .then((data) => {
        this.stats = data.data.stats;
      });
  },
};
</script>

<style>
.style-header {
  display: flex;
}

/* .stats-design {
  display: flex;
} */
</style>

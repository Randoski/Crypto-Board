<template>
  <div>
    <section class="style-header">
      <div class="stats-design">
        <p class="stats-criteria">Total Coins</p>
        <p v-if="stats" class="stats-value">{{ formatNumber(stats.totalCoins) }}</p>
        <p v-else class="stats-value">--</p>
      </div>

      <div class="stats-design">
        <p class="stats-criteria">Total Market Cap</p>
        <p v-if="stats" class="stats-value">${{ shortenNumber(stats.totalMarketCap) }}</p>
        <p v-else class="stats-value">$ --</p>
      </div>

      <div class="stats-design">
        <p class="stats-criteria">24 Hours Vol</p>
        <p v-if="stats" class="stats-value">${{ shortenNumber(stats.total24hVolume) }}</p>
        <p v-else class="stats-value">$ --</p>
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

  methods: {
    // Format Number
    formatNumber(number) {
      if (number !== null && number !== undefined && !isNaN(number)) {
        const parts = parseFloat(number).toFixed(2).toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
      }
      return "";
    },

    // Shorten Number
    shortenNumber(number) {
      if (typeof number === "undefined" || number === null) {
        return "";
      }
      const suffixes = ["", "k", "m", "b", "t"];
      let suffixIndex = 0;
      while (Math.abs(number) >= 1000 && suffixIndex < suffixes.length - 1) {
        number /= 1000;
        suffixIndex++;
      }
      let formattedNumber;
      if (number >= 1000) {
        formattedNumber = parseFloat(number.toFixed(3));
      } else if (number >= 10) {
        formattedNumber = Math.floor(number);
      } else if (number >= 1) {
        formattedNumber = parseFloat(number.toFixed(2));
      } else {
        formattedNumber = parseFloat(number.toFixed(3));
      }

      return (
        formattedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
        suffixes[suffixIndex]
      );
    },
  },
};
</script>

<style scoped>
.style-header {
  display: flex;
  color: rgb(100, 100, 100) !important;
  margin-top: 40px;
}
.stats-design {
  margin-right: 70px;
}
.stats-criteria {
  font-weight: 600;
  font-size: 14px;
}
.stats-value {
  font-weight: 700;
  margin-top: -10px;
}
</style>

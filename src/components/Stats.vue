<template>
  <div>
    <section class="style-header">
      <div class="stats-design">
        <p class="stats-criteria">Total Coins</p>
        <p v-if="stats" class="stats-value">
          {{ formatNumberNonDecimal(stats.totalCoins) }}
        </p>
        <p v-else class="stats-value">0</p>
      </div>

      <div class="stats-design">
        <p class="stats-criteria">Total Market Cap</p>
        <p v-if="stats" class="stats-value">₦{{ shortenNumber(stats.totalMarketCap) }}</p>
        <p v-else class="stats-value">₦</p>
      </div>

      <div class="stats-design">
        <p class="stats-criteria">24 Hours Vol</p>
        <p v-if="stats" class="stats-value">₦{{ shortenNumber(stats.total24hVolume) }}</p>
        <p v-else class="stats-value">₦</p>
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
    fetch("https://api.coinranking.com/v2/coins?referenceCurrencyUuid=znnRJjGM4nVb")
      .then((response) => response.json())
      .then((data) => {
        this.stats = data.data.stats;
      });
  },

  methods: {
    formatNumberNonDecimal(number) {
      if (number !== null && number !== undefined && !isNaN(number)) {
        const parts = parseFloat(number).toFixed(2).toString().split(".");
        const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // Check if there is a decimal part and it is not .00
        const decimalPart = parts[1] && parts[1] !== "00" ? "." + parts[1] : "";

        return integerPart + decimalPart;
      }
      return "";
    },

    // Shorten Number
    shortenNumber(number) {
      if (typeof number === "undefined" || number === null) {
        return "";
      }

      const suffixes = [
        "",
        " k",
        " million",
        " billion",
        " trillion",
        " quadrillion",
        " quintillion",
      ];

      let suffixIndex = 0;
      while (Math.abs(number) >= 1000 && suffixIndex < suffixes.length - 1) {
        number /= 1000;
        suffixIndex++;
      }

      let formattedNumber;
      if (number >= 10000 && number < 100000) {
        formattedNumber = parseFloat((number / 1000).toFixed(1));
      } else if (number >= 100000) {
        formattedNumber = parseFloat((number / 1000).toFixed(0));
      } else {
        formattedNumber = parseFloat(number.toFixed(2));
      }

      formattedNumber = formattedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      formattedNumber += suffixes[suffixIndex];

      return formattedNumber;
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

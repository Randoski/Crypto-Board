<template>
  <div>
    <!-- All Gainers Heading -->
    <h2 class="section-header">Top Gainers</h2>
    <!-- Description about the coin  -->
    <p class="section-text">These are the top 6 Gainers in the last 24 Hours.</p>
    <div>
      <div v-if="gainers.length">
        <table class="table table-sub-section">
          <thead>
            <!-- Table Head -->
            <tr>
              <th></th>
              <th>Coin</th>
              <th class="text-end">Price</th>
              <th class="text-end">24 hr</th>
            </tr>
          </thead>
          <!-- Table Body -->
          <tbody>
            <tr v-for="(coin, index) in gainers" :key="coin.uuid">
              <td class="numbering">{{ index + 1 }}</td>
              <td class="d-flex align-items-center">
                <router-link
                  :to="{ name: 'Coin', params: { id: coin.uuid } }"
                  class="table-link main-coin"
                >
                  <!-- Crypto Image -->
                  <img :src="coin.iconUrl" alt="coin icon" class="coin-img" />
                  <!-- Crypto Name -->

                  {{ coin.name }}
                  <!-- Crypto Abbreviation -->
                  <span class="abbr">{{ coin.symbol }}</span></router-link
                >
              </td>

              <!-- Price -->

              <td class="text-end">
                <router-link
                  :to="{ name: 'Coin', params: { id: coin.uuid } }"
                  class="table-link"
                >
                  ₦{{ formatNumber(coin.price) }}</router-link
                >
              </td>

              <!-- 24 Hours -->
              <td class="text-end">
                <router-link
                  :to="{ name: 'Coin', params: { id: coin.uuid } }"
                  class="green-text"
                >
                  <span>+</span>{{ coin.change }}%
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Table Loading State -->
      <div v-else class="loading-indicator">
        <!-- Loading indicator content -->
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Fetching-coins...</span>
        </div>
      </div>
    </div>

    <!-- Redirect to All Gainers Page -->
    <div v-if="gainers.length">
      <router-link to="/gainers" class="cta">View all Gainers</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coins: [],
      gainers: [],
    };
  },
  mounted() {
    fetch("https://api.coinranking.com/v2/coins?referenceCurrencyUuid=znnRJjGM4nVb")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const coins = data.data.coins;
        this.gainers = coins.sort((a, b) => b.change - a.change).slice(0, 6);

        console.log("Gainers:", this.gainers);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
  methods: {
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

<style>
.section-header {
  font-size: 24px;
  color: #0e8900;
}

.section-text {
  font-weight: 600;
  color: rgb(100, 100, 100) !important;
}

.cta {
  text-decoration: none;
  background: rgba(14, 137, 0, 0.2);
  color: rgb(100, 100, 100);
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  margin-top: 32px;
  border: 0;
  border-radius: 6px;
}

.cta:hover {
  background-color: #0e8900;
  color: white;
}
</style>

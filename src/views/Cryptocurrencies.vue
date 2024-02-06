<template>
  <div class="container page-query">
    <!-- Page headings -->
    <div class="page-settings">
      <h1 class="page-text-header">All Cryptocurrencies Prices</h1>
      <p class="page-text">We've compilled a list of Cryptocurrencies just for you.</p>

      <!--Stats -->
      <Stats />

      <!-- Tabs -->
      <Tabs />

      <!-- Crypto Table -->
      <section class="table-container">
        <div v-if="coins.length">
          <table class="table">
            <thead>
              <!-- Table Head -->
              <tr>
                <th></th>
                <th>Coin</th>
                <th class="text-end">Price</th>
                <th class="text-end">Market Cap</th>
                <th class="text-end">24 hr</th>
              </tr>
            </thead>
            <!-- Table Body -->
            <tbody>
              <tr v-for="coin in coins" :key="coin.uuid">
                <td class="numbering">{{ coin.rank }}</td>
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
                    ${{ formatNumber(coin.price) }}</router-link
                  >
                </td>

                <!-- Market Cap -->
                <td class="text-end">
                  <router-link
                    :to="{ name: 'Coin', params: { id: coin.uuid } }"
                    class="table-link text-end"
                    >${{ shortenNumber(coin.marketCap) }}</router-link
                  >
                </td>

                <!-- 24 Hours -->
                <td class="text-end">
                  <router-link
                    :to="{ name: 'Coin', params: { id: coin.uuid } }"
                    class="table-link"
                    :class="{
                      'red-text': coin.change < 0,
                      'green-text': coin.change >= 0,
                    }"
                  >
                    <span v-if="coin.change >= 0">+</span>{{ coin.change }}%
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!--  Loading State -->
        <div v-else class="loading-indicator">
          <!-- Loading indicator content -->
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Fetching-coins...</span>
          </div>
        </div>
      </section>

      <!-- Pagination -->
      <section>
        <ul
          class="pag pagination pagination-sm justify-content-center"
          style="margin: 40px 0"
        >
          <li class="page-item pag">
            <a class="page-link pag" href="#">Previous</a>
          </li>
          <li class="page-item">
            <a class="page-link pag activepag" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link pag" href="#">2</a>
          </li>
          <li class="page-item"><a class="page-link pag" href="#">3</a></li>
          <li class="page-item"><a class="page-link pag" href="#">4</a></li>
          <li class="page-item"><a class="page-link pag" href="#">5</a></li>
          <li class="page-item"><a class="page-link pag" href="#">70</a></li>
          <li class="page-item"><a class="page-link pag" href="#">Next</a></li>
        </ul>
      </section>

      <!-- Gainers, Losers and Newest -->
      <section class="row sub-section">
        <!-- Gainers -->
        <div class="col-sm-5">
          <Gainers />
        </div>

        <!-- Losers -->
        <div class="col-sm-2"></div>

        <!-- Losers -->
        <div class="col-sm-5">
          <Losers />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Stats from "../components/Stats.vue";
import Tabs from "../components/Tabs.vue";
import Gainers from "../components/Gainers.vue";
import Losers from "../components/Losers.vue";

export default {
  components: {
    Stats,
    Tabs,
    Gainers,
    Losers,
  },

  data() {
    return {
      coins: [],
    };
  },

  mounted() {
    fetch("https://api.coinranking.com/v2/coins")
      .then((response) => response.json())
      .then((data) => {
        this.coins = data.data.coins;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
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
/* Loading Indicator */
.loading-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: #0e8900;
}

/* Page Settings */
.page-settings {
  margin-top: 125px;
}

.page-text-header {
  color: #0e8900 !important;
}

.page-text {
  font-weight: 600;
  color: rgb(100, 100, 100) !important;
}

.table-container {
  margin-top: 32px;
}

/* Table Head */
th {
  font-size: 10px;
  color: rgb(100, 100, 100) !important;
}

.table-link,
.table-link:hover,
.table-link:active,
.table-link:visited {
  color: rgb(100, 100, 100) !important;
  text-decoration: none;
}

/* Table Data */
td {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
  color: rgb(69, 66, 66) !important;
  font-size: 12px;
  font-weight: 700;
}

/* Crypto Image */
/* img {
  width: 10px;
  height: 10px;
} */

/* Numbering */
.numbering {
  color: rgb(69, 66, 66) !important;
}

.main-coin,
.main-coin:active,
.main-coin:visited {
  color: #0e8900 !important;
}

.main-coin:hover {
  color: rgb(69, 66, 66) !important;
}

.coin-img {
  width: 16px;
  margin-right: 4px;
}

/* Abbreviation  */
.abbr {
  color: rgb(69, 66, 66) !important;
  font-size: 8px !important;
  font-weight: 700 !important;
  text-transform: uppercase;
  margin-left: 2px !important;
}

/* Pagination */
.pag {
  color: rgb(69, 66, 66) !important;
  font-weight: 700;
  box-shadow: none !important;
  border: 1px solid transparent !important;
  margin: 0 5px;
  border-radius: 4px;
}

/* Active Pagination */
.activepag {
  color: white !important;
  background: #0e8900 !important;
  border-radius: 4px;
  border: 1px solid transparent;
}

/* Sub section */
.sub-section {
  margin-top: 108px;
}

.red-text {
  color: red !important;
}

.green-text {
  color: #0e8900 !important;
}

/* Media Queries */
@media (min-width: 850px) {
  /* Page Settings */
  .page-settings {
    margin-top: 155px;
  }

  /* Nav Links */
  .nav-links {
    margin-left: 35px;
  }

  /* Table Head */
  th {
    font-size: 12px;
  }

  /* Table Description */
  td {
    font-size: 14px;
    font-weight: 700;
  }

  /* Abbreviation */
  .abbr {
    font-size: 12px;
    font-weight: 400;
    margin-left: 4px;
  }
}
</style>

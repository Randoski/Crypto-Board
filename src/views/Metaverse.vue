<template>
  <div class="container page-query">
    <!-- Page headings -->
    <div class="page-settings">
      <h1 class="page-text-header">All Cryptocurrencies Prices</h1>
      <p class="page-text">We've compilled a list of Cryptocurrencies just for you.</p>

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
              <tr v-for="(coin, index) in coins" :key="coin.uuid">
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
                    ₦{{ shortenNumber(coin.price) }}</router-link
                  >
                </td>

                <!-- Market Cap -->
                <td class="text-end">
                  <router-link
                    :to="{ name: 'Coin', params: { id: coin.uuid } }"
                    class="table-link text-end"
                    >₦{{ shortenNumber(coin.marketCap) }}</router-link
                  >
                </td>

                <!-- 24 Hours -->
                <td class="text-end">
                  <router-link
                    :to="{ name: 'Coin', params: { id: coin.uuid } }"
                    class=""
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
    </div>
  </div>
</template>

<script>
import Tabs from "../components/Tabs.vue";

export default {
  components: {
    Tabs,
  },

  data() {
    return {
      coins: [],
    };
  },

  mounted() {
    fetch(
      "https://api.coinranking.com/v2/coins?referenceCurrencyUuid=znnRJjGM4nVb&tags=metaverse"
    )
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

    shortenNumber(number) {
      if (typeof number === "undefined" || number === null) {
        return "";
      }

      const suffixes = ["", "k", "m", "b", "t", "qd", "qt"];
      let suffixIndex = 0;

      // Convert the number to absolute value for easier manipulation
      let absNumber = Math.abs(number);

      // Determine the appropriate suffix and divide the number accordingly
      while (absNumber >= 1000 && suffixIndex < suffixes.length - 1) {
        absNumber /= 1000;
        suffixIndex++;
      }

      // Round the number to at most two decimal places
      let roundedNumber = parseFloat(absNumber.toFixed(2));

      // Convert the rounded number to string
      let formattedNumber = roundedNumber.toString();

      // Add commas for thousands separator
      formattedNumber = formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      // Append the appropriate suffix based on suffixIndex
      formattedNumber += " " + suffixes[suffixIndex];

      // Add a minus sign for negative numbers
      if (number < 0) {
        formattedNumber = "-" + formattedNumber;
      }

      return formattedNumber;
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
  color: rgb(232, 13, 13) !important;
  text-decoration: none;
}

.green-text {
  color: #0e8900 !important;
  text-decoration: none;
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

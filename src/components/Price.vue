<template>
  <div>
    <!-- Price Heading -->
    <section class="price-settings">
      <p class="summary">
        <span>Summary - </span>
        {{ description }}
      </p>

      <!-- Price Chart -->
      <div class="chart-heading">
        <h2 class="price-page-heading">Price Chart</h2>
        <!-- Percentage Increase or Decrease -->
        <div class="row price-cont">
          <div class="col-sm-3 price-children">
            <p>3h:</p>
            <p class="price-value">+5%</p>
          </div>

          <!-- High -->
          <div class="col-sm-3 price-children">
            <p>High:</p>
            <p class="price-value">${{ formatNumber(allTimeHigh.price) }}</p>
          </div>

          <!-- Low-->
          <div class="col-sm-3 price-children">
            <p>Low:</p>
            <p class="price-value">N1,200</p>
          </div>

          <!-- Average -->
          <div class="col-sm-3 price-children">
            <p>Average:</p>
            <p class="price-value">N3,500</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Chart -->
    <section class="graph">
      <!-- Graph -->
      <div>
        <line-chart
          :data="{ '2017-05-13': 2, '2017-05-14': 5 }"
          :colors="['#0e8900']"
        ></line-chart>
      </div>
    </section>

    <!-- Calculator and Price performance -->
    <section class="row grid-header">
      <!-- Calculator -->
      <div class="col-sm-5">
        <!-- Calculator Heading -->
        <h2 class="price-page-heading">Calculator</h2>
        <p class="price-page-desc">Statement about what the calculator does</p>

        <!-- Calculator container -->
        <div class="heading-cont">
          <!-- First Input-->
          <div class="input-group mb-3">
            <input type="text" class="form-control cal-set" />
            <select class="form-select cal-set cal-drop" aria-label="Select person">
              <option selected>{{ symbol }} - {{ name }}</option>
            </select>
          </div>

          <!-- Convert Icon -->
          <div class="convert d-flex justify-content-center align-items-center">
            <i class="fas fa-exchange-alt flip-horizontal"></i>
          </div>

          <!-- Second Input-->
          <div class="input-group mb-3">
            <input type="text" class="form-control cal-set" />
            <select class="form-select cal-set cal-drop" aria-label="Select person">
              <option v-for="currency in currencies" :key="currency.uuid">
                {{ currency.symbol }} - {{ currency.name }}
              </option>
              <!-- <option v-for="coin in coins" :key="coin.uuid">
                {{ coin.symbol }} - {{ coin.name }}
              </option> -->
            </select>
          </div>

          <!-- Calendar and Now -->
          <!-- Button and Calendar -->
          <div class="d-flex mt-3 cal-btn">
            <button class="btn btn-primary me-2 cal-set">Now</button>
            <input type="date" class="form-control cal-set" />
          </div>

          <!-- Calculator error -->
          <!-- <div class="error"><p>To throw errors</p></div> -->
        </div>
      </div>

      <!-- Page partition -->
      <div class="col-sm-2"></div>

      <div class="col-sm-5">
        <!-- Supply Information Heading -->
        <h2 class="price-page-heading">Supply Information</h2>
        <p class="price-page-desc">Statement about what the Supply Information</p>

        <!-- Table -->
        <table class="heading-cont table table-sub-section">
          <!-- Table Body -->
          <tbody>
            <tr v-if="supply.confirmed">
              <!-- Criteria -->
              <td class="d-flex align-items-center criteria">
                <span class="icon"
                  ><i class="fas fa-check-circle" style="color: #0e8900"></i>
                </span>
                Supply Verification
              </td>

              <!-- Value -->
              <td v-if="supply.confirmed === true" class="text-end value verified">
                Verified Supply
              </td>

              <td
                v-else-if="supply.confirmed === false"
                class="text-end value unverified"
              >
                Not Verified
              </td>

              <td v-else class="text-end value"></td>
            </tr>

            <tr v-if="supply.circulating">
              <!-- Criteria -->
              <td class="d-flex align-items-center criteria">
                <span class="icon"
                  ><i class="fas fa-infinity" style="color: #0e8900"></i>
                </span>
                Circulating Supply
              </td>

              <!-- Value -->
              <td class="text-end value">
                {{ shortenNumber(supply.circulating) }} {{ symbol }}
              </td>
            </tr>

            <tr v-if="supply.total">
              <!-- Criteria -->
              <td class="d-flex align-items-center criteria">
                <span class="icon"
                  ><i class="fas fa-cubes" style="color: #0e8900"></i> </span
                >Total Supply
              </td>

              <!-- Value -->
              <td class="text-end value">
                {{ shortenNumber(supply.total) }} {{ symbol }}
              </td>
            </tr>
            <tr v-if="supply.max">
              <!-- Criteria -->
              <td class="d-flex align-items-center criteria">
                <span class="icon"
                  ><i class="fas fa-exclamation-triangle" style="color: #0e8900"></i>
                </span>
                Max Supply
              </td>

              <!-- Value -->
              <td class="text-end value">{{ shortenNumber(supply.max) }} {{ symbol }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Coin and Links-->
    <section class="row grid-header">
      <!-- Value Statistics -->
      <div class="col-sm-5">
        <!-- Value Statistics Heading -->
        <h2 class="price-page-heading">Value statistics</h2>
        <p class="price-page-desc">Statement about what the value statistics</p>

        <!-- Table -->
        <table class="heading-cont table table-sub-section">
          <!-- Table Body -->
          <tbody>
            <tr>
              <!-- Criteria -->
              <td class="d-flex align-items-center criteria">
                <span class="icon"
                  ><i class="fas fa-star" style="color: #0e8900"></i>
                </span>
                Coin Ranking
              </td>

              <!-- Value -->
              <td class="text-end value coin-value">
                {{ formatNumberNonDecimal(rank) }}
              </td>
            </tr>
            <tr>
              <!-- Criteria -->
              <td class="d-flex align-items-center criteria">
                <span class="icon"
                  ><i class="fas fa-money-bill-alt" style="color: #0e8900"></i>
                </span>
                Price to BTC
              </td>

              <!-- Value -->
              <td class="text-end value coin-value">{{ formatNumber(btcPrice) }} BTC</td>
            </tr>
            <tr>
              <!-- Criteria -->
              <td class="d-flex align-items-center criteria">
                <span class="icon"
                  ><i class="fas fa-dollar-sign" style="color: #0e8900"></i>
                </span>
                Price to NGN
              </td>

              <!-- Value -->
              <td class="text-end value coin-value">₦{{ formatNumber(price) }}</td>
            </tr>
            <tr>
              <!-- Criteria -->
              <td class="d-flex align-items-center criteria">
                <span class="icon"
                  ><i class="fas fa-layer-group" style="color: #0e8900"></i>
                </span>
                24h Volume
              </td>

              <!-- Value -->
              <td class="text-end value coin-value">
                ₦ {{ shortenNumber($props["24hVolume"]) }}
              </td>
            </tr>
            <tr>
              <!-- Criteria -->
              <td class="d-flex align-items-center criteria">
                <span class="icon"
                  ><i class="fas fa-chart-pie" style="color: #0e8900"></i>
                </span>
                Market Cap
              </td>

              <!-- Value -->
              <td class="text-end value coin-value">₦ {{ shortenNumber(marketCap) }}</td>
            </tr>
            <tr>
              <!-- Criteria -->
              <td class="d-flex align-items-center criteria">
                <span class="icon"
                  ><i class="fas fa-chart-line" style="color: #0e8900"></i>
                </span>
                Volume / Market cap
              </td>

              <!-- Value -->
              <td class="text-end value coin-value">
                {{ formatNumber(computedVolMarketCap) }}
              </td>
            </tr>
            <tr>
              <!-- Criteria -->
              <td class="d-flex align-items-center criteria">
                <span class="icon"
                  ><i class="fas fa-chart-area" style="color: #0e8900"></i>
                </span>
                Fully Diluted Market Cap
              </td>

              <!-- Value -->
              <td class="text-end value coin-value">
                ₦ {{ shortenNumber(fullyDilutedMarketCap) }}
              </td>
            </tr>

            <tr>
              <!-- Criteria -->
              <td class="d-flex align-items-center criteria">
                <span class="icon"
                  ><i class="fas fa-trophy" style="color: #0e8900"></i>
                </span>
                All Time High
              </td>

              <!-- Value -->
              <td class="text-end value coin-value">
                $ {{ shortenNumber(allTimeHigh.price) }}
              </td>
            </tr>

            <tr>
              <!-- Criteria -->
              <td class="d-flex align-items-center criteria">
                <span class="icon"
                  ><i class="fas fa-calendar-alt" style="color: #0e8900"></i
                ></span>
                All Time High Date
              </td>

              <!-- Value -->
              <td class="text-end value coin-value">
                {{ formatDate(allTimeHigh.timestamp) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Page partition -->
      <div class="col-sm-2"></div>

      <!-- Link -->
      <div class="col-sm-5">
        <!-- Value Statistics Heading -->
        <h2 class="price-page-heading">Links</h2>
        <p class="price-page-desc">Statement about Links</p>

        <!-- Table -->
        <table class="heading-cont table table-sub-section">
          <!-- Table Body -->
          <tbody>
            <tr v-for="(link, index) in links" :key="index">
              <!-- Criteria -->
              <td class="d-flex align-items-center criteria">
                <span class="icon"
                  ><i :class="getIconClass(link.type)" style="color: #0e8900"></i>
                </span>
                {{ capitalizeFirstLetter(link.type) }}
              </td>

              <!-- Value -->
              <td class="text-end value">
                <a :href="link.url" target="_blank" class="ext-link-styles"
                  >{{ link.name }}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultCoin: 1,
      defaultCurrency: 1,
      date: "sample",
      icons: {
        bitcointalk: "fab fa-bitcoin",
        explorer: "fas fa-search",
        discord: "fab fa-discord",
        facebook: "fab fa-facebook",
        github: "fab fa-github",
        instagram: "fab fa-instagram",
        linkedin: "fab fa-linkedin",
        medium: "fab fa-medium",
        qq: "fas fa-comment",
        quora: "fab fa-quora",
        reddit: "fab fa-reddit",
        telegram: "fab fa-telegram",
        tiktok: "fas fa-video",
        twitter: "fab fa-twitter",
        vkontakte: "fas fa-comment",
        wechat: "fas fa-comment",
        whitepaper: "fas fa-file-alt",
        youtube: "fab fa-youtube",
        website: "fas fa-globe",
        etc: "fas fa-ellipsis-h-alt",
      },
    };
  },

  computed: {
    computedVolMarketCap() {
      if (!isNaN(parseFloat(this.btcPrice)) && !isNaN(parseFloat(this.marketCap))) {
        return parseFloat(this["24hVolume"]) / parseFloat(this.marketCap);
      } else {
        return "";
      }
    },
  },

  mounted() {
    fetch("https://api.coinranking.com/v2/coins?referenceCurrencyUuid=znnRJjGM4nVb")
      .then((response) => response.json())
      .then((data) => {
        this.coins = data.data.coins;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetch("https://api.coinranking.com/v2/reference-currencies")
      .then((response) => response.json())
      .then((data) => {
        this.currencies = data.data.currencies;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },

  methods: {
    getIconClass(type) {
      return this.icons[type] || this.icons["etc"];
    },
    arrayToText(array) {
      if (!Array.isArray(array)) {
        return "";
      }

      if (array.length === 0) {
        return ";";
      }

      if (array.length === 1) {
        return array[0];
      }
      return array.slice(0 - 1).join(", ") + "," + array[array.length - 1];
    },

    capitalizeFirstLetter(link) {
      if (link && link.length > 0) {
        return link.charAt(0).toUpperCase() + link.slice(1);
      } else {
        return "";
      }
    },

    formatNumber(number) {
      if (number !== null && number !== undefined && !isNaN(number)) {
        const parts = parseFloat(number).toFixed(2).toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
      }
      return "";
    },

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
        "k",
        "million",
        "billion",
        "trillion",
        "quadrillion",
        "quantillion",
      ];
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

    // Format Date,
    formatDate(timestamp) {
      // Check if the timestamp is a valid number and finite
      if (typeof timestamp !== "number" || !isFinite(timestamp)) {
        return "Invalid Date";
      }

      // Convert Unix timestamp to milliseconds
      const milliseconds = timestamp * 1000;

      // Create a new Date object
      const dateObject = new Date(milliseconds);

      // Extract date components
      const year = dateObject.getFullYear();
      const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
        dateObject
      );
      const day = dateObject.getDate();

      // Formatted date string
      const formattedDate = `${day} ${month}, ${year}`;

      return formattedDate;
    },
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    allTimeHigh: {
      type: Object,
      default: () => ({}),
    },
    supply: {
      type: Object,
      default: () => ({}),
    },
    links: {
      type: Array,
      required: true,
    },
    rank: {
      type: String,
      required: true,
    },
    ["24hVolume"]: {
      type: String,
      required: true,
    },
    marketCap: {
      type: String,
      required: true,
    },
    btcPrice: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
    fullyDilutedMarketCap: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.loading-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #0e8900;
}

/* Summary*/
.summary {
  font-weight: 500;
  margin-top: 32px;
  color: rgb(69, 66, 66);
}

.summary span {
  font-weight: 700;
}

.grid-header {
  margin-top: 48px !important;
}

.price-heading {
  display: flex;
  justify-content: space-between;
}

.price-page-heading {
  color: #0e8900 !important;
  margin-top: 40px;
  font-size: 24px;
  font-weight: 600;
}

.price-page-desc {
  font-weight: 500;
  color: rgb(69, 66, 66) !important;
}

.coin-value {
  color: rgb(69, 66, 66);
}

.price-cont {
  margin-top: 24px;
}

.price-children {
  display: flex;
}

.price-children p {
  font-size: 12px !important;
  color: rgb(69, 66, 66);
}

.price-value {
  font-weight: bold;
  margin-left: 8px;
}

.graph {
  margin-top: 48px;
}

.heading-cont {
  margin-top: 32px;
}

.price-heading {
  margin-top: 16px;
  padding: 10px 14px 0;
}

.price-heading p {
  font-weight: 600;
  color: rgb(69, 66, 66);
}

.positive-price {
  background-color: rgba(14, 137, 0, 0.2);
}

.positive-price .percentage {
  color: #0e8a00;
}

.negative-price {
  background-color: rgba(227, 13, 13, 0.2);
}

.negative-price .percentage {
  color: #e30d0d;
}

.icon {
  width: 20px;
  margin-right: 4px;
}

.cal-set {
  box-shadow: none !important;
  border-radius: 0;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 500;
  font-size: 14px;
}

.cal-drop {
  background-color: #0e8a00;
  color: white;
}

.form-select {
  cursor: pointer !important;
}

select {
  border: none !important;
  outline: none !important;
}

option {
  cursor: pointe !important;
  background-color: rgba(14, 137, 0, 0.5);
  font-family: "Montserrat Alternates", sans-serif !important;
}

.form-control:focus,
.cal-drop:focus {
  outline: none;
  border-color: #0e8a00;
}

.convert {
  color: #0e8a00;
  margin-bottom: 16px;
  margin-top: 10px;
  cursor: pointer;
}

.convert:hover {
  color: rgba(14, 137, 0, 0.5);
}

.cal-btn {
  margin-top: 40px !important;
}

.cal-btn button {
  width: 35%;
  background-color: #0e8a00;
  border: 1px solid #0e8a00;
}
.cal-btn button:hover,
.cal-btn button:focus {
  background: transparent;
  border: 1px solid transparent;
  background-color: rgba(14, 137, 0, 0.7);
}

.cal-btn input {
  width: 65%;
  color: rgb(69, 66, 66);
}

.error {
  margin-top: 24px;
  color: rgb(69, 66, 66);
}

.error p {
  font-size: 12px !important;
  font-weight: 600;
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
.active-pag {
  color: white !important;
  background: #0e8900 !important;
  border-radius: 4px;
  border: 1px solid transparent;
}

.criteria {
  font-size: 14px;
  font-weight: 500;
  color: rgb(69, 66, 66) !important;
}

.value {
  font-size: 14px;
  font-weight: 600;
  color: rgb(69, 66, 66) !important;
}

.cta {
  display: block;
  width: 100%;
  text-decoration: none;
  color: rgb(69, 66, 66);
  font-size: 12px;
  font-weight: 600;
  text-align: center !important;
  border: 1px solid rgb(174, 173, 173);
  border-radius: 4px;
  padding: 14px 0;
  margin: 32px 0 88px;
}

.cta:hover {
  background-color: rgba(14, 137, 0, 0.2);
  border: 1px solid transparent;
}

.read-text {
  margin-top: 24px;
  line-height: 1.6;
}

.links-criteria {
  font-weight: 400;
  font-size: 16px;
  color: rgb(69, 66, 66) !important;
}

.link {
  color: #0e8900;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
}

.link:hover {
  color: rgba(14, 137, 0, 0.7);
}

.link:active,
.link:visited {
  color: #0e8900;
}

.ext-link-styles {
  color: #0e8900 !important;
  text-decoration: none !important;
}

.verified {
  color: #0e8900 !important;
}

.unverified {
  color: red !important;
}
</style>

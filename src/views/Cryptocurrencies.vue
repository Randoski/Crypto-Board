<template>
  <div class="container">
    <!-- Page headings -->
    <div class="page-settings">
      <h1>Some header for the coin type</h1>
      <p>Text description for the crypto</p>

      <!-- Tabs -->
      <section class="tablet tab-container">
        <div class="tabs active-tab">
          <router-link to="/" class="tabs-link">Cryptocurrencies</router-link>
        </div>
        <div class="tabs">
          <router-link to="/" class="tabs-link">Gainers</router-link>
        </div>
        <div class="tabs">
          <router-link to="/" class="tabs-link">Losers</router-link>
        </div>
        <div class="tabs">
          <router-link to="/" class="tabs-link">BRC-20</router-link>
        </div>
        <div class="tabs">
          <router-link to="/" class="tabs-link">DRC-20</router-link>
        </div>
        <div class="tabs">
          <router-link to="/" class="tabs-link">SRC-20</router-link>
        </div>
        <div class="tabs">
          <router-link to="/" class="tabs-link">ASC-20</router-link>
        </div>
        <div class="tabs">
          <router-link to="/" class="tabs-link">Layer-1</router-link>
        </div>
        <div class="tabs">
          <router-link to="/" class="tabs-link">Layer-2</router-link>
        </div>
        <div class="tabs">
          <router-link to="/" class="tabs-link">RWA</router-link>
        </div>
        <div class="tabs">
          <router-link to="/" class="tabs-link">Meme</router-link>
        </div>
        <div class="tabs">
          <router-link to="/" class="tabs-link">AI</router-link>
        </div>
      </section>

      <!-- Crypto Table -->
      <section class="mt-3">
        <table class="table">
          <thead>
            <!-- Table Head -->
            <tr>
              <th></th>
              <th>Coin</th>
              <th>Price</th>
              <th>Market Cap</th>
              <th class="text-end">24 hr</th>
            </tr>
          </thead>
          <!-- Table Body -->
          <tbody>
            <tr>
              <td class="numbering">1</td>
              <td class="d-flex align-items-center">
                <router-link to="/coin" class="table-link">
                  <!-- Crypto Image -->
                  <img src="" alt="" />
                  <!-- Crypto Name -->
                  Bitcoin
                  <!-- Crypto Abbreviation -->
                  <span class="abbr">BTC</span></router-link
                >
              </td>

              <!-- Price -->
              <td>
                <router-link to="/coin" class="table-link"> 2.46 million NGN</router-link>
              </td>

              <!-- Market Cap -->
              <td>
                <router-link to="/coin" class="table-link"
                  >805.57 Trillion NGN</router-link
                >
              </td>

              <!-- 24 Hours -->
              <td class="text-end">
                <router-link to="/coin" class="table-link">+2.5</router-link>
              </td>
            </tr>
          </tbody>
        </table>
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
          <li class="page-item"><a class="page-link pag" href="#">1</a></li>
          <li class="page-item active">
            <a class="page-link pag active-pag" href="#">2</a>
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

        <!-- Newest Coin -->
        <div class="col-sm-5">
          <NewestCoin />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NewestCoin from "../components/NewestCoin.vue";
import Gainers from "../components/Gainers.vue";
import Losers from "../components/Losers.vue";

export default {
  components: {
    NewestCoin,
    Gainers,
    Losers,
  },
};
</script>

<style>
/* Page Settings */
.page-settings {
  margin-top: 125px;
}

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
  color: rgb(171, 171, 171) !important;
}

/* Abbreviation  */
.abbr {
  font-size: 8px;
  font-weight: 500;
  text-transform: uppercase;
  margin-left: 4px;
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

/* Sub section */
.sub-section {
  margin-top: 108px;
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

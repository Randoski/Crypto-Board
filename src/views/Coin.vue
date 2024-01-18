<template>
  <div class="container">
    <div class="page-settings">
      <div class="row coin-heading">
        <div class="col-md-12 d-flex flex-row">
          <div>
            <!-- Crypto Details -->
            <div>
              <!-- Image, name & Logo -->
              <div class="coin">
                <div class="coin-head">
                  <img src="" alt="" />
                  <h2 class="crypto-name">Bitcoin</h2>
                  <p class="coin-abbr">BTC</p>
                </div>
                <!-- Web Amount -->
                <div>
                  <p class="desktop-amount">4 million</p>
                </div>
              </div>

              <!-- Amount -->
              <div>
                <p class="mobile-amount">4 million</p>
              </div>
            </div>

            <!-- Tab Links -->
            <ul class="nav nav-tabs" role="tablist">
              <!-- Price -->
              <li class="nav-item temporary-adjust">
                <a class="nav-link active" data-bs-toggle="tab" href="#price">Price</a>
              </li>

              <!-- About -->
              <li class="nav-item temporary-adjust">
                <a class="nav-link" data-bs-toggle="tab" href="#about">About</a>
              </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content tab temporary-adjust2">
              <!-- Price -->
              <div id="price" class="container tab-pane active">
                <div>
                  <Price />
                </div>
              </div>

              <!-- About -->
              <div id="about" class="container tab-pane fade">
                <div>
                  <About />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Price from "../components/Price.vue";
import About from "../components/About.vue";

export default {
  components: {
    Price,
    About,
  },
};
</script>

<style>
.coin-head {
  display: flex;
  align-items: baseline;
}
.coin-abbr {
  margin-left: 4px;
  font-size: 12px !important;
}
.coin-heading {
  margin-top: 112px !important;
}

.crypto-name {
  font-weight: 700;
  font-size: 22px;
  color: rgb(69, 66, 66);
}

.desktop-amount {
  display: none;
  color: rgb(69, 66, 66);
}

.mobile-amount {
  font-weight: bold;
  margin-top: -8px;
  color: rgb(69, 66, 66);
}

.nav-tabs {
  font-size: 16px;
  margin: 20px 0 16px;
  font-weight: 700;
}

.nav-link,
.nav-link.active {
  background-color: transparent !important;
  border-color: transparent !important;
}

.nav-link {
  color: rgb(69, 66, 66);
}
.nav-tabs .nav-link {
  border-bottom: none !important;
}

.nav-link.active {
  color: #0e8900 !important;
}

.nav-link.active:hover {
  color: #0e8900 !important;
}

.nav-tabs .nav-link:hover {
  color: rgba(14, 137, 0, 0.7);
  border: 1px solid transparent;
}

.temporary-adjust {
  margin-left: -17px !important;
}

.temporary-adjust2 {
  margin-left: -13px !important;
}

/* Media Queries */
@media (min-width: 850px) {
  .coin {
    display: flex;
    justify-content: space-between;
  }

  .coin-abbr {
    margin-left: 8px;
    font-size: 11px !important;
  }

  .crypto-name {
    font-weight: 700;
    font-size: 28px;
  }

  .desktop-amount {
    display: block;
    color: rgb(69, 66, 66);
    font-size: 20px;
    font-weight: 700;
  }

  .mobile-amount {
    font-weight: bold;
    margin-top: -8px;
    color: rgb(69, 66, 66);
    display: none;
  }
}
</style>

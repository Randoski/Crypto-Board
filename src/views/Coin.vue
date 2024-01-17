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
                <img src="" alt="" />
                <h2 class="crypto-name">Bitcoin</h2>
                <p class="coin-abbr">BTC</p>
                <!-- Web Amount -->
                <p class="desktop-amount">4 million</p>
              </div>

              <!-- Amount -->
              <div>
                <p class="mobile-amount">4 million</p>
              </div>
            </div>

            <!-- Tab Links -->
            <ul class="nav nav-tabs" role="tablist">
              <!--  -Price -->
              <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="tab" href="#price">Price</a>
              </li>

              <!-- About -->
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#about">About</a>
              </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content tab">
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
.coin {
  display: flex;
  display: flex;
  align-items: baseline;
}

.coin-abbr {
  margin-left: 4px;
  font-size: 12px !important;
}
.coin-heading {
  margin-top: 132px !important;
}

.crypto-name {
  font-weight: 700;
  font-size: 22px;
}

.desktop-amount {
  display: none;
}

.mobile-amount {
  font-weight: bold;
  margin-top: -8px;
}

.tab {
  width: 100% !important;
}
</style>

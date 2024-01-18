<template>
  <div>
    <!-- Price Heading -->
    <section>
      <p class="summary">
        <span>Summary - </span>
        Lo rem ipsum dolor sit amet consectetur, adipisicing elit. Enim reiciendis nam cum
        numquam voluptatibus quidem possimus
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
            <p class="price-value">N7,500</p>
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
    <section>
      <!-- Graph -->
      <div></div>
      <!-- Time Frames -->
      <div></div>
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
            <input type="text" class="form-control cal-set" placeholder="First Name" />
            <select class="form-select cal-set cal-drop" aria-label="Select person">
              <option selected>Choose a person</option>
              <option value="john">John</option>
              <option value="jane">Jane</option>
              <option value="alex">Alex</option>
            </select>
          </div>

          <!-- Convert Icon -->
          <div class="convert d-flex justify-content-center align-items-center">
            <i class="fas fa-exchange-alt flip-horizontal"></i>
          </div>

          <!-- Second Input-->
          <div class="input-group mb-3">
            <input type="text" class="form-control cal-set" placeholder="First Name" />
            <select class="form-select cal-set cal-drop" aria-label="Select person">
              <option selected>Choose a person</option>
              <option value="john">John</option>
              <option value="jane">Jane</option>
              <option value="alex">Alex</option>
            </select>
          </div>

          <!-- Calendar and Now -->
          <!-- Button and Calendar -->
          <div class="d-flex mt-3 cal-btn">
            <button class="btn btn-primary me-2 cal-set">Now</button>
            <input type="date" class="form-control cal-set" />
          </div>

          <!-- Calculator error -->
          <div class="error"><p>To throw errors</p></div>
        </div>
      </div>

      <!-- Page partition -->
      <div class="col-sm-2"></div>

      <!-- Price Performance -->
      <div class="col-sm-5">
        <div class="row">
          <h2 class="price-page-heading col-6">Price Performance</h2>
          <!-- Time dropdown -->
          <!-- <div class="dropdown col-6">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Dropdown button
            </button>
            <ul class="dropdown-menu dropdown-menu-sm">
              <li><a class="dropdown-item" href="#">Link 1</a></li>
              <li><a class="dropdown-item" href="#">Link 2</a></li>
              <li><a class="dropdown-item" href="#">Link 3</a></li>
            </ul>
          </div> -->
        </div>
        <!-- Statement about the price -->
        <p class="price-page-desc">Statement about what Performance price is</p>
        <!-- Price Info -->
        <div class="heading-cont">
          <div class="price-heading positive-price">
            <p>Date</p>
            <p class="percentage">Percentage</p>
          </div>
          <div class="price-heading positive-price">
            <p>Date</p>
            <p class="percentage">Percentage</p>
          </div>
          <div class="price-heading negative-price">
            <p>Date</p>
            <p class="percentage">Percentage</p>
          </div>
          <div class="price-heading positive-price">
            <p>Date</p>
            <p class="percentage">Percentage</p>
          </div>
          <div class="price-heading negative-price">
            <p>Date</p>
            <p class="percentage">Percentage</p>
          </div>
        </div>
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
                <img src="" alt="" /> Bitcoin
              </td>

              <!-- Value -->
              <td class="text-end value coin-value">2.46 million NGN</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Page partition -->
      <div class="col-sm-2"></div>

      <!-- Supply Information -->
      <div class="col-sm-5">
        <!-- Supply Information Heading -->
        <h2 class="price-page-heading">Supply Information</h2>
        <p class="price-page-desc">Statement about what the Supply Information</p>

        <!-- Table -->
        <table class="heading-cont table table-sub-section">
          <!-- Table Body -->
          <tbody>
            <tr>
              <!-- Criteria -->
              <td class="d-flex align-items-center criteria">Bitcoin</td>

              <!-- Value -->
              <td class="text-end value">2.46 million NGN</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- About Coin and Link -->
    <section class="row grid-header">
      <!-- About Coin -->
      <div class="col-sm-5">
        <!-- Coin Heading -->
        <h2 class="price-page-heading">What is Bitcoin</h2>
        <p class="price-page-desc value read-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur quisquam
          voluptas repellat ipsam magnam non velit et eligendi illum excepturi quod
          officiis exercitationem, accusamus atque vero! Vero ea officia earum labore
        </p>
        <router-link to="/" class="cta">Read more about BTC</router-link>
      </div>

      <!-- Page Partition -->
      <div class="col-sm-2"></div>

      <!-- Value Statistics -->
      <div class="col-sm-5">
        <!-- Value Statistics Heading -->
        <h2 class="price-page-heading">Links</h2>

        <!-- Table -->
        <table class="table table- table-sub-section">
          <!-- Table Body -->
          <tbody>
            <tr>
              <!-- Criteria -->
              <td class="d-flex align-items-center criteria">
                <img src="" alt="" /> Bitcoin
              </td>

              <!-- Value -->
              <td class="text-end value"><a href="#" class="link">Link</a></td>
              <td class="text-end value">
                <router-link to="/" class="link">Link</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style>
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
  color: rgb(69, 66, 66);
  margin-top: 40px;
  font-size: 20px;
  font-weight: 600;
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
</style>

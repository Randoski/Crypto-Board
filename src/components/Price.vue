<template>
  <div>
    <!-- Price Heading -->
    <section>
      <div class="summary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim reiciendis nam cum
        numquam voluptatibus quidem possimus
      </div>

      <!-- Price Chart -->
      <div class="chart-heading">
        <h2>Price Chart</h2>
        <!-- Percentage Increase or Decrease -->
        <div>
          <p>3h -</p>
          <p>+5%</p>
        </div>

        <!-- High -->
        <div>
          <p>High-</p>
          <p>N7,500</p>
        </div>

        <!-- Low-->
        <div>
          <p>Low -</p>
          <p>N1,200</p>
        </div>

        <!-- Average -->
        <div>
          <p>Average -</p>
          <p>N3,500</p>
        </div>
      </div>
    </section>

    <!-- Chart -->
    <section>
      <!-- Graph -->
      <div></div>
      <!-- Time Frames -->
      <div>
        <ul
          class="pag pagination pagination-sm justify-content-center"
          style="margin: 40px 0"
        >
          <li class="page-item pag">
            <a class="page-link pag" href="#">Time Frame:</a>
          </li>
          <li class="page-item"><a class="page-link pag" href="#">1H</a></li>
          <li class="page-item active">
            <a class="page-link pag active-pag" href="#">3H</a>
          </li>
          <li class="page-item"><a class="page-link pag" href="#">12H</a></li>
          <li class="page-item"><a class="page-link pag" href="#">24H</a></li>
          <li class="page-item"><a class="page-link pag" href="#">7D</a></li>
          <li class="page-item"><a class="page-link pag" href="#">30D</a></li>
          <li class="page-item"><a class="page-link pag" href="#">3M</a></li>
          <li class="page-item"><a class="page-link pag" href="#">1Y</a></li>
          <li class="page-item"><a class="page-link pag" href="#">3Y</a></li>
          <li class="page-item"><a class="page-link pag" href="#">5Y</a></li>
          <li class="page-item"><a class="page-link pag" href="#">All</a></li>
        </ul>
      </div>
    </section>

    <!-- Calculator and Price performance -->
    <section class="row">
      <!-- Price Performance-->
      <div class="col-sm-5">
        <div>
          <h2>Price Performance</h2>
          <!-- Time dropdown -->
          <div class="dropdown">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Dropdown button
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Link 1</a></li>
              <li><a class="dropdown-item" href="#">Link 2</a></li>
              <li><a class="dropdown-item" href="#">Link 3</a></li>
            </ul>
          </div>
        </div>
        <!-- Statement about the price -->
        <p>Statement about what Performance price is</p>
        <!-- Price Ifo -->
        <div>
          <div class="price-heading">
            <p>Date</p>
            <p>Percentage</p>
          </div>
          <div class="price-heading">
            <p>Date</p>
            <p>Percentage</p>
          </div>
          <div class="price-heading">
            <p>Date</p>
            <p>Percentage</p>
          </div>
          <div class="price-heading">
            <p>Date</p>
            <p>Percentage</p>
          </div>
          <div class="price-heading">
            <p>Date</p>
            <p>Percentage</p>
          </div>
        </div>
      </div>
      <div class="col-sm-2"></div>
      <!-- Calculator -->
      <div class="col-sm-5">
        <!-- Calculator Heading -->
        <h2>Calculator</h2>
        <p>Statement about what the calculator does</p>

        <!-- Calculator container -->
        <div>
          <!-- First Input-->
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="First Name" />
            <select class="form-select" aria-label="Select person">
              <option selected>Choose a person</option>
              <option value="john">John</option>
              <option value="jane">Jane</option>
              <option value="alex">Alex</option>
            </select>
          </div>

          <!-- Convert Icon -->
          <div class="convert">
            <i class="fas fa-exchange-alt flip-horizontal"></i>
          </div>

          <!-- Second Input-->
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="First Name" />
            <select class="form-select" aria-label="Select person">
              <option selected>Choose a person</option>
              <option value="john">John</option>
              <option value="jane">Jane</option>
              <option value="alex">Alex</option>
            </select>
          </div>

          <!-- Calendar and Now -->
          <!-- Button and Calendar -->
          <div class="d-flex mt-3">
            <button class="btn btn-primary me-2">Click me</button>
            <input type="date" class="form-control" />
          </div>

          <!-- Calculator error -->
          <span>To throw errors</span>
        </div>
      </div>
    </section>

    <!-- Coin and Links-->
    <section class="row">
      <!-- Value Statistics -->
      <div class="col-sm-6">
        <!-- Value Statistics Heading -->
        <h2>Value statistics</h2>
        <p>Statement about what the value statistics</p>

        <!-- Table -->
        <table class="table table-hover table-sub-section">
          <!-- Table Body -->
          <tbody>
            <tr>
              <!-- Criteria -->
              <td class="d-flex align-items-center"><img src="" alt="" /> Bitcoin</td>

              <!-- Value -->
              <td>2.46 million NGN</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Supply Information -->
      <div class="col-sm-6">
        <!-- Supply Information Heading -->
        <h2>Supply Information</h2>
        <p>Statement about what the Supply Information</p>

        <!-- Table -->
        <table class="table table-hover table-sub-section">
          <!-- Table Body -->
          <tbody>
            <tr>
              <!-- Criteria -->
              <td class="d-flex align-items-center">Bitcoin <span> i</span></td>

              <!-- Value -->
              <td>2.46 million NGN</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- About Coin and Link -->
    <section class="row">
      <!-- About Coin -->
      <div class="col-sm-6">
        <!-- Coin Heading -->
        <h2>What is Bitcoin</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur quisquam
          voluptas repellat ipsam magnam non velit et eligendi illum excepturi quod
          officiis exercitationem, accusamus atque vero! Vero ea officia earum labore
        </p>
      </div>

      <!-- Value Statistics -->
      <div class="col-sm-6">
        <!-- Value Statistics Heading -->
        <h2>Links</h2>

        <!-- Table -->
        <table class="table table-hover table-sub-section">
          <!-- Table Body -->
          <tbody>
            <tr>
              <!-- Criteria -->
              <td class="d-flex align-items-center"><img src="" alt="" /> website</td>

              <!-- Value -->
              <td><a href="/" target="_blank">link</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style>
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

.convert {
  transform: rotate(180deg) !important;
}

.price-heading {
  display: flex;
  justify-content: space-between;
}
</style>

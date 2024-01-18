<template>
  <div>
    <!-- Newest coin Heading -->
    <h2 class="section-header">Newest Coins</h2>
    <!-- Description about the coin  -->
    <p class="section-text">
      Newest coin description Newest coin description Newest coin description
    </p>

    <table class="table table-hover table-sub-section">
      <thead>
        <!-- Table Head -->
        <tr>
          <th></th>
          <th>Coin</th>
          <th>Price</th>
          <th class="text-end">Added</th>
        </tr>
      </thead>
      <!-- Table Body -->
      <tbody>
        <tr>
          <td class="numbering">1</td>
          <td class="d-flex align-items-center">
            <!-- Crypto Name -->
            Bitcoin
            <!-- Crypto Abbreviation -->
            <span class="abbr">BTC</span>
          </td>

          <!-- Price -->
          <td>2.46 million NGN</td>

          <!-- Time added -->
          <td class="text-end">2 hr</td>
        </tr>
        <tr>
          <td class="numbering">1</td>
          <td class="d-flex align-items-center">
            <!-- Crypto Name -->
            Bitcoin
            <!-- Crypto Abbreviation -->
            <span class="abbr">BTC</span>
          </td>

          <!-- Price -->
          <td>2.46 million NGN</td>

          <!-- Time added -->
          <td class="text-end">2 hr</td>
        </tr>
        <tr>
          <td class="numbering">1</td>
          <td class="d-flex align-items-center">
            <!-- Crypto Name -->
            Bitcoin
            <!-- Crypto Abbreviation -->
            <span class="abbr">BTC</span>
          </td>

          <!-- Price -->
          <td>2.46 million NGN</td>

          <!-- Time added -->
          <td class="text-end">2 hr</td>
        </tr>
        <tr>
          <td class="numbering">1</td>
          <td class="d-flex align-items-center">
            <!-- Crypto Name -->
            Bitcoin
            <!-- Crypto Abbreviation -->
            <span class="abbr">BTC</span>
          </td>

          <!-- Price -->
          <td>2.46 million NGN</td>

          <!-- Time added -->
          <td class="text-end">2 hr</td>
        </tr>
        <tr>
          <td class="numbering">1</td>
          <td class="d-flex align-items-center">
            <!-- Crypto Name -->
            Bitcoin
            <!-- Crypto Abbreviation -->
            <span class="abbr">BTC</span>
          </td>

          <!-- Price -->
          <td>2.46 million NGN</td>

          <!-- Time added -->
          <td class="text-end">2 hr</td>
        </tr>
      </tbody>
    </table>

    <!-- Redirect to Newest Coins Page -->
    <div>
      <router-link to="/" class="cta">View Newest Coins</router-link>
    </div>
  </div>
</template>

<style>
.section-header {
  font-weight: 600;
  font-size: 18px;
  color: rgb(69, 66, 66);
}

.section-text {
  font-size: 12px !important;
  font-weight: 600;
  width: 85%;
  color: rgb(69, 66, 66);
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
  padding: 8px 0;
  margin: 32px 0 88px;
}

.cta:hover {
  background-color: rgba(14, 137, 0, 0.2);
  border: 1px solid transparent;
}

@media (min-width: 850px) {
  /* Page Settings */
  .table-sub-section td {
    font-size: 12px !important;
    font-weight: 600;
  }
  .table-sub-section th {
    font-size: 12px !important;
    font-weight: 600;
  }
}
</style>

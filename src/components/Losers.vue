<template>
  <div>
    <!--All Gainers Heading -->
    <h2 class="section-header">Top Losers</h2>
    <!-- Description about the coin  -->
    <p class="section-text">
      All Losers description All Losers description All Losers description
    </p>

    <table class="table table-sub-section">
      <thead>
        <!-- Table Head -->
        <tr>
          <th></th>
          <th>Coin</th>
          <th>Price</th>
          <th class="text-end">2 hr</th>
        </tr>
      </thead>
      <!-- Table Body -->
      <tbody>
        <tr>
          <td class="numbering">1</td>
          <td class="d-flex align-items-center">
            <router-link to="/coin" class="table-link">
              <!-- Crypto Name -->
              Bitcoin
              <!-- Crypto Abbreviation -->
              <span class="abbr">BTC</span>
            </router-link>
          </td>

          <!-- Price -->
          <td>
            <router-link to="/coin" class="table-link"> 2.46 million NGN</router-link>
          </td>

          <!-- Increase -->
          <td class="text-end">
            <router-link to="/coin" class="table-link"> +5.72%</router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Redirect to All Losers Page -->
    <div>
      <router-link to="/" class="cta">View all Losers</router-link>
    </div>
  </div>
</template>

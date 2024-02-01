<template>
  <div>
    <section>
      <!-- Navbar -->
      <nav class="navbar navbar-expand-sm cont fixed-top bg-white navb">
        <div class="container">
          <router-link class="navbar-brand logo" to="/">Crypto-Board</router-link>

          <!-- Hamburger and search icon -->
          <div class="ham-container">
            <!-- Search icon -->
            <div class="nav-item links">
              <div
                :class="{ 'active-link': isRouteActive('/link') }"
                class="dropdown-item"
              >
                <i class="fas fa-search search-icon2"></i>
              </div>
            </div>

            <!-- Hamburger -->
            <button
              class="navbar-toggler custom-toggler btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <!-- Nav items -->
          <div class="collapse navbar-collapse bg-white" id="collapsibleNavbar">
            <ul class="navbar-nav nav-links links">
              <!-- Cryptocurrencies Link -->
              <li class="nav-item">
                <router-link
                  :class="{ 'active-link': isRouteActive('/') }"
                  class="nav-link"
                  to="/"
                >
                  Cryptocurrencies
                </router-link>
              </li>

              <!-- Learn -->
              <li class="nav-item">
                <router-link
                  :class="{ 'active-link': isRouteActive('/learn') }"
                  class="nav-link"
                  to="/learn"
                >
                  Crypto 101
                </router-link>
              </li>

              <!-- News -->
              <li class="nav-item">
                <router-link
                  :class="{ 'active-link': isRouteActive('/news') }"
                  class="nav-link"
                  to="/news"
                  >Crypto News
                </router-link>
              </li>

              <!-- Favorites (mobile) -->
              <li class="nav-item">
                <router-link
                  :class="{ 'active-link': isRouteActive('/favorites') }"
                  class="nav-link desktop-link"
                  to="/favorites"
                >
                  Favorites
                </router-link>
              </li>
            </ul>

            <!-- Right Icons  -->
            <ul class="navbar-nav ms-auto">
              <!-- Favorites icon -->
              <li class="nav-item links">
                <router-link
                  :class="{ 'active-link': isRouteActive('/favorites') }"
                  class="dropdown-item"
                  to="/favorites"
                >
                  <i class="far fa-heart love-icon"></i>
                </router-link>
              </li>

              <!-- Search icon -->
              <li class="nav-item links">
                <div
                  :class="{ 'active-link': isRouteActive('/link') }"
                  class="dropdown-item"
                >
                  <i class="fas fa-search search-icon"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    isRouteActive(route) {
      return this.$route.path === route || (route === "/" && this.$route.path === "");
    },
  },
};
</script>

<style>
/* Navbar */
.navb {
  padding-bottom: 15px !important;
}

/* Logo */
.logo {
  color: #0e8900 !important;
  font-weight: bold;
  font-family: "Montserrat Alternates", sans-serif;
}

/* Nav links */
.links {
  font-weight: bold;
  font-size: 13px;
  font-family: "Montserrat Alternates", sans-serif;
}

/* Hamburger */
.custom-toggler {
  border: none !important;
  background-color: transparent !important;
  cursor: pointer;
  outline: none !important;
  box-shadow: none !important;
}

.custom-toggler .navbar-toggler-icon {
  width: 1.5em;
  height: 1em;
  position: relative;
  background-color: transparent !important;
  border: none;
}

.ham-container {
  display: flex;
  align-items: center;
}

.love-icon,
.search-icon,
.search-icon2 {
  font-size: 1.3em;
  transition: color 0.3s, border-color 0.3s;
  cursor: pointer;
}

.search-icon {
  font-size: 1.2em;
}

.love-icon:hover,
.search-icon:hover,
.search-icon2:hover,
.nav-link:hover {
  color: #0e8900 !important;
  border-color: #0e8900;
}

.active-link {
  color: #0e8900 !important;
}

/* Media Queries */

/* Margin for navbar */
@media (min-width: 650px) {
  .search-icon {
    margin-left: 16px;
  }
}

@media (min-width: 768px) {
  .cont {
    margin: 0 35px;
  }

  .nav-links {
    margin-left: 35px;
  }
}

@media (min-width: 575px) {
  .desktop-link,
  .search-icon2 {
    display: none !important;
  }
}

@media (max-width: 573px) {
  .love-icon,
  .search-icon {
    display: none !important;
  }
}
</style>

<template>
  <div>
    <div>
      <!-- Navbar -->
      <nav class="navbar navbar-expand-sm cont fixed-top bg-white navb">
        <div class="container">
          <router-link class="navbar-brand logo" to="/">Crypto-Board</router-link>

          <!-- Hamburger -->
          <button
            class="navbar-toggler custom-toggler btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Nav items -->
          <div class="collapse navbar-collapse bg-white" id="collapsibleNavbar">
            <ul class="navbar-nav nav-links links">
              <!-- Cryptocurrencies Link -->
              <li class="nav-item">
                <router-link class="nav-link" to="/">Cryptocurrencies</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/link1">Link</router-link>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  >Dropdown</a
                >

                <ul class="dropdown-menu">
                  <li>
                    <router-link class="dropdown-item" to="/link3">Link</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/link4"
                      >Another link</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/link5"
                      >A third link</router-link
                    >
                  </li>
                </ul>
              </li>
            </ul>

            <!-- Right Link-->
            <li class="nav-link ms-auto links">
              <router-link class="dropdown-item" to="/link">A third link</router-link>
            </li>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

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

/* Media Queries */

/* Margin for navbar */
@media (min-width: 768px) {
  .cont {
    margin: 0 35px;
  }

  .nav-links {
    margin-left: 35px;
  }
}
</style>

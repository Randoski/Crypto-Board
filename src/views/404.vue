<template>
  <div class="container">
    <div class="page-settings">
      <div class="row error-container">
        <div class="center-content">
          <!-- Animation -->
          <i class="fas fa-exclamation-triangle fa-5x animated-icon icon"></i>
          <!-- 404 Message -->
          <div>
            <h2>Ooops...</h2>
            <p>The page you are looking for doesn't exist or has been moved</p>
            <!-- CTA -->
            <div class="cta-container">
              <router-link to="/" class="cta">Take Me Home</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100.2vh;
}

.center-content {
  text-align: center;
}

.icon {
  color: #0e8900;
}

h2 {
  font-size: 40px;
  font-weight: 700;
  color: #0e8900;
}

p {
  font-weight: 700;
  color: rgb(69, 66, 66);
  margin-top: 16px;
}

.cta-container {
  margin-top: 32px;
}

.cta {
  text-decoration: none;
  padding: 12px 24px;
  color: white;
  background-color: #0e8900;
  font-weight: 700;
  font-size: 14px;
}

.cta:hover {
  background-color: rgba(14, 137, 0, 0.9);
}

.animated-icon {
  animation: swing 1s infinite;
}

@keyframes swing {
  0%,
  100% {
    transform: rotate(0deg);
  }
  20%,
  60% {
    transform: rotate(15deg);
  }
  40%,
  80% {
    transform: rotate(-15deg);
  }
}
@import "~animate.css/animate.min.css";
</style>

<script setup>
import { RouterLink } from 'vue-router'

const logoSrc = `${import.meta.env.BASE_URL}logo.png`
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer-inner">
      <div class="footer-brand">
        <RouterLink to="/" class="footer-brand-link">
          <img :src="logoSrc" alt="Cocolicious Logo" class="footer-logo" />
          <div>
            <div class="footer-logo-text">Cocolicious</div>
            <p class="footer-brand-tag">Natural Coconut Coir Products</p>
          </div>
        </RouterLink>
        <p class="footer-description">
          Practical coconut coir products for gardening, home use, and eco-friendly materials that support greener everyday living.
        </p>
      </div>

      <div class="footer-links-grid">
        <div class="footer-column">
          <p class="footer-column-title">Shop</p>
          <RouterLink to="/products">All Products</RouterLink>
          <RouterLink to="/featured">Featured</RouterLink>
          <RouterLink to="/cart">Cart</RouterLink>
          <RouterLink to="/checkout">Checkout</RouterLink>
        </div>

        <div class="footer-column">
          <p class="footer-column-title">Company</p>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
          <RouterLink to="/profile">Profile</RouterLink>
          <RouterLink to="/transactions">Transactions</RouterLink>
        </div>

        <div class="footer-column">
          <p class="footer-column-title">Support</p>
          <RouterLink to="/faq">FAQ</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
          <RouterLink to="/signup">Sign Up</RouterLink>
          <a href="mailto:hello@cocolicious.ph">Email Us</a>
        </div>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>&copy; 2026 Cocolicious. For educational purposes only, and no copyright infringement is intended.</p>
    </div>
  </footer>
</template>

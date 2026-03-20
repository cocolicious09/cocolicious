<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useStore } from '../utils/store'

const { state, cartTotals } = useStore()
const menuOpen = ref(false)
const cartCount = computed(() => cartTotals.value.count)
const logoSrc = `${import.meta.env.BASE_URL}logo.png`

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="container nav">
      <RouterLink to="/" class="logo" @click="closeMenu">
        <img :src="logoSrc" alt="Cocolicious Logo" class="logo-image" />
        Cocolicious
      </RouterLink>

      <nav :class="['menu', { show: menuOpen }]">
        <div class="menu-links">
          <RouterLink to="/" @click="closeMenu">Home</RouterLink>
          <RouterLink to="/about" @click="closeMenu">About</RouterLink>
          <RouterLink to="/featured" @click="closeMenu">Featured</RouterLink>
          <RouterLink to="/products" @click="closeMenu">Products</RouterLink>
          <RouterLink to="/faq" @click="closeMenu">FAQ</RouterLink>
          <RouterLink to="/contact" @click="closeMenu">Contact</RouterLink>
        </div>

        <div class="menu-actions">
          <div v-if="!state.user" class="guest-auth-actions">
            <RouterLink to="/login" class="header-pill-btn" @click="closeMenu">Login</RouterLink>
            <RouterLink to="/signup" class="header-pill-btn signup-btn" @click="closeMenu">Sign Up</RouterLink>
          </div>

          <RouterLink v-else to="/profile" class="menu-icon-link user-profile-link" aria-label="Profile" @click="closeMenu">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-3.33 0-6 1.79-6 4v1h12v-1c0-2.21-2.67-4-6-4z"/>
            </svg>
            <span>Profile</span>
          </RouterLink>

          <RouterLink to="/cart" class="menu-icon-link" aria-label="Shopping Cart" @click="closeMenu">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 18a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm10 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2zM7.17 14h9.96a2 2 0 0 0 1.92-1.45L21 6H6.21l-.3-1.25A1 1 0 0 0 4.94 4H3v2h1.16l2.1 8.39A2 2 0 0 0 8.2 16H19v-2H8.53a.5.5 0 0 1-.49-.39z"/>
            </svg>
            <strong v-if="cartCount > 0" class="cart-count-badge">{{ cartCount }}</strong>
            <span>Cart</span>
          </RouterLink>
        </div>
      </nav>

      <button class="menu-btn" @click="menuOpen = !menuOpen">☰</button>
    </div>
  </header>
</template>

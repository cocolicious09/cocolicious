<script setup>
import { RouterLink } from 'vue-router'
import { useStore, formatPeso, updateCartQuantity, removeFromCart } from '../utils/store'

const { state, cartTotals } = useStore()
</script>

<template>
  <main class="section commerce-page">
    <div class="container commerce-intro">
      <div class="section-head center">
        <p class="section-label">Your Cart</p>
        <h1>Products ready for checkout</h1>
        <p class="subtext page-subtext">Review your selected coconut coir products, adjust quantities, and proceed when you are ready.</p>
      </div>
    </div>

    <div class="container commerce-layout">
      <section class="commerce-main">
        <div v-if="state.cart.length" class="cart-items">
          <article v-for="item in state.cart" :key="item.id" class="cart-item">
            <div class="cart-item-image"><img :src="item.image" :alt="item.title" /></div>
            <div class="cart-item-copy">
              <p class="product-type">{{ item.type }}</p>
              <h3>{{ item.title }}</h3>
              <p class="cart-item-meta">{{ item.description }}</p>
              <div class="cart-item-footer">
                <div class="qty-controls">
                  <button @click="updateCartQuantity(item.id, item.quantity - 1)">-</button>
                  <span>{{ item.quantity }}</span>
                  <button @click="updateCartQuantity(item.id, item.quantity + 1)">+</button>
                </div>
                <strong>{{ formatPeso(item.price * item.quantity) }}</strong>
                <button class="remove-item-btn" @click="removeFromCart(item.id)">Remove</button>
              </div>
            </div>
          </article>
        </div>

        <div v-else class="empty-state">
          <h2>Your cart is still empty</h2>
          <p>Add products from the catalog to see them here.</p>
          <RouterLink to="/products" class="btn primary">Browse Products</RouterLink>
        </div>
      </section>

      <aside class="summary-card">
        <p class="section-label">Order Summary</p>
        <h2>Ready to place your order?</h2>
        <div class="summary-line"><span>Items</span><strong>{{ cartTotals.count }}</strong></div>
        <div class="summary-line"><span>Subtotal</span><strong>{{ formatPeso(cartTotals.total) }}</strong></div>
        <div class="summary-line total"><span>Total</span><strong>{{ formatPeso(cartTotals.total) }}</strong></div>
        <RouterLink v-if="state.cart.length" to="/checkout" class="btn primary summary-btn">Proceed to Checkout</RouterLink>
        <RouterLink to="/transactions" class="summary-link">View Transaction History</RouterLink>
      </aside>
    </div>
  </main>
</template>

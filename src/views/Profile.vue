<script setup>
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useStore, formatPeso, logout } from '../utils/store'

const router = useRouter()
const { state, cartTotals } = useStore()

const initials = computed(() => (state.user?.name || 'CC').split(' ').filter(Boolean).slice(0, 2).map((item) => item[0]).join('').toUpperCase())
const totalSpent = computed(() => state.transactions.reduce((sum, item) => sum + item.total, 0))

const signOut = () => {
  logout()
  router.push('/login')
}
</script>

<template>
  <main class="section profile-page">
    <div class="container profile-hero">
      <div class="profile-banner">
        <div class="profile-avatar-block">
          <div class="profile-avatar">{{ initials }}</div>
          <div>
            <p class="section-label">My Profile</p>
            <h1>{{ state.user?.name || 'Guest Shopper' }}</h1>
            <p class="subtext">{{ state.user ? `Member since ${state.user.memberSince}. Your cart and transaction summary are shown below.` : 'Create or log into a demo account to view your profile information.' }}</p>
          </div>
        </div>
        <div v-if="!state.user" class="profile-hero-actions">
          <RouterLink to="/login" class="btn primary">Log In</RouterLink>
          <RouterLink to="/signup" class="btn profile-outline-btn">Sign Up</RouterLink>
        </div>
      </div>
    </div>

    <div class="container profile-grid">
      <section class="profile-card">
        <p class="section-label">Account Details</p>
        <div class="profile-fields">
          <div class="profile-field"><span>Full Name</span><strong>{{ state.user?.name || 'Guest Shopper' }}</strong></div>
          <div class="profile-field"><span>Email</span><strong>{{ state.user?.email || 'Not signed in' }}</strong></div>
          <div class="profile-field"><span>Phone</span><strong>{{ state.user?.phone || 'No number saved' }}</strong></div>
          <div class="profile-field"><span>Location</span><strong>{{ state.user?.location || 'No location saved' }}</strong></div>
        </div>
      </section>

      <section class="profile-card">
        <p class="section-label">Shopping Overview</p>
        <div class="profile-stats">
          <div class="profile-stat"><span>Total Orders</span><strong>{{ state.transactions.length }}</strong></div>
          <div class="profile-stat"><span>Total Spent</span><strong>{{ formatPeso(totalSpent) }}</strong></div>
          <div class="profile-stat"><span>Current Cart Items</span><strong>{{ cartTotals.count }}</strong></div>
        </div>
        <div class="profile-actions-inline">
          <RouterLink to="/cart" class="btn primary">View Cart</RouterLink>
          <RouterLink to="/transactions" class="btn profile-outline-btn">Transaction History</RouterLink>
        </div>
      </section>

      <section class="profile-card profile-card-wide">
        <div class="profile-card-head">
          <p class="section-label">Recent Transactions</p>
        </div>
        <div v-if="state.transactions.length" class="profile-transactions">
          <article v-for="item in state.transactions.slice(0, 3)" :key="item.id" class="profile-transaction">
            <div>
              <strong>{{ item.id }}</strong>
              <p>{{ item.date }}</p>
              <p>{{ item.paymentMethod }} | {{ item.fulfillmentMethod }}</p>
            </div>
            <div>
              <strong>{{ formatPeso(item.total) }}</strong>
              <p>{{ item.itemCount }} item(s)</p>
            </div>
          </article>
        </div>
        <div v-else class="empty-state">
          <h2>No recent orders yet</h2>
          <p>Checkout from the cart page to see your transaction history summary here.</p>
        </div>
        <div class="profile-bottom-action" v-if="state.user">
          <button type="button" class="logout-btn" @click="signOut">Log Out</button>
        </div>
      </section>
    </div>
  </main>
</template>

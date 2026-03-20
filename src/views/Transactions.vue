<script setup> 
import { useStore, formatPeso } from '../utils/store'
import { RouterLink } from 'vue-router'

const { state } = useStore()
</script>

<template>
  <main class="section commerce-page">
    <div class="container commerce-intro">
      <div class="section-head center">
        <h1>Transactions</h1>
        <p class="subtext page-subtext">Review your previous orders, including payment method, fulfillment option, and total purchase amount.</p>
      </div>
    </div>

    <div class="container history-layout">
      <div class="history-summary">
        <div class="summary-card compact">
          <p class="section-label">Overview</p>
          <h2>{{ state.transactions.length }} Successful Order{{ state.transactions.length === 1 ? '' : 's' }}</h2>
          <p class="subtext">All completed orders will be listed below for quick reference.</p>
        </div>
      </div>

      <div v-if="state.transactions.length" class="history-list">
        <article v-for="item in state.transactions" :key="item.id" class="history-entry">
          <div>
            <p class="product-type">{{ item.id }}</p>
            <h3>{{ item.customerName }}</h3>
            <p class="history-meta">{{ item.date }}</p>
            <p class="history-meta">{{ item.paymentMethod }} | {{ item.fulfillmentMethod }}</p>
            <p class="history-meta">{{ item.customerAddress }}</p>
            <div class="history-products">
              <span v-for="product in item.items" :key="product.id">{{ product.title }} x{{ product.quantity }}<br /></span>
            </div>
          </div>
          <aside>
            <span class="history-badge">{{ item.status }}</span>
            <p class="history-meta">{{ item.itemCount }} item(s)</p>
            <strong>{{ formatPeso(item.total) }}</strong>
          </aside>
        </article>
      </div>

      <div v-else class="empty-state">
        <h2>No order history available</h2>
        <p>Your completed purchases will appear here once an order has been placed.</p>
        <RouterLink to="/products" class="btn primary">Go to Products</RouterLink>
      </div>
    </div>
  </main>
</template>

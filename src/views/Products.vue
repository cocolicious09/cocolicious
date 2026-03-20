<script setup>
import { computed, ref } from 'vue'
import { products } from '../data/products'
import { addToCart, formatPeso } from '../utils/store'

const filter = ref('all')
const search = ref('')
const addedStates = ref({})

const filteredProducts = computed(() =>
  products.filter((item) => {
    const categoryMatch = filter.value === 'all' || item.categories.includes(filter.value)
    const searchMatch = !search.value || item.title.toLowerCase().includes(search.value.toLowerCase())
    return categoryMatch && searchMatch
  })
)

const addItem = (item) => {
  addToCart(item)
  addedStates.value = {
    ...addedStates.value,
    [item.id]: true
  }

  window.setTimeout(() => {
    addedStates.value = {
      ...addedStates.value,
      [item.id]: false
    }
  }, 1000)
}
</script>

<template>
  <main class="section">
    <div class="container products-page-intro">
      <div class="section-head">
        <p class="section-label">Introducing</p>
        <h1>Our Products</h1>
        <p class="subtext page-subtext">
          You can browse our selection of coconut coir products for gardening, home use, and eco-friendly materials. Each product is made from sustainable coconut husks and designed to support greener living.
        </p>
      </div>
    </div>

    <div class="container">
      <div class="products-toolbar">
        <div class="toolbar-controls">
          <div class="filter-group">
            <button class="filter-chip" :class="{ active: filter === 'all' }" @click="filter = 'all'">All</button>
            <button class="filter-chip" :class="{ active: filter === 'gardening' }" @click="filter = 'gardening'">Gardening</button>
            <button class="filter-chip" :class="{ active: filter === 'home' }" @click="filter = 'home'">Home</button>
            <button class="filter-chip" :class="{ active: filter === 'materials' }" @click="filter = 'materials'">Eco Materials</button>
          </div>
          <label class="product-search">
            <span class="sr-only">Search products</span>
            <input v-model="search" type="search" placeholder="Search products" />
          </label>
        </div>
        <p class="toolbar-note">Use the filters or search bar to browse products.</p>
      </div>

      <div class="product-grid">
        <article v-for="item in filteredProducts" :key="item.id" class="product-tile">
          <div class="product-placeholder">
            <img :src="item.image" :alt="item.title" class="product-gallery-image" />
          </div>
          <div class="product-body">
            <p class="product-type">{{ item.type }}</p>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <p class="product-price-tag">{{ formatPeso(item.price) }}</p>
            <button
              class="product-action-btn"
              :class="{ 'is-added': addedStates[item.id] }"
              type="button"
              @click="addItem(item)"
            >
              {{ addedStates[item.id] ? 'Added to Cart' : 'Add to Cart' }}
            </button>
          </div>
        </article>
      </div>

      <div class="products-extra">
        <section class="feature-panel">
          <div class="info-heading">
            <h2>Delivery &amp; Order Information</h2>
          </div>
          <p>We offer fast and reliable delivery for all coconut coir products nationwide. Orders are processed within 1 to 3 business days and shipped directly to your doorstep. Delivery time may vary depending on your location.</p>
          <ul class="info-list">
            <li><span><strong>Delivery Options:</strong> Standard &amp; Express Shipping</span></li>
            <li><span><strong>Pickup Available:</strong> Select areas only</span></li>
            <li><span><strong>Payment Methods:</strong> Cash on Delivery (COD), GCash, Bank Transfer</span></li>
            <li><span><strong>Returns:</strong> Accepted within 7 days for damaged items</span></li>
          </ul>
          <p>We ensure all products are carefully packed to maintain quality and sustainability.</p>
        </section>

        <section class="feature-panel">
          <div class="info-heading">
            <h2>Additional Information</h2>
          </div>
          <p>All our products are made from natural coconut coir, making them eco-friendly and biodegradable. Slight variations in color and texture may occur, as each item is uniquely crafted from natural materials.</p>
        </section>
      </div>
    </div>
  </main>
</template>

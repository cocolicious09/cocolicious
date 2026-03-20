<script setup>
import { ref } from 'vue'
import { formatPeso } from '../utils/store'
import { trendingProducts, products } from '../data/products'

const spotlight = ref(products.find((item) => item.id === 'coconut-coir'))
</script>

<template>
  <main class="featured-page">
    <section class="products-hero section">
      <div class="container products-hero-grid">
        <div>
          <div class="featured-stars" aria-hidden="true">
            <svg v-for="index in 3" :key="index" viewBox="0 0 24 24"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9L12 17l-5.2 2.8 1-5.9-4.3-4.2 5.9-.9z"/></svg>
          </div>
          <p class="section-label">BEST SELLER</p>
          <h1>Coconut Coir</h1>
          <p class="subtext page-subtext">
            Our best seller is our premium coconut coir, a natural growing medium that helps retain moisture, improve aeration, and support healthier plant growth.
          </p>
        </div>

        <div class="product-spotlight">
          <div class="spotlight-image">
            <img :src="spotlight.image" :alt="spotlight.title" class="product-gallery-image" />
          </div>
          <div class="spotlight-copy">
            <p class="section-label">Our Very Own</p>
            <h2>{{ spotlight.title }}</h2>
            <p>{{ spotlight.description }}</p>
            <div class="spotlight-meta">
              <span>Best Seller</span>
              <strong>{{ formatPeso(spotlight.price) }}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head center">
          <p class="section-label">What’s Trending</p>
          <h2>Popular products customers are looking at right now</h2>
        </div>

        <div class="product-grid">
          <article
            v-for="item in trendingProducts"
            :key="item.id"
            class="product-tile"
            :class="{ active: spotlight.id === item.id }"
            @click="spotlight = item"
          >
            <div class="product-placeholder">
              <img :src="item.image" :alt="item.title" class="product-gallery-image" />
            </div>
            <div class="product-body">
              <p class="product-type">Featured</p>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

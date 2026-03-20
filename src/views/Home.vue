<script setup>
import { RouterLink } from 'vue-router'

const plantImage = `${import.meta.env.BASE_URL}plant.png`
const fiberImage = `${import.meta.env.BASE_URL}fiber coir.png`
</script>

<template>
  <section class="hero home-page">
    <div class="container hero-content">
      <div class="hero-text">
        <p class="tag">Natural • Useful • Sustainable</p>
        <h1>Simple coconut coir solutions for greener everyday living</h1>
        <p class="subtext">
          We turn coconut husks into practical products for gardening, home use, and eco-friendly materials that support a cleaner future.
        </p>
        <div class="hero-buttons">
          <RouterLink to="/products" class="btn primary">Order</RouterLink>
          <RouterLink to="/about" class="btn secondary">Learn More</RouterLink>
        </div>
      </div>

      <div class="hero-card">
        <div class="circle one">
          <img :src="plantImage" alt="Plant" class="circle-image" />
        </div>
        <div class="circle two">
          <img :src="fiberImage" alt="Fiber Coir" class="circle-image" />
        </div>
        <div class="product-box">
          <div class="mini-card">
            <h3>Garden Coir</h3>
            <p>Helps plants retain moisture and grow better.</p>
          </div>
          <div class="mini-card small">
            <h3>Eco Fiber</h3>
            <p>Strong natural material from coconut husks.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

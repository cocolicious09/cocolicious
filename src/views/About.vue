<script setup>
const aboutImage = `${import.meta.env.BASE_URL}coir planting.png`
</script>

<template>
  <main>
    <section class="page-hero section" id="about-main">
      <div class="container split">
        <div>
          <p class="section-label">About Coconut Coir</p>
          <h1>Learn why coconut coir is useful, practical, and sustainable</h1>
          <p class="subtext page-subtext">
            Coconut coir is the fiber found between the hard shell and outer coat of a coconut. Instead of being thrown away, it can be reused in smart and sustainable ways for gardening, home products, and other eco-friendly materials.
          </p>
          <p class="subtext page-subtext">
            It holds moisture well, improves soil aeration, supports healthy root growth, and can also be made into mats, ropes, brushes, and other practical items.
          </p>
        </div>
        <div class="about-shape">
          <img :src="aboutImage" alt="Planting coconut coir" class="about-image" />
        </div>
      </div>
    </section>

    <section class="about section">
      <div class="container split">
        <div>
          <p class="section-label">What is Coconut Coir?</p>
          <h2>From Coconut Husk to Something Valuable</h2>
          <p>Coconut coir is the fiber found between the hard shell and outer coat of a coconut. Instead of being thrown away, it can be processed into a reusable material that is both durable and biodegradable.</p>
          <p>It is especially popular in gardening because it holds moisture well, improves air flow around roots, and helps create a better growing environment for plants.</p>
        </div>
        <div>
          <p class="section-label">Why It Matters</p>
          <h2>A smart way to reduce waste</h2>
          <p>Using coconut coir gives a second life to coconut husks. This helps reduce waste while providing a natural alternative to synthetic or less sustainable materials.</p>
          <p>Because it is versatile, coconut coir can be turned into products that are useful for agriculture, household items, and lightweight eco-materials.</p>
        </div>
      </div>
    </section>

    <section class="products section">
      <div class="container">
        <div class="section-head center">
          <p class="section-label">Main Uses</p>
          <h2>Coconut coir in everyday products</h2>
        </div>

        <div class="card-grid">
          <article class="info-card">
            <div class="icon">🌱</div>
            <h3>Gardening</h3>
            <p>Used as a growing medium, seed starter, and soil conditioner for healthier plants.</p>
          </article>
          <article class="info-card">
            <div class="icon">🧺</div>
            <h3>Home Goods</h3>
            <p>Made into mats, brushes, liners, and simple woven items that are durable and natural.</p>
          </article>
          <article class="info-card">
            <div class="icon">🏠</div>
            <h3>Eco Materials</h3>
            <p>Can be used in lightweight boards, padding, and other sustainable material ideas.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="benefits section">
      <div class="container">
        <div class="section-head center">
          <p class="section-label">Why Choose It</p>
          <h2>Simple benefits of coconut coir</h2>
        </div>
        <div class="benefit-row">
          <div class="benefit-box">
            <h3>Reusable</h3>
            <p>It gives new purpose to coconut husks that would otherwise become waste.</p>
          </div>
          <div class="benefit-box">
            <h3>Plant Friendly</h3>
            <p>It keeps moisture while still allowing air to reach the roots.</p>
          </div>
          <div class="benefit-box">
            <h3>Eco-Friendly</h3>
            <p>It is natural, biodegradable, and supports more sustainable product choices.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

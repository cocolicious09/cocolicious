<script setup>
import { ref } from 'vue'
import { faqs } from '../data/faq'

const openIndex = ref(null)
</script>

<template>
  <main class="section">
    <div class="container faq-simple">
      <div class="section-head center">
        <p class="section-label">Frequently Asked Questions</p>
        <h1>Common Questions About Coconut Coir</h1>
      </div>

      <div class="faq-list">
        <article
          v-for="(item, index) in faqs"
          :key="item.question"
          class="faq-item"
          :class="{ 'is-open': openIndex === index }"
        >
          <button
            type="button"
            class="faq-question"
            @click="openIndex = openIndex === index ? null : index"
          >
            {{ item.question }}
          </button>
          <div v-show="openIndex === index" class="faq-answer">
            <p>{{ item.answer }}</p>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

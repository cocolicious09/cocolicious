<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { setUser } from '../utils/store'

const router = useRouter()
const email = ref('')
const password = ref('')
const status = ref('')
const logoSrc = `${import.meta.env.BASE_URL}logo.png`

const submit = () => {
  const parts = email.value.split('@')[0].replace(/[._-]+/g, ' ').trim()
  const name = parts ? parts.split(' ').map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(' ') : 'Cocolicious Customer'
  setUser({
    name,
    email: email.value,
    phone: '09XX XXX XXXX',
    location: 'Philippines',
    memberSince: new Date().toLocaleDateString('en-PH', { year: 'numeric', month: 'long' })
  })
  status.value = 'Logged in successfully. Redirecting to your profile...'
  setTimeout(() => router.push('/profile'), 600)
}
</script>

<template>
  <main class="section auth-page auth-page-single">
    <div class="container auth-layout auth-layout-single">
      <section class="auth-card">
        <div class="auth-brand">
          <img :src="logoSrc" alt="Cocolicious Logo" class="auth-brand-image" />
          <span class="auth-brand-text">Cocolicious</span>
        </div>
        <p class="section-label">Login</p>
        <h1>Log in to your Cocolicious account</h1>
        <p class="subtext auth-subtext">Access your account to review your profile, manage your cart, and view your transaction history.</p>
        <form class="auth-form" @submit.prevent="submit">
          <label>
            <span>Email Address</span>
            <input v-model="email" type="email" required />
            <small class="field-help"></small>
          </label>
          <label>
            <span>Password</span>
            <input v-model="password" type="password" required />
            <small class="field-help"></small>
          </label>
          <button type="submit" class="btn primary auth-submit">Log In</button>
          <p class="auth-status">{{ status }}</p>
        </form>
        <p class="auth-switch">No account yet? <RouterLink to="/signup">Create one here</RouterLink></p>
      </section>
    </div>
  </main>
</template>

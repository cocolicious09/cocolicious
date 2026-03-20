<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { setUser } from '../utils/store'

const router = useRouter()
const form = ref({
  firstName: '',
  middleName: '',
  lastName: '',
  extensionName: '',
  email: '',
  phone: '',
  location: '',
  password: '',
  confirmPassword: ''
})
const status = ref('')

const submit = () => {
  if (form.value.password !== form.value.confirmPassword) {
    status.value = 'Password and confirm password do not match.'
    return
  }

  const name = [form.value.firstName, form.value.middleName, form.value.lastName, form.value.extensionName].filter(Boolean).join(' ')
  setUser({
    name,
    email: form.value.email,
    phone: form.value.phone,
    location: form.value.location,
    memberSince: new Date().toLocaleDateString('en-PH', { year: 'numeric', month: 'long' })
  })
  status.value = 'Account created successfully. Redirecting to your profile...'
  setTimeout(() => router.push('/profile'), 600)
}
</script>

<template>
  <main class="section auth-page signup-page">
    <div class="container auth-layout auth-layout-reverse signup-layout">
      <section class="auth-card">
        <p class="section-label">Create Account</p>
        <h2>Create Your Cocolicious Account</h2>
        <form class="auth-form" @submit.prevent="submit">
          <div class="auth-name-grid">
            <label><span>First Name</span><input v-model="form.firstName" type="text" required /><small class="field-help">Ex: Juan Hera</small></label>
            <label><span>Middle Name</span><input v-model="form.middleName" type="text" /><small class="field-help">Optional | Ex: Placida</small></label>
            <label><span>Last Name</span><input v-model="form.lastName" type="text" required /><small class="field-help">Ex: Doe</small></label>
            <label><span>Extension</span><input v-model="form.extensionName" type="text" /><small class="field-help">Optional | Ex: Jr., Sr., III, etc.</small></label>
          </div>
          <label><span>Email Address</span><input v-model="form.email" type="email" required /><small class="field-help">Ex: user@gmail.com.</small></label>
          <label><span>Phone Number</span><input v-model="form.phone" type="tel" required /><small class="field-help">Format should be 09XX XXX XXXX.</small></label>
          <label><span>Location</span><input v-model="form.location" type="text" required /><small class="field-help">Ex: Quezon City, Philippines.</small></label>
          <label><span>Password</span><input v-model="form.password" type="password" required /><small class="field-help">Must be at least 8 characters long.</small></label>
          <label><span>Confirm Password</span><input v-model="form.confirmPassword" type="password" required /><small class="field-help">Re-enter your password exactly as typed above.</small></label>
          <button type="submit" class="btn primary auth-submit">Create Account</button>
          <p class="auth-status">{{ status }}</p>
        </form>
        <p class="auth-switch">Already have an account? <RouterLink to="/login">Log in here</RouterLink></p>
      </section>
      <section class="auth-showcase auth-showcase-soft signup-showcase">
        <p class="section-label">Join the Brand</p>
        <h1>Build your eco-friendly shopper profile</h1>
        <p class="subtext">Create your account to manage your profile information, review transactions, and keep track of your shopping activity.</p>
        <div class="auth-benefits">
          <div>
            <strong>Account Information</strong>
            <p>Keep your personal details organized in one place for a smoother shopping experience.</p>
          </div>
          <div>
            <strong>Order Access</strong>
            <p>Review your cart, completed purchases, and account activity from a single profile page.</p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

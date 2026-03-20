<script setup>
import { computed, ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useStore, cartTotals, clearCart, createTransaction, formatPeso } from '../utils/store'

const router = useRouter()
const { state } = useStore()
const status = ref('')

const form = ref({
  customerFirstName: '',
  customerMiddleName: '',
  customerLastName: '',
  customerExtensionName: '',
  customerPhone: '',
  customerStreet: '',
  customerBarangay: '',
  customerCity: '',
  customerProvince: '',
  fulfillmentMethod: 'Delivery',
  paymentMethod: 'Cash on Delivery',
  orderNotes: ''
})

const fullName = computed(() => [
  form.value.customerFirstName,
  form.value.customerMiddleName,
  form.value.customerLastName,
  form.value.customerExtensionName
].filter(Boolean).join(' '))

const fullAddress = computed(() => [
  form.value.customerStreet,
  form.value.customerBarangay,
  form.value.customerCity,
  form.value.customerProvince
].filter(Boolean).join(', '))

const submit = () => {
  if (!state.cart.length) {
    status.value = 'Your cart is empty.'
    return
  }
  if (form.value.fulfillmentMethod === 'Delivery' && !fullAddress.value) {
    status.value = 'Please complete the delivery address.'
    return
  }
  createTransaction({
    id: `CC-${Date.now()}`,
    customerName: fullName.value,
    customerPhone: form.value.customerPhone,
    customerAddress: form.value.fulfillmentMethod === 'Pickup' ? 'Store pickup selected' : fullAddress.value,
    fulfillmentMethod: form.value.fulfillmentMethod,
    paymentMethod: form.value.paymentMethod,
    orderNotes: form.value.orderNotes,
    itemCount: cartTotals.value.count,
    total: cartTotals.value.total,
    status: 'Order Confirmed',
    date: new Date().toLocaleString('en-PH', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' }),
    items: state.cart.map((item) => ({ ...item }))
  })
  clearCart()
  status.value = 'Order placed successfully. Redirecting to transactions...'
  setTimeout(() => router.push('/transactions'), 700)
}
</script>

<template>
  <main class="section commerce-page">
    <div class="container commerce-intro">
      <div class="section-head center">
        <p class="section-label">Checkout</p>
        <h1>Choose payment and delivery</h1>
        <p class="subtext page-subtext">Review your order details, select your preferred payment method, and choose how you would like to receive your purchase.</p>
      </div>
    </div>

    <div class="container checkout-layout">
      <section class="summary-card checkout-summary">
        <p class="section-label">Items in this order</p>
        <div v-if="state.cart.length" class="checkout-items">
          <article v-for="item in state.cart" :key="item.id" class="checkout-item">
            <div class="checkout-item-image"><img :src="item.image" :alt="item.title" /></div>
            <div class="checkout-item-copy">
              <h3>{{ item.title }}</h3>
              <p class="checkout-item-meta">{{ item.type }}</p>
              <p class="checkout-item-meta">Quantity: {{ item.quantity }}</p>
              <strong>{{ formatPeso(item.price * item.quantity) }}</strong>
            </div>
          </article>
        </div>
        <div v-else class="empty-state">
          <h2>No products selected yet</h2>
          <p>Add items from the products page before checking out.</p>
          <RouterLink to="/products" class="btn primary">Go to Products</RouterLink>
        </div>
        <div class="summary-line total"><span>Total</span><strong>{{ formatPeso(cartTotals.total) }}</strong></div>
      </section>

      <section class="form-card">
        <form class="checkout-form" @submit.prevent="submit">
          <div class="checkout-name-grid">
            <label><span>First Name</span><input v-model="form.customerFirstName" type="text" required /><small class="field-help">Enter the buyer's given name.</small></label>
            <label><span>Middle Name</span><input v-model="form.customerMiddleName" type="text" /><small class="field-help">Optional middle name.</small></label>
            <label><span>Last Name</span><input v-model="form.customerLastName" type="text" required /><small class="field-help">Enter the buyer's family name.</small></label>
            <label><span>Extension</span><input v-model="form.customerExtensionName" type="text" /><small class="field-help">Optional suffix such as Jr. or III.</small></label>
          </div>

          <div class="form-grid">
            <label><span>Mobile Number</span><input v-model="form.customerPhone" type="tel" required /><small class="field-help">Format: `09XX XXX XXXX`.</small></label>
          </div>

          <div class="checkout-address-grid">
            <label><span>House Number / Street</span><input v-model="form.customerStreet" type="text" :required="form.fulfillmentMethod === 'Delivery'" /><small class="field-help">Include house number and street name.</small></label>
            <label><span>Barangay</span><input v-model="form.customerBarangay" type="text" :required="form.fulfillmentMethod === 'Delivery'" /><small class="field-help">Enter the barangay name.</small></label>
            <label><span>City / Municipality</span><input v-model="form.customerCity" type="text" :required="form.fulfillmentMethod === 'Delivery'" /><small class="field-help">Enter the city or municipality.</small></label>
            <label><span>Province</span><input v-model="form.customerProvince" type="text" :required="form.fulfillmentMethod === 'Delivery'" /><small class="field-help">Enter the province name.</small></label>
          </div>

          <div class="choice-group">
            <p class="choice-title">How will you receive the product?</p>
            <label class="choice-card"><input v-model="form.fulfillmentMethod" type="radio" value="Delivery" name="fulfillment" /><span>Delivery</span></label>
            <label class="choice-card"><input v-model="form.fulfillmentMethod" type="radio" value="Pickup" name="fulfillment" /><span>Pickup</span></label>
          </div>

          <div class="choice-group">
            <p class="choice-title">Payment Method</p>
            <label class="choice-card"><input v-model="form.paymentMethod" type="radio" value="Cash on Delivery" name="payment" /><span>Cash on Delivery</span></label>
            <label class="choice-card"><input v-model="form.paymentMethod" type="radio" value="GCash" name="payment" /><span>GCash</span></label>
            <label class="choice-card"><input v-model="form.paymentMethod" type="radio" value="Bank Transfer" name="payment" /><span>Bank Transfer</span></label>
          </div>

          <label><span>Order Notes</span><textarea v-model="form.orderNotes" rows="4"></textarea><small class="field-help">Optional notes for special delivery or pickup instructions.</small></label>

          <div class="checkout-actions">
            <button type="submit" class="btn primary">Place Order</button>
            <RouterLink to="/cart" class="btn secondary">Back to Cart</RouterLink>
          </div>
          <p class="checkout-status">{{ status }}</p>
        </form>
      </section>
    </div>
  </main>
</template>

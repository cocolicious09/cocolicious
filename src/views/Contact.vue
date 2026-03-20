<script setup>
import { ref } from 'vue'

const submitted = ref(false)
const form = ref({
  firstName: '',
  middleName: '',
  lastName: '',
  extensionName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submit = () => {
  submitted.value = true
  form.value = {
    firstName: '',
    middleName: '',
    lastName: '',
    extensionName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
}
</script>

<template>
  <main class="contact-page">
    <section class="section contact-main-section">
      <div class="container contact-main-grid">
        <section class="contact-side-panel">
          <p class="section-label">Office Information</p>
          <h2>Send your concerns with confidence</h2>
          <p>Whether you are requesting product details, checking order availability, or asking about delivery schedules, our team is ready to assist you.</p>

          <div class="contact-side-group">
            <h3>Office Hours</h3>
            <ul class="contact-hours-list">
              <li><span>Monday to Friday</span><strong>8:00 AM - 5:00 PM</strong></li>
              <li><span>Saturday</span><strong>9:00 AM - 2:00 PM</strong></li>
              <li><span>Sunday</span><strong>Closed</strong></li>
            </ul>
          </div>

          <div class="contact-side-group">
            <h3>Follow Us</h3>
            <div class="contact-social-links">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Website</a>
            </div>
          </div>
        </section>

        <section class="contact-form-card">
          <p class="section-label">Contact Form</p>
          <h2>Send us a message</h2>
          <form class="contact-page-form" @submit.prevent="submit">
            <div class="contact-name-grid">
              <label><span>First Name</span><input v-model="form.firstName" type="text" required /><small class="field-help">Enter your given name.</small></label>
              <label><span>Middle Name</span><input v-model="form.middleName" type="text" /><small class="field-help">Optional middle name.</small></label>
              <label><span>Last Name</span><input v-model="form.lastName" type="text" required /><small class="field-help">Enter your family name.</small></label>
              <label><span>Extension</span><input v-model="form.extensionName" type="text" /><small class="field-help">Optional suffix such as Jr. or III.</small></label>
            </div>

            <div class="contact-form-grid">
              <label><span>Email Address</span><input v-model="form.email" type="email" required /><small class="field-help">Example: `name@email.com`.</small></label>
              <label><span>Phone Number</span><input v-model="form.phone" type="tel" /><small class="field-help">Format: `09XX XXX XXXX` if you wish to be contacted by phone.</small></label>
            </div>

            <label>
              <span>Subject</span>
              <select v-model="form.subject" required>
                <option disabled value="">Select a subject</option>
                <option>Product Inquiry</option>
                <option>Order Assistance</option>
                <option>Delivery Concern</option>
                <option>Partnership Opportunity</option>
                <option>Other</option>
              </select>
              <small class="field-help">Choose the category that best matches your concern.</small>
            </label>

            <label>
              <span>Message</span>
              <textarea v-model="form.message" rows="6" required></textarea>
              <small class="field-help">Provide complete details so our team can respond more accurately.</small>
            </label>

            <button type="submit" class="btn primary contact-submit-btn">Send Message</button>
            <p class="contact-form-status">{{ submitted ? 'Your message has been sent successfully. Our team will get back to you soon.' : '' }}</p>
          </form>
        </section>
      </div>
    </section>

    <section class="section contact-details-section">
      <div class="container">
        <div class="section-head center">
          <p class="section-label">Get in Touch</p>
          <h2>Contact information</h2>
        </div>
        <div class="contact-info-grid">
          <article class="contact-info-card">
            <p class="contact-info-label">Office Address</p>
            <h3>Quezon City Office</h3>
            <p>123 Coir Lane, Coconut Grove, Quezon City, Metro Manila, Philippines 1100</p>
          </article>
          <article class="contact-info-card">
            <p class="contact-info-label">Phone and Email</p>
            <h3>Direct Contact</h3>
            <p><a href="tel:+639171234567">+63 917 123 4567</a></p>
            <p><a href="mailto:hello@cocolicious.ph">hello@cocolicious.ph</a></p>
          </article>
          <article class="contact-info-card">
            <p class="contact-info-label">Business Hours</p>
            <h3>Support Schedule</h3>
            <p>Monday to Friday: 8:00 AM to 5:00 PM</p>
            <p>Saturday: 9:00 AM to 2:00 PM</p>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

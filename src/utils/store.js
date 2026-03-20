import { reactive, computed } from 'vue'
import { CART_KEY, HISTORY_KEY, USER_KEY, readStorage, writeStorage } from './storage'

const state = reactive({
  cart: readStorage(CART_KEY, []),
  transactions: readStorage(HISTORY_KEY, []),
  user: readStorage(USER_KEY, null)
})

const persistCart = () => writeStorage(CART_KEY, state.cart)
const persistTransactions = () => writeStorage(HISTORY_KEY, state.transactions)
const persistUser = () => writeStorage(USER_KEY, state.user)

export const formatPeso = (value) => `PHP ${Number(value || 0).toLocaleString('en-PH')}`

export const cartTotals = computed(() =>
  state.cart.reduce((summary, item) => {
    summary.count += item.quantity
    summary.total += item.price * item.quantity
    return summary
  }, { count: 0, total: 0 })
)

export const addToCart = (product) => {
  const existing = state.cart.find((item) => item.id === product.id)
  if (existing) {
    existing.quantity += 1
  } else {
    state.cart.push({ ...product, quantity: 1 })
  }
  persistCart()
}

export const updateCartQuantity = (id, nextQuantity) => {
  const item = state.cart.find((entry) => entry.id === id)
  if (!item) return
  if (nextQuantity <= 0) {
    state.cart = state.cart.filter((entry) => entry.id !== id)
  } else {
    item.quantity = nextQuantity
  }
  persistCart()
}

export const removeFromCart = (id) => {
  state.cart = state.cart.filter((entry) => entry.id !== id)
  persistCart()
}

export const clearCart = () => {
  state.cart = []
  persistCart()
}

export const setUser = (user) => {
  state.user = user
  persistUser()
}

export const logout = () => {
  state.user = null
  persistUser()
}

export const createTransaction = (payload) => {
  state.transactions.unshift(payload)
  persistTransactions()
}

export const useStore = () => ({
  state,
  cartTotals,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
  setUser,
  logout,
  createTransaction
})

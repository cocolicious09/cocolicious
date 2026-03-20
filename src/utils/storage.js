export const CART_KEY = 'cocolicious-cart'
export const HISTORY_KEY = 'cocolicious-transactions'
export const USER_KEY = 'cocolicious-user'

export const readStorage = (key, fallback) => {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

export const writeStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

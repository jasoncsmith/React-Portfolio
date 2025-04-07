// console.log('-- import.meta.env.VITE_NODE_ENV', import.meta.env.VITE_NODE_ENV)
// console.log('-- process.env.NODE_ENV', process.env.NODE_ENV)

const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  environment: import.meta.env.MODE,
  recaptchaKeyClient: import.meta.env.VITE_RECAPTCHA_SITE_KEY_CLIENT,
}

export default config

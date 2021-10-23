export default {

  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - HappyMatchPanel',
    title: 'HappyMatchPanel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://firebase.nuxtjs.org/
    '@nuxtjs/firebase',
    // Doc: https://http.nuxtjs.org
    '@nuxt/http',
    // https://www.npmjs.com/package/@nuxtjs/toast
    '@nuxtjs/toast'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   baseURL: 'https://happy-match-panel.vercel.app', },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  toast: {
    position: 'top-right',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
},


  firebase: {
    config: {
      apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.VUE_APP_FIREBASE_APP_ID,
      measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
    },
    services: {
      auth: true,
      performance: true,
      analytics: true,
    }
  },

  env: {
    VUE_APP_FIREBASE_API_KEY: process.env.VUE_APP_FIREBASE_API_KEY
  },

  auth: {
    persistence: 'local', // default
    initialize: {
      onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
      onAuthStateChangedAction: 'onAuthStateChangedAction',
      subscribeManually: false
    },
    emulatorPort: 9099,
    emulatorHost: 'http://localhost',

  },
  serverMiddleware: ['~/api/index.js'],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {} 
},
server: {
    host: "192.168.100.2" // TODO: 0.0.0.0 on prod   "192.168.1.71" "192.168.100.2"
}
}

import './style.css'
// FILE: main.js

import { createApp, h, provide } from 'vue'
import { Quasar } from 'quasar'
import { ApolloClients, DefaultApolloClient } from "@vue/apollo-composable"
import { apolloClient } from "./components/apollo"
import quasarLang from 'quasar/lang/ru'
import router from './router'
import Notifications from '@kyvg/vue3-notification'
import { createPinia } from 'pinia'

const pinia = createPinia()

// Import icon libraries
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css'
import '@quasar/extras/material-symbols-sharp/material-symbols-sharp.css'
import '@quasar/extras/mdi-v7/mdi-v7.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import '@quasar/extras/eva-icons/eva-icons.css'
import '@quasar/extras/themify/themify.css'
import '@quasar/extras/line-awesome/line-awesome.css'
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp({
  setup() {
    provide(ApolloClients, {
      default: apolloClient,
    })
  },
  render: () => h(App)
})
myApp.use(router)
myApp.use(pinia)
myApp.use(Notifications)
myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
})


// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')

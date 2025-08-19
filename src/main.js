import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip'
import InstantSearch from 'vue-instantsearch/vue3/es'
import App from './App.vue'
import Lara from '@primevue/themes/lara'
import { definePreset } from '@primevue/themes'

import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import './assets/icons/azionicons.scss'
import './assets/styles/main.css'
import './assets/styles/text.css'
import 'azion-theme'

const app = createApp(App)

const MyPreset = definePreset(Lara, {
  primitive: {
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#F3652B',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407'
    }
  },
  components: {
    inputtext: {
      root: {
        background: '{surface.800}',
        hoverBackground: '{surface.800}',
        filledBackground: '{surface.800}',
        filledHoverBackground: '{surface.800}'
      }
    },
    dropdown: {
      root: {
        background: '{surface.800}',
        hoverBackground: '{surface.800}'
      }
    }
  },
  semantic: {
    primary: {
      50: '{orange.50}',
      100: '{orange.100}',
      200: '{orange.200}',
      300: '{orange.300}',
      400: '{orange.400}',
      500: '{orange.500}',
      600: '{orange.600}',
      700: '{orange.700}',
      800: '{orange.800}',
      900: '{orange.900}',
      950: '{orange.950}'
    }
  }
})

app.use(InstantSearch)
app.use(PrimeVue, {
  unstyled: false,
  theme: {
    preset: MyPreset
  }
})

app.directive('tooltip', Tooltip)
app.mount('#app')

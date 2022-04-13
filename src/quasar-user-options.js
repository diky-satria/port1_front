
import './styles/quasar.sass'
import './styles/fontawesome.min.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/material-icons/material-icons.css'

import {
  // Quasar,
  Notify,
  Dialog
} from 'quasar'

// To be used on app.use(Quasar, { ... })
export default {
  config: {},
  plugins: {
    Notify,
    Dialog
  }
}
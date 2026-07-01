import type { App } from 'vue'
import Coloscolumn from './components/Coloscolumn.vue'

export { Coloscolumn }
export type { ColoscolumnProps } from './components/Coloscolumn.vue'

export default {
  install(app: App) {
    app.component('Coloscolumn', Coloscolumn)
  },
}

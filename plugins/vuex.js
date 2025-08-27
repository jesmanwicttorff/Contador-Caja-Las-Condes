// plugins/vuex.js
import { defineNuxtPlugin } from "#app"
import store from "~/store"

export default defineNuxtPlugin((nuxtApp) => {
  // hago que todos los componentes definidos tenga acceso al store
  nuxtApp.vueApp.use(store())
})

<template>
  <header class="p-4 bg-gray-800 text-white flex justify-between items-center">
    <h1 class="text-xl font-bold">📊 Gestion de Contadores Caja las Condes</h1>
    <p>Total: {{ suma }}</p>
  </header>
</template>

<script setup>
import { useStore } from "vuex"
import { computed, onMounted } from "vue"

const store = useStore()
const suma = computed(() => store.getters.sumaContadores)

onMounted(() => {
  // Restauro el estado de la aplicacion definido en el store
  store.commit("INIT_STATE")
})
</script>

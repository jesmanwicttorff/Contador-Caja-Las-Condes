<template>
  <div class="contador-card">
    <span>{{ contador.nombre }} ({{ contador.valor }})</span>
    <div class="flex gap-2">
      <button @click="store.commit('INCREMENTAR', contador.id)">➕</button>
      <button @click="store.commit('DECREMENTAR', contador.id)">➖</button>
      <button @click="store.commit('ELIMINAR_CONTADOR', contador.id)">🗑️</button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex"
const props = defineProps({ contador: Object })
const store = useStore()
</script>

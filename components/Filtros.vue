<template>
  <div class="filtros" >
    <input v-model="busqueda" placeholder="Buscar..." class="border p-2" />
    <select v-model="tipo" class="border p-2">
      <option value="">-- Filtro --</option>
      <option value="mayor">Mayor que</option>
      <option value="menor">Menor que</option>
    </select>
    <input v-if="tipo" type="number" v-model.number="valor" class="border p-2 w-20" />
    <button @click="aplicar" class="bg-blue-500 text-white px-3 py-1">Aplicar</button>
    <button @click="limpiar" class="bg-gray-500 text-white px-3 py-1">Limpiar</button>
  </div>
</template>

<script setup>
import { useStore } from "vuex"
import { ref } from "vue"

const store = useStore() // usamos la importacion de vuex para leer y modificar el estado global
const tipo = ref("")
const valor = ref(null)
const busqueda = ref("")

function aplicar() {
  // se envia la mutacion APLICAR_FILTRO a vuex para luego ser guardado
  store.commit("APLICAR_FILTRO", { tipo: tipo.value, valor: valor.value, busqueda: busqueda.value })
}
function limpiar() {
  // se envia la mutacion LIMPIAR_FILTROS a vuex para luego ser guardado
  store.commit("LIMPIAR_FILTROS")
  tipo.value = ""
  valor.value = null
  busqueda.value = ""
}
</script>

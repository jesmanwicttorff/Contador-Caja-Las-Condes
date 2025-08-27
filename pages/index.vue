<template>
  <div>
    <Header />
    <Filtros />

    <!-- Botón que abre el modal -->
    <div class="p-4">
      <button
        @click="mostrarModal = true"
        class="boton-agregar"
      >
        ➕ Agregar contador
      </button>
    </div>

    <!-- Modal -->
    <div
      v-if="mostrarModal"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-white p-6 rounded shadow-lg w-80">
        <h2 class="text-lg font-bold mb-4">Nuevo contador</h2>

        <input
          v-model="nuevo"
          @input="validarInput"
          placeholder="Nombre del contador..."
          maxlength="20"
          class="border p-2 w-full mb-3"
        />

        <div class="flex justify-end gap-2">
          <button
            @click="cancelar"
            class="bg-gray-400 text-white px-3 py-1 rounded"
          >
            Cancelar
          </button>
          <button
            @click="agregar"
            class="bg-green-600 text-white px-3 py-1 rounded"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>

    <!-- Lista de contadores -->
    <div class="p-4 grid gap-2">
      <Contador v-for="c in contadores" :key="c.id" :contador="c" />
    </div>
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue"
import Contador from "~/components/Contador.vue"
import Filtros from "~/components/Filtros.vue"
import { useStore } from "vuex"
import { ref, computed } from "vue"

const store = useStore()
const nuevo = ref("")
const mostrarModal = ref(false)

const contadores = computed(() => store.getters.contadoresFiltrados)

//  Solo letras, espacios y acentos en el campo nombre
function validarInput() {
  nuevo.value = nuevo.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, "")
}
// Funcion al agregar nombre del contador
function agregar() {
  // se valida que el nombre no este vacio
  if (!nuevo.value.trim()) {
    alert("El nombre no puede estar vacío")
    return
  }
  // se valida que el nombre del contador no tenga mas de 20 caracteres
  if (nuevo.value.length > 20) {
    alert("El nombre no puede tener más de 20 caracteres")
    return
  }
// Si pasa por las validaciones correctamente  se agrega el contador 
  store.commit("AGREGAR_CONTADOR", nuevo.value.trim())
  nuevo.value = ""
  mostrarModal.value = false
}

function cancelar() {
  nuevo.value = ""
  mostrarModal.value = false
}
</script>

// store/index.js
import { createStore } from "vuex"

const store = () =>
  createStore({
    state: () => ({
      contadores: [],
      filtros: { tipo: null, valor: null, busqueda: "" }
    }),
    mutations: {
      INIT_STATE(state) {
        if (process.client) {
          const saved = localStorage.getItem("contadores")
          if (saved) state.contadores = JSON.parse(saved)
          const savedFiltros = sessionStorage.getItem("filtros")
          if (savedFiltros) state.filtros = JSON.parse(savedFiltros)
        }
      },
       AGREGAR_CONTADOR(state, nombre) {
    if (state.contadores.length >= 20) return
    // 🚨 Validación: solo letras y espacios, máx 20 caracteres
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,20}$/
    if (!regex.test(nombre)) return  

    state.contadores.push({ id: Date.now(), nombre, valor: 0 })
    localStorage.setItem("contadores", JSON.stringify(state.contadores))
  },
      ELIMINAR_CONTADOR(state, id) {
        state.contadores = state.contadores.filter(c => c.id !== id)
        localStorage.setItem("contadores", JSON.stringify(state.contadores))
      },
      INCREMENTAR(state, id) {
        const c = state.contadores.find(c => c.id === id)
        if (c && c.valor < 20) {
          c.valor++
          localStorage.setItem("contadores", JSON.stringify(state.contadores))
        }
      },
      DECREMENTAR(state, id) {
        const c = state.contadores.find(c => c.id === id)
        if (c && c.valor > 0) {
          c.valor--
          localStorage.setItem("contadores", JSON.stringify(state.contadores))
        }
      },
      APLICAR_FILTRO(state, filtros) {
        state.filtros = filtros
        sessionStorage.setItem("filtros", JSON.stringify(filtros))
      },
      LIMPIAR_FILTROS(state) {
        state.filtros = { tipo: null, valor: null, busqueda: "" }
        sessionStorage.removeItem("filtros")
      }
    },
    getters: {
      contadoresFiltrados: (state) => {
        let lista = [...state.contadores]
        if (state.filtros.busqueda) {
          lista = lista.filter(c =>
            c.nombre.toLowerCase().includes(state.filtros.busqueda.toLowerCase())
          )
        }
        if (state.filtros.tipo && state.filtros.valor !== null) {
          if (state.filtros.tipo === "mayor") {
            lista = lista.filter(c => c.valor > state.filtros.valor)
          } else if (state.filtros.tipo === "menor") {
            lista = lista.filter(c => c.valor < state.filtros.valor)
          }
        }
        return lista
      },
      sumaContadores: (state) => {
        return state.contadores.reduce((acc, c) => acc + c.valor, 0)
      }
    }
  })

export default store

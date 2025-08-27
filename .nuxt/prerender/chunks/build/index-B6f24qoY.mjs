import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/vue/server-renderer/index.mjs';
import { ref, computed, mergeProps, useSSRContext } from 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/vue/index.mjs';
import { u as useStore } from './server.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/Globalsym/Desktop/GestionContador/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/devalue/index.js';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/Globalsym/Desktop/GestionContador/node_modules/vue-devtools-stub/dist/index.mjs';

const _sfc_main$3 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const suma = computed(() => store.getters.sumaContadores);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "p-4 bg-gray-800 text-white flex justify-between items-center" }, _attrs))}><h1 class="text-xl font-bold">\u{1F4CA} Gestion de Contadores Caja las Condes</h1><p>Total: ${ssrInterpolate(suma.value)}</p></header>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Contador",
  __ssrInlineRender: true,
  props: { contador: Object },
  setup(__props) {
    useStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contador-card" }, _attrs))}><span>${ssrInterpolate(__props.contador.nombre)} (${ssrInterpolate(__props.contador.valor)})</span><div class="flex gap-2"><button>\u2795</button><button>\u2796</button><button>\u{1F5D1}\uFE0F</button></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contador.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Filtros",
  __ssrInlineRender: true,
  setup(__props) {
    useStore();
    const tipo = ref("");
    const valor = ref(null);
    const busqueda = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "filtros" }, _attrs))}><input${ssrRenderAttr("value", busqueda.value)} placeholder="Buscar..." class="border p-2"><select class="border p-2"><option value=""${ssrIncludeBooleanAttr(Array.isArray(tipo.value) ? ssrLooseContain(tipo.value, "") : ssrLooseEqual(tipo.value, "")) ? " selected" : ""}>-- Filtro --</option><option value="mayor"${ssrIncludeBooleanAttr(Array.isArray(tipo.value) ? ssrLooseContain(tipo.value, "mayor") : ssrLooseEqual(tipo.value, "mayor")) ? " selected" : ""}>Mayor que</option><option value="menor"${ssrIncludeBooleanAttr(Array.isArray(tipo.value) ? ssrLooseContain(tipo.value, "menor") : ssrLooseEqual(tipo.value, "menor")) ? " selected" : ""}>Menor que</option></select>`);
      if (tipo.value) {
        _push(`<input type="number"${ssrRenderAttr("value", valor.value)} class="border p-2 w-20">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="bg-blue-500 text-white px-3 py-1">Aplicar</button><button class="bg-gray-500 text-white px-3 py-1">Limpiar</button></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filtros.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const nuevo = ref("");
    const mostrarModal = ref(false);
    const contadores = computed(() => store.getters.contadoresFiltrados);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="p-4"><button class="boton-agregar"> \u2795 Agregar contador </button></div>`);
      if (mostrarModal.value) {
        _push(`<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"><div class="bg-white p-6 rounded shadow-lg w-80"><h2 class="text-lg font-bold mb-4">Nuevo contador</h2><input${ssrRenderAttr("value", nuevo.value)} placeholder="Nombre del contador..." maxlength="20" class="border p-2 w-full mb-3"><div class="flex justify-end gap-2"><button class="bg-gray-400 text-white px-3 py-1 rounded"> Cancelar </button><button class="bg-green-600 text-white px-3 py-1 rounded"> Confirmar </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="p-4 grid gap-2"><!--[-->`);
      ssrRenderList(contadores.value, (c) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          key: c.id,
          contador: c
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B6f24qoY.mjs.map

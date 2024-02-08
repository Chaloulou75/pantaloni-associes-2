import { _ as __nuxt_component_0 } from './nuxt-link-64FtepmJ.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, ref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-4 bg-gray-600" }, _attrs))}><div class="flex flex-col items-center justify-between w-full px-3 py-5 m-auto space-y-2 text-sm text-gray-200 md:flex-row lg:text-base"><div> \xA9 Pantaloni &amp; Associ\xE9s ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}. Tous droits r\xE9serv\xE9s. </div><div class="flex justify-between">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/mentionslegales",
    class: "hover:text-gray-300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Mentions l\xE9gales`);
      } else {
        return [
          createTextVNode("Mentions l\xE9gales")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FooterComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "VisibleComponent",
  __ssrInlineRender: true,
  props: ["whenHidden"],
  setup(__props) {
    const shouldDisplay = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: shouldDisplay.value ? null : { display: "none" }
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VisibleComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const VisibleComponent = _sfc_main$1;
const _sfc_main = {
  __name: "ScrollLinkComponent",
  __ssrInlineRender: true,
  props: ["href"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({ href: __props.href }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</a>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollLinkComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ScrollLinkComponent = _sfc_main;

export { FooterComponent as F, ScrollLinkComponent as S, VisibleComponent as V };
//# sourceMappingURL=ScrollLinkComponent-y74p8hPX.mjs.map

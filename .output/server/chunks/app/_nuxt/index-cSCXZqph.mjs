import { defineComponent, ref, computed, h, mergeProps, withCtx, openBlock, createBlock, createVNode, useSSRContext, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, b as useNuxtApp, a as useRuntimeConfig } from '../server.mjs';
import { F as FooterComponent, V as VisibleComponent, S as ScrollLinkComponent } from './ScrollLinkComponent-y74p8hPX.mjs';
import { u as useHead } from './index-tbNGurtz.mjs';
import { r as encodeParam, l as hasProtocol, t as withLeadingSlash, j as joinURL, p as parseURL, n as defu, v as encodePath } from '../../nitro/node-server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './nuxt-link-64FtepmJ.mjs';

const _sfc_main$9 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "min-h-full bg-gray-600",
    id: "contact"
  }, _attrs))}><h2 class="sticky top-0 z-30 py-4 mb-8 text-xl font-medium tracking-wider text-center text-white uppercase bg-gray-600 backdrop-blur-xs"> Contact </h2><div class="justify-around pb-32 space-y-6 md:space-y-0 lg:flex"><div class="flex justify-start w-full px-2 tracking-wider text-gray-100 lg:w-1/3 lg:justify-center"><div><p class="flex items-center text-lg lg:text-xl"><svg class="inline-block w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> Adresse: </p><p class="mt-4 ml-10 text-xl font-extralight text-pink-cabinet lg:text-2xl"> Pantaloni &amp; Associ\xE9s | Avocats </p><p class="ml-10 text-lg">15 Rue Saussier Leroy</p><p class="ml-10 text-lg">75017 Paris</p><p class="ml-10 text-lg">France</p></div></div><div class="flex justify-start w-full px-2 text-gray-100 lg:w-1/3 lg:justify-center"><div><p class="flex items-center justify-start pb-4 text-lg font-light text-gray-100 cursor-pointer lg:text-xl"><svg class="inline-block w-6 h-6 mr-4 lg:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg><span class="tracking-wide underline transition duration-200 ease-in-out decoration-pink-cabinet underline-offset-4 hover:translate-x-1">info@pantaloni-avocats.com</span></p></div></div><div class="flex justify-start w-full px-2 text-gray-100 lg:w-1/3 lg:justify-center"><div class="text-lg tracking-wide"><p class="ml-10 md:ml-0">Le cabinet vous re\xE7oit sur rendez-vous.</p><p class="ml-10 md:ml-0"><span class="mr-2"> Horaires d&#39;ouvertures du secr\xE9tariat: </span> de 9h30 \xE0 17h30 </p><div class="flex items-center mt-2"><svg class="inline-block w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><a href="tel:+33185734050">+ 33 1 85 73 40 50</a></div><p class="mt-2"><span class="p-1 mr-2"> Fax: </span> + 33 1 86 95 29 57 </p></div></div></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactComponent.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const ContactComponent = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$6]]);
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? void 0 : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$GdYQEdb8NC = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ]
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$GdYQEdb8NC, defaults: {} }
};
const useImage = () => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    }
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: true },
  // modifiers
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  densities: { type: String, default: void 0 },
  preload: { type: Boolean, default: void 0 },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: {
    type: String,
    default: void 0,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], default: void 0 }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 }
};
const __nuxt_component_0 = defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          }
        }]
      });
    }
    const imgEl = ref();
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("img", {
      ref: imgEl,
      src: src.value,
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs.value,
      ...ctx.attrs
    });
  }
});
const _sfc_main$8 = {
  __name: "HeroPalaisComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const showDropdown = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative w-full min-h-screen",
        id: "herotop"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        sizes: "sm:100vw",
        src: "/palais3.jpg",
        alt: "palais",
        class: "absolute inset-0 object-cover w-full h-full opacity-50"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-pink-cabinet/50 mix-blend-overlay backdrop-blur-xxs"></div><div class="flex flex-col items-center justify-between min-h-screen mx-auto"><div class="relative mt-auto mb-20 space-y-8"><h1 class="text-4xl font-normal text-center underline transition duration-200 animate-fade-in-down decoration-pink-cabinet decoration-2 underline-offset-8 md:text-6xl lg:text-8xl"><span class="text-transparent bg-black bg-clip-text"> Pantaloni &amp; Associ\xE9s </span></h1><h2 class="text-3xl font-medium text-center text-black underline transition duration-200 animate-fade-in-down-delai decoration-pink-cabinet decoration-2 underline-offset-8 md:text-4xl lg:text-6xl"> - Avocats \xE0 la Cour - </h2></div><div class="my-20 mr-auto md:mx-auto"><ul class="flex flex-col justify-around space-y-3 text-lg font-medium uppercase animate-fade-in-down-delai-more md:flex-row md:space-x-8 md:space-y-0 lg:text-2xl"><li class="relative px-3 tracking-wide text-black transition duration-300 ease-in-out cursor-pointer decoration-pink-cabinet decoration-2 hover:translate-x-2 hover:underline hover:underline-offset-4"><a href="#cabinet">Le cabinet</a></li><li class="relative px-3 tracking-wide text-black transition duration-300 ease-in-out cursor-pointer decoration-pink-cabinet decoration-2 hover:translate-x-2 hover:underline hover:underline-offset-4"><a href="#equipe">L&#39;equipe</a>`);
      if (unref(showDropdown)) {
        _push(`<div class="absolute z-30 hidden h-auto text-black rounded-lg w-52 bg-gray-50 lg:-top-32 lg:left-5 lg:block"><ul class="px-3 pt-2 pb-1 text-xs divide-y divide-gray-200"><li class="py-1 hover:font-semibold"><a href="#MarcPantaloni">Marc Pantaloni</a></li><li class="py-1 hover:font-semibold"><a href="#MagaliGreiner">Magali Greiner</a></li><li class="py-1 hover:font-semibold"><a href="#GhinwaRachwan">Ghinwa Rachwan</a></li><li class="py-1 hover:font-semibold"><a href="#SandrineNivetAbdoun">Sandrine Nivet-Abdoun</a></li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="relative px-3 tracking-wide text-black transition duration-300 ease-in-out cursor-pointer decoration-pink-cabinet decoration-2 hover:translate-x-2 hover:underline hover:underline-offset-4"><a href="#expertise">Expertise</a></li><li class="relative px-3 tracking-wide text-black transition duration-300 ease-in-out cursor-pointer decoration-pink-cabinet decoration-2 hover:translate-x-2 hover:underline hover:underline-offset-4"><a href="#contact">Contact</a></li></ul></div></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroPalaisComponent.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const HeroPalaisComponent = _sfc_main$8;
const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "min-h-full pb-28",
    id: "expertise"
  }, _attrs))}><h2 class="sticky top-0 z-30 py-4 text-xl font-medium tracking-wider text-center uppercase bg-gray-300/50 backdrop-blur-xs"> Expertise </h2><div class="relative items-center justify-between h-full my-8 lg:flex lg:flex-row lg:items-start lg:px-6"><div class="w-full lg:sticky lg:top-20 lg:my-36 lg:w-1/2">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    sizes: "sm:95vw md:50vw lg:95vw",
    src: "/GROUPE.JPG",
    alt: "Equipe Pantaloni & associ\xE9s",
    class: "mx-auto rounded-md shadow-lg shadow-sky-800/60 md:rounded-xl"
  }, null, _parent));
  _push(`</div><div class="w-full px-4 py-4 text-gray-800 lg:w-1/2 lg:px-8"><div class="w-1/4 mx-auto my-8 border-t border-pink-cabinet"></div><p class="py-2 mx-auto text-xl tracking-wide text-justify indent-8"> Depuis sa constitution, le Cabinet <span class="font-semibold text-pink-cabinet"> PANTALONI &amp; ASSOCIES </span> propose \xE0 ses clients un accompagnement <span class="font-semibold underline decoration-pink-cabinet decoration-2 underline-offset-2">sur mesure</span> dans ses domaines d\u2019interventions. </p><p class="py-2 mx-auto text-xl tracking-wide text-justify indent-8"> Le Cabinet dispose d\u2019une comp\xE9tence reconnue en <span class="font-semibold underline decoration-pink-cabinet decoration-2 underline-offset-2">mati\xE8re p\xE9nale</span>, en <span class="font-semibold underline decoration-pink-cabinet decoration-2 underline-offset-2">Droit de la construction</span>, en <span class="font-semibold underline decoration-pink-cabinet decoration-2 underline-offset-2">Droit de la responsabilit\xE9</span> et en <span class="font-semibold underline decoration-pink-cabinet decoration-2 underline-offset-2">Droit des assurances</span>. </p><div class="py-6 mx-auto"><ul class="space-y-4 text-xl tracking-wide list-disc list-inside"><li class="font-semibold underline decoration-pink-cabinet decoration-2 underline-offset-2"> Droit de la responsabilit\xE9 civile </li><p class="mx-auto text-xl tracking-wide text-justify indent-8"> Le Cabinet <span class="font-semibold text-pink-cabinet">PANTALONI &amp; ASSOCIES</span> intervient en <span class="font-semibold"> droit de la responsabilit\xE9 civile des officiers minist\xE9riels</span>, des <span class="font-semibold">agents immobiliers</span> et des <span class="font-semibold">experts judiciaires</span>. </p><p class="mx-auto text-xl tracking-wide text-justify indent-8"> Par ailleurs, il a d\xE9velopp\xE9 une activit\xE9 en mati\xE8re d\u2019<span class="font-semibold">accidents de la circulation</span> (en application de la Loi Badinter de 1985), ou encore dans le cadre d\u2019<span class="font-semibold">expertises judiciaires</span>, en cas de sinistre de d\xE9g\xE2t des eaux, de d\xE9sordre, ou de malfa\xE7on. </p><li class="font-semibold underline decoration-pink-cabinet decoration-2 underline-offset-2"> Droit de la construction </li><p class="mx-auto text-xl tracking-wide text-justify indent-8"> Le Cabinet <span class="font-semibold text-pink-cabinet">PANTALONI &amp; ASSOCIES</span> assiste ses clients dans le traitement de l\u2019ensemble des difficult\xE9s survenues en cours de <span class="font-semibold">chantier</span> (sinistre, abandon de chantier, d\xE9sordres, malfa\xE7ons, non-conformit\xE9, litige entreprise, sous-traitant). </p><p class="mx-auto text-xl tracking-wide text-justify indent-8"> Il assure dans ce cadre le suivi des expertises judiciaires et du contentieux jusqu\u2019au stade de l\u2019ex\xE9cution. </p><li class="font-semibold underline decoration-pink-cabinet decoration-2 underline-offset-2"> Droit p\xE9nal </li><p class="mx-auto text-xl tracking-wide text-justify indent-8"> Outre le <span class="font-semibold">droit p\xE9nal g\xE9n\xE9ral</span>, le Cabinet <span class="font-semibold text-pink-cabinet">PANTALONI &amp; ASSOCIES</span> intervient en mati\xE8re de <span class="font-semibold">droit p\xE9nal \xE9conomique et des affaires</span>, ainsi qu\u2019en <span class="font-semibold">droit p\xE9nal du travail</span>. </p><p class="mx-auto text-xl tracking-wide text-justify indent-8"> Ce faisant, il assiste tant les entreprises que les particuliers, qu\u2019ils soient <span class="font-semibold">pr\xE9venus</span> ou <span class="font-semibold">parties civiles</span>, \xE0 tous les stades de la proc\xE9dure. </p><li class="font-semibold underline decoration-pink-cabinet decoration-2 underline-offset-2"> Droit des assurances </li><p class="mx-auto text-xl tracking-wide text-justify indent-8"> Le Cabinet <span class="font-semibold text-pink-cabinet">PANTALONI &amp; ASSOCIES</span> intervient dans la gestion des litiges susceptibles de na\xEEtre d\u2019un <span class="font-semibold">contrat d\u2019assurance</span> (assurance responsabilit\xE9, assurance construction, assurance voiture). </p><p class="mx-auto text-xl tracking-wide text-justify indent-8"> Il met en jeu les <span class="font-semibold">garanties l\xE9gales</span>: garantie de parfait ach\xE8vement, garantie d\xE9cennale, garantie biennale ainsi que les <span class="font-semibold">responsabilit\xE9s de droit commun</span>: contractuelle et d\xE9lictuelle outre les responsabilit\xE9s sp\xE9cifiques (fabricant, vendeur, fournisseur). </p></ul></div><div class="w-1/4 mx-auto my-8 border-t border-pink-cabinet"></div></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExpertiseComponent.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ExpertiseComponent = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "min-h-full",
    id: "cabinet"
  }, _attrs))}><h2 class="sticky top-0 z-30 py-4 text-xl font-medium tracking-wider text-center uppercase bg-gray-300/50 backdrop-blur-xs"> Le cabinet </h2><div class="items-center justify-between py-8 mt-4 lg:flex lg:px-6"><div class="relative w-full mx-auto lg:w-1/2">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    placeholder: [50, 25, 75, 5],
    sizes: "sm:95vw md:50vw lg:95vw",
    src: "/cabinet.JPG",
    alt: " Cabinet PANTALONI & ASSOCIES",
    class: "mx-auto rounded-sm shadow shadow-gray-500 md:rounded"
  }, null, _parent));
  _push(`</div><div class="w-full px-4 py-4 lg:w-1/2 lg:px-8"><div class="w-1/4 mx-auto my-8 border-t border-pink-cabinet"></div><p class="py-2 mx-auto text-xl tracking-wide text-justify indent-8"> Situ\xE9 en plein c\u0153ur du 17\xE8me arrondissement de Paris, entre le Nouveau Palais de Justice et l\u2019Arc de Triomphe, le Cabinet <span class="font-bold text-pink-cabinet"> PANTALONI &amp; ASSOCIES </span> conseille et assure la d\xE9fense d\u2019une client\xE8le constitu\xE9e d\u2019Institutionnels, de grandes soci\xE9t\xE9s, moyennes et petites entreprises ainsi que de particuliers. </p><p class="py-2 mx-auto text-xl tracking-wide text-justify indent-8"> De taille humaine, croisant les comp\xE9tences, le Cabinet assure un service personnalis\xE9 \xE0 ses clients qu\u2019il conseille et accompagne en demande comme en d\xE9fense dans le <span class="font-semibold underline decoration-pink-cabinet decoration-2 underline-offset-2">respect des r\xE8gles professionnelles </span> et notamment de <span class="font-semibold underline decoration-pink-cabinet decoration-2 underline-offset-2">confidentialit\xE9</span>. </p><p class="py-2 mx-auto text-xl tracking-wide text-justify indent-8"> Le Cabinet favorise <span class="font-semibold underline decoration-pink-cabinet decoration-2 underline-offset-2">la r\xE9activit\xE9</span>, <span class="font-semibold underline decoration-pink-cabinet decoration-2 underline-offset-2">l\u2019\xE9coute </span> et la disponibilit\xE9 afin de r\xE9pondre \xE0 l\u2019ensemble des souhaits et des pr\xE9occupations de ses clients. </p><div class="w-1/4 mx-auto my-8 border-t border-pink-cabinet"></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CabinetComponent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const CabinetComponent = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "h-auto py-20",
    id: "MarcPantaloni"
  }, _attrs))}><h2 class="py-2 mb-4 text-4xl font-normal text-center text-gray-800 lg:text-5xl"> Marc Pantaloni </h2><div class="w-1/4 mx-auto my-8 border-t border-pink-cabinet"></div><div class="lg:flex lg:items-center lg:justify-between"><div class="w-full lg:w-1/2">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    sizes: "sm:95vw md:50vw lg:400px",
    src: "/MARC_PANTALONI.JPG",
    alt: "Marc Pantaloni",
    class: "mx-auto shadow-lg rounded-xl shadow-sky-800/60"
  }, null, _parent));
  _push(`</div><div class="flex flex-col justify-between w-full px-4 py-4 mt-4 text-gray-800 lg:mt-0 lg:w-1/2 lg:pr-12"><ul class="px-2 pt-2 mb-5 space-y-4 text-xl italic font-medium tracking-wide text-justify list-disc list-inside"><li class="not-italic"> Inscrit au Barreau de Paris depuis janvier 1983 </li><li> Ancien Secr\xE9taire de la Conf\xE9rence au Barreau de Paris (1986/1987) </li><li>Ancien charg\xE9 d\u2019enseignement \xE0 l\u2019Universit\xE9 Paris XI</li><li>DEA droit des affaires (Universit\xE9 Panth\xE9on-Assas Paris II)</li></ul><div class="w-full h-full px-2 space-y-4 text-xl font-medium tracking-wide text-justify text-gray-800"><p class="indent-8"> Associ\xE9 au sein du Cabinet RONSSERAY TOURNOIS &amp; ASSOCIES, puis membre fondateur du Cabinet SELNET PANTALONI FISCHER, <span class="font-bold text-pink-cabinet">Marc PANTALONI</span> a constitu\xE9 une \xE9quipe d\xE9di\xE9e au service de clients auxquels sont apport\xE9s tant la formation \xE0 raison de s\xE9minaires d\xE9di\xE9s que le conseil, l\u2019assistance pr\xE9-contentieuse et contentieuse qui leur est n\xE9cessaire. </p><p class="indent-8"> En mati\xE8re p\xE9nale, Marc PANTALONI est intervenu et intervient dans de nombreux dossiers \xE0 forts enjeux tant en droit p\xE9nal des affaires et financiers qu\u2019en droit p\xE9nal g\xE9n\xE9ral et du travail. </p><p class="indent-8"> Son activit\xE9 se d\xE9ploie en outre dans les domaines de la construction et de l\u2019immobilier o\xF9 il intervient aux c\xF4t\xE9s d\u2019entreprises de BTP ou de leurs assureurs. </p><p class="indent-8"> Enfin, il assure dans le cadre de leurs responsabilit\xE9s civiles professionnelles et/ou contractuelles la d\xE9fense d\u2019agents immobiliers et des professionnels du droit, notamment notaires, experts judiciaires\u2026 </p></div><div class="w-1/4 mx-auto my-8 border-t border-pink-cabinet"></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MarcComponent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const MarcComponent = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "h-auto py-20",
    id: "MagaliGreiner"
  }, _attrs))}><h2 class="py-2 mb-4 text-4xl font-normal text-center text-gray-800 lg:text-5xl"> Magali Greiner </h2><div class="w-1/4 mx-auto my-8 border-t border-pink-cabinet"></div><div class="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between"><div class="w-full lg:w-1/2">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    sizes: "sm:95vw md:50vw lg:400px",
    src: "/MAGALI_GREINER.JPG",
    alt: "Magali GREINER",
    class: "mx-auto shadow-lg rounded-xl shadow-sky-800/60"
  }, null, _parent));
  _push(`</div><div class="flex flex-col justify-between w-full px-4 py-4 mt-4 text-gray-800 lg:mt-0 lg:w-1/2 lg:pl-12"><ul class="px-2 pt-2 mb-5 space-y-4 text-xl italic font-medium tracking-wide text-justify list-disc list-inside"><li class="not-italic"> Inscrit au Barreau de Paris depuis janvier 2014 </li><li> Master Droit des Affaires, Droit de l\u2019innovation, de la communication et de la Culture (Universit\xE9 de Sceaux) </li></ul><div class="w-full h-full px-2 space-y-4 text-xl font-medium tracking-wide text-justify text-gray-800"><p class="indent-8"><span class="font-bold text-pink-cabinet">Magali GREINER</span>, sp\xE9cialis\xE9e en propri\xE9t\xE9 intellectuelle et nouvelles technologies, dispose aujourd\u2019hui d\u2019une expertise particuli\xE8re en droit des marques, dessins et mod\xE8les et en droit d\u2019auteur. </p><p class="indent-8"> Du fait de sa collaboration avec des cabinets sp\xE9cialis\xE9s en droit des affaires et des personnes, Magali GREINER a pu d\xE9velopper un savoir-faire particulier en droit de la responsabilit\xE9 civile des professionnels du droit, en droit p\xE9nal, en droit du travail, et en mati\xE8re de r\xE9paration du dommage corporel. </p><p class="indent-8"> Egalement, soucieuse et impliqu\xE9e dans la promotion du bien-\xEAtre animal, Magali GREINER est membre de la Commission Droit de l\u2019Animal du Barreau de Paris, et de l\u2019association Avocats &amp; Droits de l\u2019Animal. </p><p class="indent-8"> Enfin, Magali GREINER pr\xE9conise le recours \xE0 des modes alternatifs de r\xE9solution des litiges (n\xE9gociation, m\xE9diation, conciliation) avant d\u2019envisager un traitement judiciaire des dossiers. </p></div><div class="w-1/4 mx-auto my-8 border-t border-pink-cabinet"></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MagaliComponent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const MagaliComponent = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "h-auto py-20",
    id: "GhinwaRachwan"
  }, _attrs))}><h2 class="py-2 mb-4 text-4xl font-normal text-center text-gray-800 lg:text-5xl"> Ghinwa Rachwan </h2><div class="w-1/4 mx-auto my-8 border-t border-pink-cabinet"></div><div class="lg:flex lg:items-center lg:justify-between"><div class="w-full lg:w-1/2">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    sizes: "sm:95vw md:50vw lg:400px",
    src: "/GHINWA_RACHWAN.jpg",
    alt: "Ghinwa Rachwan",
    class: "mx-auto shadow-lg rounded-xl shadow-sky-800/60"
  }, null, _parent));
  _push(`</div><div class="flex flex-col justify-between w-full px-4 py-4 mt-4 text-gray-800 lg:mt-0 lg:w-1/2 lg:pr-12"><ul class="px-2 pt-2 mb-5 space-y-4 text-xl italic font-medium tracking-wide text-justify list-disc list-inside"><li class="not-italic"> Inscrit au Barreau de Paris (depuis 2019) et de Beyrouth (depuis 2010) </li><li>LLM droit des affaires (Universit\xE9 Panth\xE9on-Assas Paris II)</li></ul><div class="w-full h-full px-2 space-y-4 text-xl font-medium tracking-wide text-justify text-gray-800"><p class="indent-8"><span class="font-bold text-pink-cabinet">Ghinwa RACHWAN</span> a exerc\xE9 au sein d&#39;un cabinet \xE0 vis\xE9e internationale dans les domaines du Droit des Affaires, Assurances, Construction et Arbitrage international. </p><p class="indent-8"> Elle a rejoint le cabinet PANTALONI &amp; ASSOCIES en avril 2021. </p><p class="indent-8"> Elle intervient principalement pour le compte de soci\xE9t\xE9s d&#39;assurances et pour les acteurs en Droit de la Construction au titre de la garantie d\xE9cennale et de la responsabilit\xE9 civile professionnelle ainsi que pour des accidents survenus en cours de chantier ou en cas d&#39;interruptions de travaux, de malfa\xE7on ou de non-conformit\xE9. </p><p class="indent-8"> Aujourd&#39;hui, elle a d\xE9velopp\xE9 une vaste exp\xE9rience dans le domaine des assurances et de la construction. </p><p class="indent-8"> Elle intervient \xE9galement pour le compte des soci\xE9t\xE9s \xE9trang\xE8res bas\xE9es notamment en Europe ou au Moyen-Orient pour la gestion de leurs int\xE9r\xEAts en France. </p><p class="indent-8"> Elle parle couramment le fran\xE7ais, l&#39;anglais, l&#39;arabe et l&#39;italien. </p></div><div class="w-1/4 mx-auto my-8 border-t border-pink-cabinet"></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GhinwaComponent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const GhinwaComponent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "h-auto py-20",
    id: "SandrineNivetAbdoun"
  }, _attrs))}><h2 class="py-2 mb-4 text-4xl font-normal text-center text-gray-800 lg:text-5xl"> Sandrine Nivet-Abdoun </h2><div class="w-1/4 mx-auto my-8 border-t border-pink-cabinet"></div><div class="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between"><div class="w-full lg:w-1/2">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    sizes: "sm:95vw md:50vw lg:400px",
    src: "/SANDRINE_NIVET_ABDOUN.JPG",
    alt: "Sandrine Nivet-Abdoun",
    class: "mx-auto shadow-lg rounded-xl shadow-sky-800/60"
  }, null, _parent));
  _push(`</div><div class="flex flex-col justify-between w-full px-4 py-4 mt-4 text-gray-800 lg:mt-0 lg:w-1/2 lg:pl-12"><ul class="px-2 pt-2 mb-5 space-y-4 text-xl italic font-medium tracking-wide text-justify list-disc list-inside"><li> Titulaire d\u2019un MASTER 2 Recherche, Sciences Sociales de la Justice, apr\xE8s un MASTER 1 de Droit des Affaires (Mention Justice et Proc\xE8s). </li></ul><div class="w-full h-full px-2 space-y-4 text-xl font-medium tracking-wide text-justify text-gray-800"><p class="indent-8"> Juriste confirm\xE9e, <span class="font-bold text-pink-cabinet">Sandrine NIVET-ABDOUN</span> a rejoint le Cabinet d\xE8s sa constitution. </p><p class="indent-8"> Elle assure une fonction de support et de coordination tant \xE0 l\u2019\xE9gard des clients qu\u2019aupr\xE8s des juridictions. </p><p class="indent-8"> Elle est en outre en charge du bon suivi de l\u2019ex\xE9cution de l\u2019ensemble des d\xE9cisions judiciaires rendues. </p></div><div class="w-1/4 mx-auto my-8 border-t border-pink-cabinet"></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SandrineComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SandrineComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "EquipeComponent",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-full",
        id: "equipe"
      }, _attrs))}><h2 class="sticky top-0 z-30 py-4 text-xl font-medium tracking-wider text-center uppercase bg-gray-300/50 backdrop-blur-xs"> L&#39;\xE9quipe </h2>`);
      _push(ssrRenderComponent(MarcComponent, null, null, _parent));
      _push(ssrRenderComponent(MagaliComponent, null, null, _parent));
      _push(ssrRenderComponent(GhinwaComponent, null, null, _parent));
      _push(ssrRenderComponent(SandrineComponent, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EquipeComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const EquipeComponent = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen bg-gray-100 scroll-smooth font-cormorant" }, _attrs))}>`);
      _push(ssrRenderComponent(HeroPalaisComponent, null, null, _parent));
      _push(ssrRenderComponent(CabinetComponent, null, null, _parent));
      _push(ssrRenderComponent(EquipeComponent, null, null, _parent));
      _push(ssrRenderComponent(ExpertiseComponent, null, null, _parent));
      _push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4b5563" fill-opacity="1" d="M0,288L120,266.7C240,245,480,203,720,192C960,181,1200,203,1320,213.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>`);
      _push(ssrRenderComponent(ContactComponent, null, null, _parent));
      _push(ssrRenderComponent(FooterComponent, null, null, _parent));
      _push(ssrRenderComponent(VisibleComponent, { "when-hidden": "#herotop" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed bottom-0 right-0 z-40 mb-16 mr-6"${_scopeId}><div class="p-2 bg-gray-400 border border-white rounded-full opacity-75 hover:opacity-100"${_scopeId}>`);
            _push2(ssrRenderComponent(ScrollLinkComponent, {
              href: "#herotop",
              class: "text-gray-800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "w-6 h-6",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "fixed bottom-0 right-0 z-40 mb-16 mr-6" }, [
                createVNode("div", { class: "p-2 bg-gray-400 border border-white rounded-full opacity-75 hover:opacity-100" }, [
                  createVNode(ScrollLinkComponent, {
                    href: "#herotop",
                    class: "text-gray-800"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "w-6 h-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                        })
                      ]))
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
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
//# sourceMappingURL=index-cSCXZqph.mjs.map

import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: 'html{background-color:#030712;background-image:url("/background2.webp");font-family:"Roboto Light", sans-serif !important;font-weight:400;font-style:normal;overflow-x:hidden}',
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<slot></slot>\\n\\n<style lang=\\"postcss\\">\\n  :global(html) {\\n    background-color: #030712;\\n    background-image: url(\\"/background2.webp\\");\\n    font-family: \\"Roboto Light\\", sans-serif !important;\\n    font-weight: 400;\\n    font-style: normal;\\n    overflow-x: hidden;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAGU,IAAM,CACZ,gBAAgB,CAAE,OAAO,CACzB,gBAAgB,CAAE,wBAAwB,CAC1C,WAAW,CAAE,cAAc,CAAC,CAAC,UAAU,CAAC,UAAU,CAClD,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,MACd"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};

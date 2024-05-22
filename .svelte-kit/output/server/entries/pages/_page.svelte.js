import { c as create_ssr_component, e as escape, d as each, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import _ from "lodash";
const css$1 = {
  code: '.profile-image.svelte-13aknoq{background-image:url("/portrait.webp");background-size:cover;background-position:50% calc(50% + 2rem);background-repeat:no-repeat}@media(max-width: 1024px){.profile-image.svelte-13aknoq{position:relative;overflow:hidden;min-width:100%;height:80vw}}@media(min-width: 1025px){.profile-image.svelte-13aknoq{position:relative;overflow:hidden;height:calc(100% + 6rem)}}',
  map: '{"version":3,"file":"Image.svelte","sources":["Image.svelte"],"sourcesContent":["<script lang=\\"ts\\">import \\"../app.css\\";\\nexport let data;\\nconst handleObfuscatedLink = (e, href) => {\\n  e.preventDefault();\\n  const link = document.createElement(\\"a\\");\\n  link.href = atob(href);\\n  document.body.append(link);\\n  link.click();\\n  document.removeChild(link);\\n};\\n<\/script>\\n\\n<div\\n  class=\\"profile-image shadow-2xl shadow-black scale-[1.080] lg:-translate-x-12 lg:-translate-y-12\\"\\n>\\n  <div\\n    class=\\"absolute bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black w-full text-white flex flex-col justify-end pb-4\\"\\n  >\\n    <div class=\\"flex justify-center align-middle\\">\\n      <h1>{data.basicInfo.name}</h1>\\n    </div>\\n    <div class=\\"flex justify-center align-middle text-cyan-400\\">\\n      {data.basicInfo.title}\\n    </div>\\n    <div class=\\"flex justify-center align-middle mt-4 gap-4\\">\\n      {#each data.basicInfo.links as linkItem}\\n        {#if [\\"Email\\", \\"Phone\\"].includes(linkItem.name)}\\n          <a\\n            href=\\"/#\\"\\n            rel=\\"nofollow, noindex\\"\\n            on:click={(e) => handleObfuscatedLink(e, linkItem.href)}\\n            class=\\"w-8 h-8 box-border hover:scale-125 transform transition duration-300\\"\\n          >\\n            <img src=\\"/{linkItem.icon}\\" alt={linkItem.name} class=\\"w-8 h-8\\" />\\n          </a>\\n        {:else}\\n          <a\\n            href={linkItem.href}\\n            class=\\"w-8 h-8 box-border hover:scale-125 transform transition duration-300\\"\\n          >\\n            <img src=\\"/{linkItem.icon}\\" alt={linkItem.name} class=\\"w-8 h-8\\" />\\n          </a>\\n        {/if}\\n      {/each}\\n    </div>\\n  </div>\\n</div>\\n\\n<style lang=\\"postcss\\">\\n  .profile-image {\\n    background-image: url(\\"/portrait.webp\\");\\n    background-size: cover;\\n    background-position: 50% calc(50% + 2rem);\\n    background-repeat: no-repeat;\\n  }\\n\\n  @media (max-width: 1024px) {\\n    .profile-image {\\n      position: relative;\\n      overflow: hidden;\\n      min-width: 100%;\\n      height: 80vw;\\n    }\\n  }\\n\\n  @media (min-width: 1025px) {\\n    .profile-image {\\n      position: relative;\\n      overflow: hidden;\\n      height: calc(100% + 6rem);\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAiDE,6BAAe,CACb,gBAAgB,CAAE,qBAAqB,CACvC,eAAe,CAAE,KAAK,CACtB,mBAAmB,CAAE,GAAG,CAAC,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CACzC,iBAAiB,CAAE,SACrB,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,6BAAe,CACb,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,MAAM,CAChB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IACV,CACF,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,6BAAe,CACb,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,MAAM,CAChB,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAC1B,CACF"}'
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<div class="profile-image shadow-2xl shadow-black scale-[1.080] lg:-translate-x-12 lg:-translate-y-12 svelte-13aknoq"><div class="absolute bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black w-full text-white flex flex-col justify-end pb-4"><div class="flex justify-center align-middle"><h1>${escape(data.basicInfo.name)}</h1></div> <div class="flex justify-center align-middle text-cyan-400">${escape(data.basicInfo.title)}</div> <div class="flex justify-center align-middle mt-4 gap-4">${each(data.basicInfo.links, (linkItem) => {
    return `${["Email", "Phone"].includes(linkItem.name) ? `<a href="/#" rel="nofollow, noindex" class="w-8 h-8 box-border hover:scale-125 transform transition duration-300"><img src="${"/" + escape(linkItem.icon, true)}"${add_attribute("alt", linkItem.name, 0)} class="w-8 h-8"> </a>` : `<a${add_attribute("href", linkItem.href, 0)} class="w-8 h-8 box-border hover:scale-125 transform transition duration-300"><img src="${"/" + escape(linkItem.icon, true)}"${add_attribute("alt", linkItem.name, 0)} class="w-8 h-8"> </a>`}`;
  })}</div></div> </div>`;
});
const HeadSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex justify-center"><div class="flex flex-col lg:flex-row bg-zinc-900 m-4 lg:p-8 lg:m-8 max-w-6xl shadow-2xl shadow-black"><div class="lg:flex-1 relative">${validate_component(Image, "Image").$$render($$result, { data }, {}, {})}</div> <div class="text-white mt-8 lg:mt-0 lg:w-1/2 pl-8 pr-8 pb-8"><h1>${escape(data.title)}</h1> <div class="flex mt-1">${each(data.subtitles, (titleItem, index) => {
    return `<div class="text-cyan-400 text-sm">${escape(titleItem)}</div> ${index !== data.subtitles.length - 1 ? `<div class="subtitle-divider text-gray-300 pl-2 pr-2" data-svelte-h="svelte-vfhwpj">/</div>` : ``}`;
  })}</div> ${each(data.introText, (introTextP) => {
    return `<p class="mt-8 text-justify">${escape(introTextP)} </p>`;
  })}</div></div></div>`;
});
const ResumeSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="flex justify-center"><div class="flex flex-col lg:flex-row bg-zinc-900 m-4 lg:p-8 lg:m-8 max-w-6xl w-full shadow-2xl shadow-black"><div class="main-block lg:mt-0 p-8 flex-1"><h1 class="mb-8">${escape(title)}</h1> <div class="flex mt-4 flex-col gap-8 text-white">${slots.default ? slots.default({}) : ``}</div></div></div></div>`;
});
const css = {
  code: ".half.svelte-9f2lrz{overflow:hidden;width:0.5rem;display:inline-block}",
  map: '{"version":3,"file":"TechInfoPopup.svelte","sources":["TechInfoPopup.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let context;\\nexport let techItem;\\n$:\\n  techItemPopupBoxRect = context?.getBoundingClientRect();\\n$:\\n  techItemOffsetTop = context?.offsetTop ?? 0;\\n$:\\n  techItemOffsetLeft = context?.offsetLeft ?? 0;\\n<\/script>\\n\\n<div\\n  class:hidden={!techItem}\\n  style=\\"bottom: calc({-techItemOffsetTop}px + 100% + 0.5rem)\\"\\n  class=\\"absolute bg-zinc-900 bg-opacity-95 z-10 text-cyan-400 font-bold border-dotted border-zinc-500 border-2 p-8 pt-5 text-center rounded min-h-32 flex flex-col w-full\\"\\n>\\n  <h1 class=\\"text-white font-bold\\">{techItem?.title}</h1>\\n  <div class=\\"uppercase text-white mb-4\\">\\n    Skill Level <div class=\\"text-yellow-300 inline-flex\\">\\n      {#each new Array(Math.ceil(techItem?.level ?? 0))\\n        .fill(\\"\\")\\n        .map(() => \\"★\\") as star, index}\\n        <span class:half={index + 1 > (techItem?.level ?? 0)}>{star}</span>\\n      {/each}\\n    </div>\\n  </div>\\n  <p>{techItem?.description}</p>\\n  <div\\n    style=\\"left: calc({techItemOffsetLeft}px - 0.5rem + {(techItemPopupBoxRect?.width ??\\n      0) / 2}px - 1rem);\\"\\n    class=\\"absolute nozzle bg-zinc-900 bg-opacity-95 border-dotted border-zinc-500 border-2 w-4 h-4 rotate-45 border-t-0 border-l-0 -bottom-3 mb-[2px]\\"\\n  ></div>\\n  <button\\n    class=\\"absolute top-1 left-full w-8 h-8 -ml-9 text-white\\"\\n    on:click={() => {\\n      techItem = undefined;\\n    }}>x</button\\n  >\\n</div>\\n\\n<style lang=\\"postcss\\">\\n  .half {\\n    overflow: hidden;\\n    width: 0.5rem;\\n    display: inline-block;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAwCE,mBAAM,CACJ,QAAQ,CAAE,MAAM,CAChB,KAAK,CAAE,MAAM,CACb,OAAO,CAAE,YACX"}'
};
const TechInfoPopup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let techItemPopupBoxRect;
  let techItemOffsetTop;
  let techItemOffsetLeft;
  let { context } = $$props;
  let { techItem } = $$props;
  if ($$props.context === void 0 && $$bindings.context && context !== void 0)
    $$bindings.context(context);
  if ($$props.techItem === void 0 && $$bindings.techItem && techItem !== void 0)
    $$bindings.techItem(techItem);
  $$result.css.add(css);
  techItemPopupBoxRect = context?.getBoundingClientRect();
  techItemOffsetTop = context?.offsetTop ?? 0;
  techItemOffsetLeft = context?.offsetLeft ?? 0;
  return `<div style="${"bottom: calc(" + escape(-techItemOffsetTop, true) + "px + 100% + 0.5rem)"}" class="${[
    "absolute bg-zinc-900 bg-opacity-95 z-10 text-cyan-400 font-bold border-dotted border-zinc-500 border-2 p-8 pt-5 text-center rounded min-h-32 flex flex-col w-full",
    !techItem ? "hidden" : ""
  ].join(" ").trim()}"><h1 class="text-white font-bold">${escape(techItem?.title)}</h1> <div class="uppercase text-white mb-4">Skill Level <div class="text-yellow-300 inline-flex">${each(new Array(Math.ceil(techItem?.level ?? 0)).fill("").map(() => "★"), (star, index) => {
    return `<span class="${["svelte-9f2lrz", index + 1 > (techItem?.level ?? 0) ? "half" : ""].join(" ").trim()}">${escape(star)}</span>`;
  })}</div></div> <p>${escape(techItem?.description)}</p> <div style="${"left: calc(" + escape(techItemOffsetLeft, true) + "px - 0.5rem + " + escape((techItemPopupBoxRect?.width ?? 0) / 2, true) + "px - 1rem);"}" class="absolute nozzle bg-zinc-900 bg-opacity-95 border-dotted border-zinc-500 border-2 w-4 h-4 rotate-45 border-t-0 border-l-0 -bottom-3 mb-[2px]"></div> <button class="absolute top-1 left-full w-8 h-8 -ml-9 text-white" data-svelte-h="svelte-zm4vzx">x</button> </div>`;
});
const TechExperience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredTechItems;
  let { filterText = "" } = $$props;
  let { data } = $$props;
  let techItemSelected;
  let selectedDomElement;
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  filteredTechItems = _.sortBy(data.techExperience, ["title"]).map((i) => {
    return {
      ...i,
      isVisible: !filterText.trim() || i.title.toLowerCase().includes(filterText.toLowerCase())
    };
  });
  return `${validate_component(ResumeSection, "ResumeSection").$$render($$result, { title: "Tech experience" }, {}, {
    default: () => {
      return `<div class="relative"><div class="relative flex"><img src="/funnel.svg" alt="icon for filtering" class="w-6 h-6 absolute top-2 left-2"> <input type="text" placeholder="Filter tech experience..." class="rounded p-2 pl-10 text-white w-full bg-zinc-600"${add_attribute("value", filterText, 0)}></div> <div class="flex gap-6 gap-y-0 justify-center mt-8 flex-wrap relative">${validate_component(TechInfoPopup, "TechInfoPopup").$$render(
        $$result,
        {
          techItem: techItemSelected,
          context: selectedDomElement
        },
        {},
        {}
      )} ${each(filteredTechItems, (techItem) => {
        return `<button class="font-bold hover:scale-125 hover:text-cyan-400 transform transition duration-300 cursor-pointer flex items-center" style="${"font-size: " + escape((techItem.level * 5 + 5) / 17, true) + "rem; opacity: " + escape(20 * techItem.level / 100, true) + ";visibility:" + escape(techItem?.isVisible ? "visible" : "hidden", true)}">${escape(techItem.title)}</button>`;
      })}</div></div>`;
    }
  })}`;
});
const WorkExperience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(ResumeSection, "ResumeSection").$$render($$result, { title: "Work experience" }, {}, {
    default: () => {
      return `<div class="flex mt-4 flex-col gap-8">${each(data.workExperience, (experienceItem) => {
        return `<div class="flex flex-col lg:flex-row gap-8 lg:gap-16"><div class="flex flex-col text-cyan-400 min-w-40"><div class="flex gap-2 text-xl font-bold pt-2"><div class="flex">${escape(experienceItem.timeStart)}</div> <div class="text-gray-300" data-svelte-h="svelte-1mxm7y7">-</div> <div>${escape(experienceItem.timeEnd)}</div></div> <div class="text-white text-base font-bold pt-2">${escape(experienceItem.company)}</div> <div class="text-cyan-400 text-sm">${escape(experienceItem.title)}</div></div> <div class="text-white italic text-justify">${escape(experienceItem.description)}</div> </div>`;
      })}</div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(HeadSection, "HeadSection").$$render($$result, { data }, {}, {})} ${validate_component(WorkExperience, "WorkExperience").$$render($$result, { data }, {}, {})} ${validate_component(TechExperience, "TechExperience").$$render($$result, { data }, {}, {})}`;
});
export {
  Page as default
};

<script lang="ts">
  import type { PageData } from "../../.svelte-kit/types/src/routes/$types";

  type TechItemsType = PageData["techExperience"];
  export let context: HTMLElement | undefined;
  export let techItem: undefined | (TechItemsType[0] & { isVisible: boolean });
  $: techItemPopupBoxRect = context?.getBoundingClientRect();
  $: techItemOffsetTop = context?.offsetTop ?? 0;
  $: techItemOffsetLeft = context?.offsetLeft ?? 0;
</script>

<div
  class:hidden={!techItem}
  style="bottom: calc({-techItemOffsetTop}px + 100% + 0.5rem)"
  class="absolute bg-zinc-900 bg-opacity-95 z-10 text-cyan-400 font-bold border-dotted border-zinc-500 border-2 p-8 pt-5 text-center rounded min-h-32 flex flex-col w-full"
>
  <h1 class="text-white font-bold">{techItem?.title}</h1>
  <div class="uppercase text-white mb-4">
    Skill Level <div class="text-yellow-300 inline-flex">
      {#each new Array(Math.ceil(techItem?.level ?? 0))
        .fill("")
        .map(() => "★") as star, index}
        <span class:half={index + 1 > (techItem?.level ?? 0)}>{star}</span>
      {/each}
    </div>
  </div>
  <p>{techItem?.description}</p>
  <div
    style="left: calc({techItemOffsetLeft}px - 0.5rem + {(techItemPopupBoxRect?.width ??
      0) / 2}px - 1rem);"
    class="absolute nozzle bg-zinc-900 bg-opacity-95 border-dotted border-zinc-500 border-2 w-4 h-4 rotate-45 border-t-0 border-l-0 -bottom-3 mb-[2px]"
  ></div>
  <button
    class="absolute top-1 left-full w-8 h-8 -ml-9 text-white"
    on:click={() => {
      techItem = undefined;
    }}>x</button
  >
</div>

<style lang="postcss">
  .half {
    overflow: hidden;
    width: 0.5rem;
    display: inline-block;
  }
</style>

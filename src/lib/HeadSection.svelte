<script lang="ts">
  import Image from "$lib/Image.svelte";
  import type { PageData } from "../../.svelte-kit/types/src/routes/$types";

  export let data: PageData;
</script>

<div class="flex justify-center">
  <div
    class="flex flex-col lg:flex-row bg-zinc-900 m-4 lg:p-8 lg:m-8 max-w-6xl shadow-2xl shadow-black"
  >
    <div class="lg:flex-1 relative">
      <Image {data} />
    </div>
    <div class="text-white mt-8 lg:mt-0 lg:w-1/2 pl-8 pr-8 pb-8">
      <h1>{data.title}</h1>
      <div class="flex mt-1">
        {#each data.subtitles as titleItem, index}
          <div class="text-cyan-400 text-sm">{titleItem}</div>
          {#if index !== data.subtitles.length - 1}
            <div class="subtitle-divider text-gray-300 pl-2 pr-2">/</div>
          {/if}
        {/each}
      </div>
      {#each data.introText as introTextP}
        <p class="mt-8 text-justify">
          {introTextP}
        </p>
      {/each}
    </div>
  </div>
</div>

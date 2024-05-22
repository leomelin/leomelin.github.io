<script lang="ts">
  import "../app.css";
  import type { PageData } from "../../.svelte-kit/types/src/routes/$types";

  export let data: PageData;

  const handleObfuscatedLink = (e: Event, href: string) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = atob(href);
    document.body.append(link);
    link.click();
    document.removeChild(link);
  };
</script>

<div
  class="profile-image shadow-2xl shadow-black scale-[1.080] lg:-translate-x-12 lg:-translate-y-12"
>
  <div
    class="absolute bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black w-full text-white flex flex-col justify-end pb-4"
  >
    <div class="flex justify-center align-middle">
      <h1>{data.basicInfo.name}</h1>
    </div>
    <div class="flex justify-center align-middle text-cyan-400">
      {data.basicInfo.title}
    </div>
    <div class="flex justify-center align-middle mt-4 gap-4">
      {#each data.basicInfo.links as linkItem}
        {#if ["Email", "Phone"].includes(linkItem.name)}
          <a
            href="/#"
            rel="nofollow, noindex"
            on:click={(e) => handleObfuscatedLink(e, linkItem.href)}
            class="w-8 h-8 box-border hover:scale-125 transform transition duration-300"
          >
            <img src="/{linkItem.icon}" alt={linkItem.name} class="w-8 h-8" />
          </a>
        {:else}
          <a
            href={linkItem.href}
            class="w-8 h-8 box-border hover:scale-125 transform transition duration-300"
          >
            <img src="/{linkItem.icon}" alt={linkItem.name} class="w-8 h-8" />
          </a>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  .profile-image {
    background-image: url("/portrait.webp");
    background-size: cover;
    background-position: 50% calc(50% + 2rem);
    background-repeat: no-repeat;
  }

  @media (max-width: 1024px) {
    .profile-image {
      position: relative;
      overflow: hidden;
      min-width: 100%;
      height: 80vw;
    }
  }

  @media (min-width: 1025px) {
    .profile-image {
      position: relative;
      overflow: hidden;
      height: calc(100% + 6rem);
    }
  }
</style>

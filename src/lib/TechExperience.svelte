<script lang="ts">
  import ResumeSection from "$lib/ResumeSection.svelte";
  import TechInfoPopup from "$lib/TechInfoPopup.svelte";
  import type { PageData } from "../../.svelte-kit/types/src/routes/$types.js";
  import _ from "lodash";

  export let filterText: string = "";
  export let data: PageData;

  type TechItemsType = PageData["techExperience"];
  let techItemSelected: undefined | (TechItemsType[0] & { isVisible: boolean });

  let selectedDomElement: HTMLElement | undefined;

  $: filteredTechItems = _.sortBy(data.techExperience, ["title"]).map((i) => {
    return {
      ...i,
      isVisible:
        !filterText.trim() ||
        i.title.toLowerCase().includes(filterText.toLowerCase()),
    };
  });
</script>

<ResumeSection title="Tech experience">
  <div class="relative">
    <div class="relative flex">
      <img
        src="/funnel.svg"
        alt="icon for filtering"
        class="w-6 h-6 absolute top-2 left-2"
      />
      <input
        bind:value={filterText}
        type="text"
        placeholder="Filter tech experience..."
        class="rounded p-2 pl-10 text-white w-full bg-zinc-600"
      />
    </div>
    <div class="flex gap-6 gap-y-0 justify-center mt-8 flex-wrap relative">
      <TechInfoPopup techItem={techItemSelected} context={selectedDomElement}
      ></TechInfoPopup>
      {#each filteredTechItems as techItem (techItem.title)}
        <button
          on:click={(e) => {
            if (techItemSelected?.title === techItem.title) {
              techItemSelected = undefined;
            } else {
              selectedDomElement = e.currentTarget;
              techItemSelected = techItem;
            }
          }}
          class="font-bold hover:scale-125 hover:text-cyan-400 transform transition duration-300 cursor-pointer flex items-center"
          style="font-size: {(techItem.level * 5 + 5) / 17}rem; opacity: {(20 *
            techItem.level) /
            100};visibility:{techItem?.isVisible ? 'visible' : 'hidden'}"
          >{techItem.title}</button
        >
      {/each}
    </div>
  </div>
</ResumeSection>

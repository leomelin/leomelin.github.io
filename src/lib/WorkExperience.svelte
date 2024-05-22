<script lang="ts">
  import ResumeSection from "$lib/ResumeSection.svelte";
  import type { PageData } from "../../.svelte-kit/types/src/routes/$types";

  export let data: PageData;
</script>

<ResumeSection title="Work experience">
  <div class="flex mt-4 flex-col gap-8">
    {#each data.workExperience as experienceItem}
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div class="flex flex-col text-cyan-400 min-w-40">
          <div class="flex gap-2 text-xl font-bold pt-2">
            <div class="flex">{experienceItem.timeStart}</div>
            <div class="text-gray-300">-</div>
            <div>{experienceItem.timeEnd}</div>
          </div>
          <div class="text-white text-base font-bold pt-2">
            {experienceItem.company}
          </div>
          <div class="text-cyan-400 text-sm">{experienceItem.title}</div>
        </div>
        <div class="text-white italic text-justify">
          {experienceItem.description}
        </div>
      </div>
    {/each}
  </div>
</ResumeSection>

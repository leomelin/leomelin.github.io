<script lang="ts">
  import "../app.css";
  import HeadSection from "$lib/HeadSection.svelte";
  import TechExperience from "$lib/TechExperience.svelte";
  import WorkExperience from "$lib/WorkExperience.svelte";

  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<HeadSection {data}></HeadSection>

<WorkExperience {data}></WorkExperience>

<TechExperience {data}></TechExperience>

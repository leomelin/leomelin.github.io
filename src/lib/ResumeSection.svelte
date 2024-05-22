<script lang="ts">
  export let title: string;
</script>

<div class="flex justify-center">
  <div
    class="flex flex-col lg:flex-row bg-zinc-900 m-4 lg:p-8 lg:m-8 max-w-6xl w-full shadow-2xl shadow-black"
  >
    <div class="main-block lg:mt-0 p-8 flex-1">
      <h1 class="mb-8">{title}</h1>
      <div class="flex mt-4 flex-col gap-8 text-white">
        <slot></slot>
      </div>
    </div>
  </div>
</div>

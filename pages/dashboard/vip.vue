<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="max-w-4xl text-center">
      <div class="flex flex-col items-center">
        <img src="@/assets/images/vip.png" alt="" />
        <h1 class="text-6xl text-green-600 font-bold">Welcome Back VIP</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard-skeleton",
  middleware: "vip",
});
</script>

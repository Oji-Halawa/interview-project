<template>
  <div
    class="flex items-center justify-center overflow-hidden h-screen bg-gray-100"
  >
    <div class="max-w-4xl text-center">
      <div class="flex flex-col items-center">
        <img src="@/assets/images/not-vip.png" alt="" />
        <h1 class="text-6xl text-red-600 font-bold">
          FORBIDDEN YOU ARE NOT VIP!
        </h1>
        <p class="font-semibold text-4xl text-red-600">
          ONLY USERS WITH ID NUMBER 5 AND ABOVE CAN ENTER!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard-skeleton",
});
</script>

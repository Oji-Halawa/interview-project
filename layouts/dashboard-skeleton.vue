<template>
  <div class="flex flex-col h-screen">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    <main class="flex-grow bg-gray-100 p-6">
      <slot />
    </main>
  </div>
</template>

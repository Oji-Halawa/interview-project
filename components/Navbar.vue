<template>
  <header
    class="bg-blue-500 fixed right-0 left-0 top-0 text-white py-4 px-6 flex justify-between items-center"
  >
    <NuxtLink to="/" class="text-2xl font-semibold text-white"
      >Frontend Test</NuxtLink
    >
    <nav class="flex space-x-4">
      <div class="flex space-x-4">
        <button
          class="bg-white text-blue-500 px-4 py-2 rounded"
          @click="navigateToVIP"
        >
          Open VIP
        </button>
        <button
          type="button"
          class="bg-red-500 text-white px-4 py-2 rounded"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useAuthStore();

const navigateToVIP = () => {
  router.push("/dashboard/vip");
};

const logout = () => {
  const userID = useCookie<number | null>("user_id");
  const userData = useCookie<number | null>("user_data");
  userID.value = null;
  userData.value = null;
  userStore.setUserData({
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  router.push({ path: "/", force: true });
};
</script>

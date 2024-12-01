<template>
  <div class="max-w-4xl mx-auto bg-white shadow-lg mt-20 p-8 rounded-lg">
    <h1 class="text-2xl font-bold mb-4">User Details</h1>
    <div class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div class="font-semibold border rounded p-1">ID</div>
        <div class="border rounded p-1">{{ userData.id }}</div>
        <div class="font-semibold border rounded p-1">Name</div>
        <div class="border rounded p-1">{{ userData.name }}</div>
        <div class="font-semibold border rounded p-1">Username</div>
        <div class="border rounded p-1">{{ userData.username }}</div>
        <div class="font-semibold border rounded p-1">Email</div>
        <div class="border rounded p-1">{{ userData.email }}</div>
      </div>

      <div class="space-y-2">
        <div class="font-semibold bg-gray-300 p-2">Address</div>
        <div class="pl-4">
          <div class="grid grid-cols-2 gap-2">
            <div class="font-semibold border rounded p-1">Street</div>
            <div class="border rounded p-1">
              {{ userData.address.street }}
            </div>
            <div class="font-semibold border rounded p-1">Suite</div>
            <div class="border rounded p-1">{{ userData.address.suite }}</div>
            <div class="font-semibold border rounded p-1">City</div>
            <div class="border rounded p-1">{{ userData.address.city }}</div>
            <div class="font-semibold border rounded p-1">Zip Code</div>
            <div class="border rounded p-1">{{ userData.address.zipcode }}</div>
          </div>

          <div class="mt-2 pl-4">
            <div class="font-semibold bg-gray-300 p-2">Geo</div>
            <div class="grid grid-cols-2 gap-2">
              <div class="font-semibold border rounded p-1">Lat</div>
              <div class="border rounded p-1">
                {{ userData.address.geo.lat }}
              </div>
              <div class="font-semibold border rounded p-1">Lng</div>
              <div class="border rounded p-1">
                {{ userData.address.geo.lng }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="font-semibold border rounded p-1">Phone</div>
        <div class="border rounded p-1">{{ userData.phone }}</div>
        <div class="font-semibold border rounded p-1">Website</div>
        <div class="border rounded p-1">{{ userData.website }}</div>
      </div>

      <div class="space-y-2">
        <div class="font-semibold bg-gray-300 p-2">Company</div>
        <div class="pl-4">
          <div class="grid grid-cols-2 gap-2">
            <div class="font-semibold border rounded p-1">Name</div>
            <div class="border rounded p-1">{{ userData.company.name }}</div>
            <div class="font-semibold border rounded p-1">CatchPhrase</div>
            <div class="border rounded p-1">
              {{ userData.company.catchPhrase }}
            </div>
            <div class="font-semibold border rounded p-1">BS</div>
            <div class="border rounded p-1">{{ userData.company.bs }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuth";
import { storeToRefs } from "pinia";

definePageMeta({
  layout: "dashboard-skeleton",
});

const userStore = useAuthStore();
const { userData } = storeToRefs(userStore);
</script>

<style scoped>
/* Add styles for the dashboard if necessary */
</style>

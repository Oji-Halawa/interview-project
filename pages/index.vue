<template>
  <section
    class="flex flex-col items-center justify-center min-h-screen space-y-4"
  >
    <form class="w-full max-w-sm md:max-w-md" @submit.prevent="handleLogin">
      <u-input v-model="user_id" placeholder="Enter User ID" type="number" />

      <button
        :disabled="!!errorMessage"
        type="submit"
        class="px-6 py-2 w-full text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
      >
        Login
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useInputValidator } from "~/composables/useInputValidator";
import { useAuthStore } from "~/stores/useAuth";
import axios from "axios";

definePageMeta({
  layout: "default",
  middleware: "auth",
});

const router = useRouter();
const userStore = useAuthStore();

const user_id = ref<string | number>("");
const errorMessage = ref<string | null>(null);
const { validateInput } = useInputValidator();

const user = useCookie<number>("user_id");

const handleLogin = async () => {
  if (errorMessage.value) return;
  try {
    const response = await axios.get(`/api/auth/${user_id.value}`);

    user.value = response.data.user.id;
    userStore.setUserData(response.data.user);
    router.push("/dashboard");
  } catch (error: any) {
    const err = error as {
      response?: { status: number; data?: any };
      message: string;
    };
    alert(
      `Error fetching user: ${err.response?.status || "Unknown status"} - ${
        err.response?.data?.message || err.message
      }`,
    );
  }
};

watch(user_id, (newValue) => {
  errorMessage.value = validateInput(newValue as string, "number");
});
</script>

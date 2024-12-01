import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware(() => {
  const userId = useCookie<string | undefined>("user_id").value;

  if (userId) {
    // Redirect to Dashboard if already logged in
    return navigateTo("/dashboard");
  }
});

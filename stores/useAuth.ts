import { defineStore } from "pinia";
import type { UserData } from "~/types/authData";

interface AuthStateStore {
  userData: UserData;
}

export const useAuthStore = defineStore("user_data", {
  state: (): AuthStateStore => ({
    userData: {
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
    },
  }),
  persist: true,
  actions: {
    setUserData(data: UserData) {
      this.userData = data;
    },
  },
});

// stores/user.ts
import { defineStore } from "pinia";
import type { User } from "../types/user";
import axois from "axios";
const getUser = async (name: string): Promise<{ data: { data: User } }> => {
  return await axois.get("/mock/api/userinfo?user=" + name);
};
export const useUserStore = defineStore("user", {
  state: (): { user: User } => {
    return {
      user: { name: "default", age: 0 },
    };
  },
  actions: {
    update(name: string) {
      this.user.name = name;
    },
    async getInfo(name: string) {
      try {
        const userInfo = await getUser(name);
        console.log(userInfo);
        this.user = userInfo.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
});

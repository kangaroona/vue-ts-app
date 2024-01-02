import { MockMethod } from "vite-plugin-mock";
import type { User } from "../src/types/user";
const userInfo: User[] = [
  {
    name: "nina",
    age: 18,
  },
];
export default [
  {
    url: "/mock/api/userinfo",
    method: "get",
    response: () => {
      return userInfo[0];
    },
  },
] as MockMethod[];

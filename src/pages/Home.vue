<script setup lang="ts">
// import { useUserStore } from "@/store/user";
import { watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCounterStore } from "@stores/home";
import HelloWorld from "@components/HelloWorld.vue";
const route = useRoute();
const router = useRouter();
const x = ref(0);
const y = ref(0);
const state = useCounterStore();
// const state = reactive({
//   count: 0,
//   text: "hello",
// });
const handleClick = (e) => {
  x.value++;
  state.increment();
  // router.push("/login");
};
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`);
  },
);
watch(state, (newVal) => {
  console.log(newVal.count);
});
</script>

<template>
  <div>
    home
    {{ state.count }}
    <HelloWorld msg="Vite + Vue" />
    <button :value="state.text" @click="handleClick">click me</button>
    <router-link to="/Login">Login</router-link>
  </div>
</template>

<style></style>

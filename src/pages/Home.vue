<script setup lang="ts">
// import { useUserStore } from "@/store/user";
import { reactive } from "vue";
import HelloWorld from "@components/HelloWorld.vue";
const state = reactive({
  count: 0,
  text: "hello",
});
</script>

<template>
  <div>
    home
    {{ state.count }}
    <HelloWorld msg="Vite + Vue" />
    <!-- <hello-world></hello-world> -->
  </div>
</template>

<style></style>

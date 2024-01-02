<template>
  <div @click="clickHandle"> Login</div>
  <div>{{ user.name }},{{ user.age }}</div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "@stores/user";
import { onMounted } from "vue";
const store = useUserStore();
let { user } = storeToRefs(store);
function clickHandle() {
  user.value.name = "ninazhao";
}
onMounted(async (): Promise<void> => {
  await store.getInfo("nina");
});
</script>

<style scoped></style>

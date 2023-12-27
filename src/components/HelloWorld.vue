<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import axois from "axios";
defineProps({
  msg: String,
});
const getList = async () => {
  return await axois.get("/mock/api/getStatusList");
};

onMounted(async () => {
  try {
    const response = await getList();
    // 更新数据
    // console.log(response.data);
    responseData.data = response.data?.data;
    console.log(responseData);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
});
let responseData = reactive({
  data: [],
});
const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <ul>
    <li v-for="item in responseData.data" :key="item.value">
      {{ item.label }}
    </li>
  </ul>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

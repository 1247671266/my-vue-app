<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div>
    <span>pinia属性: id: {{mainStoreI.id}} name: {{name}}</span>
  </div>
</template>

<script setup lang="ts">
import {mainStore} from '@/store';
import { storeToRefs } from 'pinia';

  const mainStoreI = mainStore();
  const {id, name} = storeToRefs(mainStoreI); //结构赋值为响应式数据

  mainStoreI.$patch({ //$patch 批量简单修改
      id: 6,
      name: 'hello',
    })
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<template>
  <div class="centerall">
      <LeftMenu></LeftMenu>
      <div>
        空白区域
      </div>
  </div>
</template>

<script lang="ts">
import LeftMenu from '@/components/center/left-menu.vue'
export default defineComponent({
  components: {
      LeftMenu
  },
})
</script>

<style scoped>
.centerall{
    display: flex;
    border-bottom: #dcdfe6 solid 1px;
    flex-grow: 1;
}
</style>
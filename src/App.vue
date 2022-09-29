<template>
  <div>
      <router-view />
  </div>
</template>

<script lang="ts">
export default defineComponent({

});
</script>

<style>
.el-icon-love{
    background: url("./assets/icon/love.svg");
    background-size: cover;
    color:"currentColor"
}

.el-icon-love:before {
  content: "替";
  visibility: hidden;
}
</style>
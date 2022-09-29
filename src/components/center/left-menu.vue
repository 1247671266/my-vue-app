<template>
    <div class="left-menu">
    <el-menu
    style="min-width:210px"
    >
      <el-menu-item index="1">
          <el-icon><i-ep-magic-stick /></el-icon>发现音乐
      </el-menu-item>
      <el-menu-item index="2">
          <el-icon><i-ep-calendar /></el-icon>个性推荐
      </el-menu-item>
      <el-menu-item index="3">
          <el-icon><i-ep-film /></el-icon>视频
      </el-menu-item>
      <el-menu-item index="4">
          <el-icon><i-ep-tickets /></el-icon>朋友
      </el-menu-item>
      <el-menu-item index="5">
          <el-icon><i-ep-place /></el-icon>私人FM
      </el-menu-item>
      <el-menu-item-group title="我的音乐" style="text-align: left">
        <el-menu-item index="6">
            <el-icon><i class="el-icon-love" /></el-icon>我喜欢的音乐
        </el-menu-item>
        <el-sub-menu index="7">
            <template #title>
            <span>创建的歌单</span>
            </template>
            <el-menu-item index="7-1">歌单1</el-menu-item>
            <el-menu-item index="7-2">歌单2</el-menu-item>
            <el-menu-item index="7-3">歌单3</el-menu-item>
            <el-menu-item index="7-4">歌单4</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="8">
            <template #title>
            <span>收藏的歌单</span>
            </template>
            <el-menu-item index="8-1">歌单1</el-menu-item>
            <el-menu-item index="8-2">歌单2</el-menu-item>
        </el-sub-menu>
      </el-menu-item-group>
    </el-menu>
    </div>
</template>

<script lang="ts">
export default defineComponent({

});
</script>

<style scoped>
</style>
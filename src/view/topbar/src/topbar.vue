<template>
  <div class="topbar topbar-flex">
    <div class="topbar-logo topbar-flex">
        <el-image
            style="width: 10rem; height: 2rem"
            fit="cover"
            :src="tool.getAssetsFile(`logo.svg`)"
        />
     </div>
     <div class="topbar-icon topbar-flex">
        <el-icon style="margin-right:1rem" :size="18"><i-ep-arrowLeft /></el-icon>
        <el-icon :size="18"><i-ep-arrowRight /></el-icon>
     </div>
    <div class="topbar-search">
        <el-input style="" :prefix-icon="Search" placeholder="输入歌曲名或歌词" />
    </div>
    <div class="topbar-flex">
        <el-avatar
            :size="35"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
    </div>
    <div class="topbar-icon topbar-flex">
        <el-icon style="margin-right:3rem" :size="18"><i-ep-star /></el-icon>
        <el-icon :size="18"><i-ep-message /></el-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { Search } from '@element-plus/icons-vue'
import tool from '@/util/tool';
export default defineComponent({
    setup(){
        return{
            Search,
            tool
        }
    }
});
</script>

<style scoped>
.topbar{
    flex-wrap: nowrap;
    margin: 0;
    padding: 1rem;
    border:slategray solid 1px; 
    background: #ec4141;
    width: 1200px; 
}
.topbar-flex{
    display: flex;
    align-items:center;
}
.topbar-icon {
    margin: 0 6rem;
}    
.topbar-search{
    width: 400px;
    margin: 0 2rem;
}
:deep(.el-input__wrapper){
    border-radius: 95px;
    background-color: #FFFFFF;
    height: 2rem;
    border: 0;
    box-shadow: 0;
}
</style>
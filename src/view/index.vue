<template>
    <div class="main">
        <topbar />
        <center />
    </div>
</template>

<script lang="ts">
import topbar from "@/view/topbar/src/topbar.vue"
import center from "@/view/center/src/center.vue"
export default defineComponent({
    components:{
        topbar,
        center
    },
    setup(){
        
    }
});
</script>

<style scoped>
.main{
    display: flex;
    flex-direction: column;
}
</style>
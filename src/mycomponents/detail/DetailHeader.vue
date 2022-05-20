<template>
<div class="header">
    <div class="ico">
        <img src="@/images/return.png" @click="handleBack">
    </div>
    <slot></slot>
</div>
</template>
<script>
export default{
    methods:{
        handleBack(){
            this.$router.back()//返回上一级页面
        }
    }
}
</script>
<style lang="scss" scoped>
.header{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 2.75rem;
    line-height: 2.75rem;
    background-color:white;
    text-align: center;
}
.ico{
    position: fixed;
    left: .625rem;
    top:0px;
    height: 2.75rem;
    line-height: 2.75rem;
}
</style>
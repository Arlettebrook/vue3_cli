<template>
    <div>
        <h2>Teleport组件,传送组件的html结构到指定位置</h2>
        <button @click="isShow=true">点我弹个窗</button>
        <!-- 弹窗内容会撑开其他元素 -->
        <!-- <div class="dialog" v-if="isShow">
            <h3>我是一个弹窗</h3>
            <h4>一些内容</h4>
            <h4>一些内容</h4>
            <h4>一些内容</h4>
            <button @click="isShow=false">关闭弹窗</button>
        </div> -->

        <!-- 使用teleport传送到指定位置body、html。或指定容器 -->
        <Teleport to="#baidu">
            <div v-if="isShow" class="mask">
                <div class="dialog" >
                    <h3>我是一个弹窗</h3>
                    <h4>一些内容</h4>
                    <h4>一些内容</h4>
                    <h4>一些内容</h4>
                    <button @click="isShow=false">关闭弹窗</button>
                </div>
            </div>
        </Teleport>
    </div>
  
</template>

<script>
    import {ref} from 'vue'
    export default {
        name:'Dialog',
        setup(){
            let isShow = ref(false)

            return {isShow}
        }
    }
</script>

<style>
    .dialog{
        position:absolute;
        text-align: center;
        width: 300px;
        height:300px;
        background-color: green;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }

    .mask{
        position: absolute;
        top:0;bottom:0;left:0;right:0;
        background-color: rgba(0, 0,0,0.5);
    }
</style>
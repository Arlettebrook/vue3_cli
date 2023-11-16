<template>
    <div class="child">
      <h2>我是Child组件</h2>
      <h2>{{ sum }}</h2>
    </div>
</template>

<script>
    import {ref} from 'vue'
    export default {
        name:'Child',
        async setup(){
            let sum = ref(0)
            let p = new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve({sum})
                },2000)
            })
            console.log(p)
            return await p
        }
    }
    // 创建一个新的Promise对象  进行异步操作
    let promise = new Promise((resolve, reject) => {  
        // 异步操作，可能需要一些时间  
        setTimeout(() => {  
            // 异步操作完成，返回结果值  
            resolve('成功！');  
        }, 1000);  
        });  
        
        // 调用then方法来处理Promise的结果  
        promise.then(  
        result => {  
            console.log(result); // 输出：成功！  
        },  
        error => {  
            console.log(error); // 不会执行  
        }  
        );
</script>

<style>
    .child{
        background-color: skyblue;
        padding:10px;
    }
</style>
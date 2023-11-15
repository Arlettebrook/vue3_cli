<template>
    <!-- vue3组件中的模板结构可以没有根标签 -->
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
  </template>
  
  <script>
    import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
    export default {
      name: 'Demo',
      setup(){
        // data
        let sum = ref(0)

        // 通过组合式API形式使用生命周期钩子
        // beforeCreate和created这两个没有提供组合式API用setup()替代，就是这个函数
        // 选项式API是在组合式API的基础上实现的，用一个就行，所以选项式API优先级高
        onBeforeMount(()=>{
          console.log('---onBeforeMount---')
        })
        onMounted(()=>{
          console.log('---onMounted---')
        })
        onBeforeUpdate(()=>{
          console.log('---onBeforeUpdate---')
        })
        onUpdated(()=>{
          console.log('---onUpdated---')
        })
        onBeforeUnmount(()=>{
          console.log('---onBeforeUnmount---')
        })
        onUnmounted(()=>{
          console.log('---onUnmounted---')
        })


        // 返回一个对象，对象中的属性在模板中能够直接使用——常用
        return {
          sum,
        }
      },

      // 通过配置项的形式使用生命周期钩子，选项式API
      // #region
    //   beforeCreate(){
    //     console.log('---beforeCreate---')
    //   },
    //   created(){
    //     console.log('---create---')
    //   },
    //   beforeMount(){
    //     console.log('---beforeMout---')
    //   },
    //   mounted(){
    //     console.log('---mounted---')
    //   },
    //   beforeUpdate(){
    //     console.log('---beforeUpdate---')
    //   },
    //   updated(){
    //     console.log('---update----')
    //   },
    //   // beforeDestroy和destroy在vue3中换成了下面两个，vue3中使用用没有作用 
    //   beforeUnmount(){
    //     console.log('---beforeUnmount---')
    //   },
    //   unmounted(){
    //     console.log('---unmounted---')
    //   }
        // #endregion

    }
  </script>
  
  <style>
  
  </style>
  
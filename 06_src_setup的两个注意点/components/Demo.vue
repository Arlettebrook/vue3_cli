<template>
    <!-- vue3组件中的模板结构可以没有根标签 -->
    <h1>我是App组件</h1>
    <h2>一个人的信息</h2>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="test">测试触发一下Demo组件的hello事件</button>
    
  </template>
  
  <script>
    import {ref,reactive} from 'vue'
    export default {
      name: 'Demo',
      props:['msg','school'], //vue2中没有声明接收，不会警告，vue3会警告
    //   vue3中需要声明接收自定义事件,不然会发出警告
      emits:['hello'],//vue2中父组件绑定的自定义事件，在子组件中可以直接使用
      beforeCreate(){
        console.log('------beforeCreate------')
      },  
      setup(props,context){
        console.log('------setup------this:',this)
        console.log('------setup------props:',props)
        console.log('------setup------context:',context)
        // context身上的属性
        // 没有声明接收的props数据都会出现在attrs身上(vue2是$attrs)，vue3会有警告没有接收
        console.log('------setup------context.attrs:',context.attrs)
        // console.log('------setup------context.emit:'context.emit) //触发自定义事件
        console.log('------setup------context.slots:',context.slots) //插槽

        let person = reactive({
          name:'Jerry',
          age:33,
        })

        // 方法
        function test(){
            context.emit('hello',666)
        }
  
        // 返回一个对象，对象中的属性在模板中能够直接使用——常用
        return {
          person,
          test,
        }
  
      }
    }
  </script>
  
  <style>
  
  </style>
  
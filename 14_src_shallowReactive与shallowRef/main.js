// 引入的不在是Vue构造函数了，引入的是一个名为createApp的工厂函数
// vue3不能使用vue2的构造函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象——app(类似于vue2中的vm，但app比vm更‘轻’)
createApp(App).mount('#app')

// const app = createApp(App)
// console.log('@@@@:',app)

// // 挂载
// app.mount('#app')

// setTimeout(() => {
//     // 卸载
//     app.unmount('#app')
// },1000)



// 在Vue3中使用构造函数创建会报错

// const vm = new Vue({
//     render:h => h(App)
// })
// vm.$mount('#app')
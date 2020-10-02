import Router from 'vue-router'
import Sum from './components/Sort.vue'
import Abc from "./components/Abc.vue"
import todo from "./components/todo.vue"
import bubble from "./components/bubble.vue"
import WordCount from "./components/wordcount.vue"
import Vue from 'vue'

Vue.use(Router)
export default new Router(
  {
      
    mode: "history",
    routes : [

      {path:'/', component:Abc,name:"home"},
      {path:'/Sum', component:Sum,name:"Sum"},
      {path:'/output', component:todo,name:"todo",props: true},
      {path:'/bubble', component:bubble,name:"bubble"},
      {path:'/WordCount', component:WordCount,name:"WordCount"}


    ]
  }
)
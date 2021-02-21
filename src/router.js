import Router from 'vue-router'
import Sum from './components/Sort.vue'
//import Abc from "./components/Abc.vue"
import todo from "./components/todo.vue"
import bubble from "./components/bubble.vue"
import WordCount from "./components/wordcount.vue"
import LoginPage from "./components/loginPage.vue"
import Main from "./components/main.vue"
import EXP1 from "./components/exp1.vue"
import homepage from "./components/homepage.vue"
import Vue from 'vue'

Vue.use(Router)
export default new Router(
  {
      
    mode: "history",
    routes : [

      //{path:'/', component:Abc,name:"home"},
      {path:'/', component:LoginPage,name:"LoginPage"},
      {path:'/homepage',component:homepage,name:"homepage"},
      {path:'/Sum', component:Sum,name:"Sum"},
      {path:'/output', component:todo,name:"todo",props: true},
      {path:'/bubble', component:bubble,name:"bubble"},
      {path:'/WordCount', component:WordCount,name:"WordCount"},
      {path:'/Main', component:Main,name:"Main"},
      {path:'/EXP1', component:EXP1,name:"EXP1"},


    ]
  }
)
<template v-if="ok">


  <div id="sort">
    <ol>
    <todoItem v-for="item in groceryList"
    :todo ="item"
    :key="item.id">
    </todoItem>
  </ol>
  <button class= 'button'  v-on:click.stop="greeting">click me</button>{{message}}
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  
  <a href="http://www.google.com" >
    <button v-bind:disabled="isButtonDisabled">Click on this button to Google</button>
  </a>
  
  <p v-if="seen" style="color:red">Now you see me</p>

<form @submit.prevent="doSomething"> 
  <input type="submit">
</form>

<span v-once>This will never change {{msg}}</span>
{{fullName}}
{{firstName}}
{{lastName}}
<div v-bind:style="styleObject">
  <p v-if="awesome">I am richa </p>
  <p v-else>"oh no"</p>
</div>
<div v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</div>
<div v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</div>
<p>{{obj.foo}}</p>
<button v-on:click="obj.foo='baz'">change it</button>

<div v-bind:id="dynamicId">
  {{dynamicId}}
</div>
<p v-if="see" style="color:red;font-weight:bold;text-align:left">I am feeling uneasy in my right hand</p>
<a v-on:[eventName]="doSomething">i am ready</a>{{a}}
<a v-bind:[attributeName]="styleObject"> I am a link </a>
<div id="example">
  {{abc.split('').reverse('').join('')}}
</div>

<input v-model="myMessage">
<p>Message : {{myMessage}}</p>

<form action="/sort">
  <input v-model="a">
  <input v-model="b">
  <input type="submit">
</form>
<p> sum :{{sum()}}</p>
<p> a is :{{a}}</p>

</div>

</template>


<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Sort from './components/Sort.vue'
// import Abc from './components/Abc.vue'
import todoItem from './components/todo.vue'



export default {
  name: 'App',
  data() {
        return{
          obj :({foo:'bar'}),
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' },
      
    ],
    rawHtml : '<span style="color:red ;font-style:italic ;font-weight:bold">Hi i am happy </span>',
    isButtonDisabled: true,
    message:'richa',
    myMessage:'Hi Richa !',
    seen: true,
    abc:'richa',
    a:'',
    b:'',
    see:true,
    user:{
      name:'richa',
      password:'',
      email:'',
    },
    existentialQuestion: 'Am I truly an alligator?',
    dynamicId:"i am studying",
    msg:"I am richa Parashar",
    firstName :"Richa",
    lastName :"Parashar",
    isActive: true,
    attributeName:"style",
    url:"http://www.google.com",
    eventName:"click",
  error: true,
  styleObject:{
    color: 'blue',
    fontSize: '13px',
    fontWeight:'bold',
    
  },
  awesome:false,
   ok:false,
   loginType:"address",


    }
  },
  
  
  methods : {
   
    greeting : function(){
        this.loginType = 'username';
         },
  

    sum : function(){
      return parseInt(this.a)+parseInt(this.b);
    },
    doSomething: function(){
      this.a = this.a + 10;
      //console.log("a is " +this.a);

    },
    example: function(){
      return this.abc;
    },
    
    showdata(){
      console.log(this.user)
      return this.user
    }
  
  },
  computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  },
  classObject: function () {
    //this.error.type='fatal'
    return {
      active: this.isActive,
      'text-danger': this.error
    }
  },
  sumOf : function(){
      return this.a+this.b;
  }
},
 

    
  
  
  components: {
      todoItem,
}
      
}
</script>

<style scoped>
#sort {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active {
font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: bold;
  color:red;
  margin-top: 60px;
}
.text-danger{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-style: italic;
  color: green;
  margin-top: 60px;
}
.first-child{
margin: 0 auto;
max-width: 600px;
}

</style>

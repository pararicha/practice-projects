<template>
    <div id="app" >
       <h5> {{product}}</h5>
       <button class= 'button'  v-on:click="increment_counter">click me</button>
       <button v-on:click="decrement_counter">decrement</button>
       <button v-on:click="reset">reset</button>
       {{counter}}

    

    </div>

</template>

 <script>
 export default{
     name: 'abc',
     data(){
         return{
             product: 'socks',
             counter: 0,
         }

     },
     methods: {
         increment_counter: function(){
             console.log('i am here', this.counter++);

         },
         decrement_counter: function(){
             console.log('decrement',this.counter);
             this.counter--;
             

         },
         reset: function(){
             this.counter = 0;
         }
     }
         
}


</script>

<style scoped>
.container{
    color:red;
}
.button{
    padding:20px;

}

</style>

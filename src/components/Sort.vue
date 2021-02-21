<template>
    <div id= "sort">
  <p> Calculate Sum</p>
  <p> Input 1</p>
  <input v-model="a">
  <p> Input 2</p>
  <input v-model="b">
  <!-- <p> sum:{{Add}}</p> -->
  <br/><router-link tag="button" :to ="{name:'todo', params: { Add } }">Calculate Sum</router-link>
  
  
</div>
</template>
<script>

export default {
    name: 'Sort',
    data() {
        return{
    a: "",
    b: "",
  }},
    
    computed :{
        Add: function()
        {var output = 0;
            
           
            output= parseInt(this.a)+parseInt(this.b);
            
            if(isNaN(output)){
                return 0;
            }
            else{
                return output;
            }
        }
       

    }

    
}
</script>
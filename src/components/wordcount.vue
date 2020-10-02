<template>
    <div id= "WordCount">
  <p> Calculate Word count</p>
  <p> Input 1</p>
  <textarea class= "textbox" v-model="a"/>
  <p>Wordcount: {{Word}}</p>
  
  <!-- <p> sum:{{Add}}</p> -->
<router-link :to ="{name:'todo', params: { Word } }">Calculate Word count</router-link>
  
  
</div>
</template>
<script>

export default {
    name: 'WordCount',
    data() {
        return{
    a: "",
  }},
    
    computed :{
        Word: function()
        {  
            var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g;
            var arr = this.a.toLowerCase().split(regex);
            let forDeletion = ['the','is','on','a','to','of','that'];
            var newArr = arr.filter(item => !forDeletion.includes(item));
            var counts={};
            newArr.forEach(function(x) { counts[x] = (counts[x] || 0)+1 ; });
            counts[""]=0;
            var result = Object.keys(counts).map(function (key) { 
          
        // Using Number() to convert key to number type 
        // Using obj[key] to retrieve key value 
                return [key, counts[key]]; 
            }); 
            return result.sort(([,a],[,b]) => b-a).slice(0,10);
            
            //return Object.entries(counts).sort(([,a],[,b]) => b-a).slice(0,10);
         }
       

    }

    
}
</script>
<style> 
 .textbox{
  margin-top: 10px;
  /* transition: width 0.4s ease-in-out; */
}
.textbox:focus {
  width: 50%;
  height:200px;
}
</style>
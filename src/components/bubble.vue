<template>
    <div id= "quick">
  <p> Bubble Sort</p>
  <p> Input Array</p>
  <input v-model="originalArr"><br>
  <!-- <p> Input 2</p>
  <input v-model="b"> -->
  
  <router-link :to ="{name:'todo', params: { quick } }"><button> Sorted Array</button></router-link> 
  
  
</div>
</template>
<script>

export default {
    name: 'quick',
    data() {
        return{
    originalArr: "12,11,2,10,6,7",
    
  }},
    methods :{
        quickSort : function(arrInput) {
            
      if (arrInput.length <= 1) {
         return arrInput;
         } else {
               var leftArr = [];              
               var rightArr = [];
               var newArr = [];
               //var newPass = [];
               var pivot = arrInput.pop();      //  Take a pivot value
               var length = arrInput.length;
               for (var i = 0; i < length; i++) {
                  if (arrInput[i] <= pivot) {    // using pivot value start comparing
                     leftArr.push(arrInput[i]);      
               } else {
                       rightArr.push(arrInput[i]);
             }
             
           }
         return newArr.concat(this.quickSort(leftArr), pivot, this.quickSort(rightArr));                                                                          //returned untill sorting occurs
      }
   }
    },
    
    computed :{
        quick:  function sorted(){
            var arrNum = this.originalArr.split(',').map(Number);
            return this.quickSort(arrNum);
        }
   
    }

    
}
</script>
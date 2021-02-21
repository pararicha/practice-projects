
<template>
  <div>
    <p v-if="Add">sum:{{Add}}<br></p>
    <p v-if="quick">Sorted Array:{{quick}}</p>
    <p v-if="Word">Word Count:{{Word}}</p>
    <br/><router-link tag="button" :to ="{name:'homepage' }">Go to HomePage</router-link>
  </div>
</template>

<script>
module.exports = {
  props: ['Add','quick','Word'],


}
  </script>

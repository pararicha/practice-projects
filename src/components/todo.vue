
<template>
  <div>
    <p v-if="Add">sum:{{Add}}<br></p>
    <p v-if="quick">Sorted Array:{{quick}}</p>
    <p v-if="Word">Word Count:{{Word}}</p>
  </div>
</template>

<script>
module.exports = {
  props: ['Add','quick','Word'],


}
  </script>

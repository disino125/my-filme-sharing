<template>
  <div>
    <p>{{ movie.title }}</p>
    <p>description</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    movie: Object,
  },
})
</script>>


<style>
</style>
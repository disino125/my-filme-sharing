<template>
  <div>
  </div>
</template>

<script>
import filmRow from '~/components/filmRow.vue'
export default {
  components: { filmRow },
  data: () => {
    movies = [
      {
        id: 0,
        title: 'movie 0',
        description: 'movie 0 desc',
      },
      {
        id: 1,
        title: 'movie 1',
        description: 'movie 1 desc',
      },
      {
        id: 2,
        title: 'movie 2',
        description: 'movie 2 desc',
      },
    ]
  },
}
</script>

<style>
</style>
<template>
  <div class="container">
    <div>
      <div class="links"></div>
      <film-row :movies="movies"></film-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import filmRow from '~/components/filmRow.vue'

export default Vue.extend({
  components: { filmRow },
  data: () => {
    return {
      movies: [
        {
          id: 0,
          title: 'bla',
          description: 'blub',
        },
        {
          id: 1,
          title: 'bla1',
          description: 'blub1',
        },
      ],
    }
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

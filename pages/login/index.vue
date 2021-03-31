<template>
  <div class="container">
    <label>Name</label>
    <input type="text" v-model="username" class="border" />
    <input type="text" v-model="index" />
  </div>
</template>

<script>
export default {
  data: () => {
    counter : 0
  },
  props:{
    index : String
  },
  computed: {
    username: {
      get() {
        return this.$store.state.UserStore.username
      },
      set(name) {
        this.$store.commit('UserStore/changeUsername', name)
      },
    },
  },

  methods: {
    printUsername: function () {
      console.log(this.$store.state.UserStore.username)
    },
  },
  beforeMount: function () {

    console.log(this.$store.state)
    this.$store.commit('UserStore/initialiseStore')
    console.log(this.$store.state)
    
     this.$store.subscribe((mutation, state) => {
      console.log(mutation.type)
      console.log(JSON.parse(localStorage.getItem('userStore')));
      if (mutation.type.startsWith('UserStore')) {
        localStorage.setItem('userStore', JSON.stringify(state))
      }
    })

  },
  beforeDestroy: function () {
    //this.unsubscribe()
    console.log('destoryed')
  },
}
</script>

<style>
</style>
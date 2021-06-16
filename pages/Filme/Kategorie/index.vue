<template>
    <div>
        <nav-bar :cateName="$route.query.cateName"></nav-bar>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import navBar from '~/components/Home/KategorieNavBar.vue'

export default Vue.extend({
    components:{
        navBar
    }
})
</script>

<style scoped>

</style>
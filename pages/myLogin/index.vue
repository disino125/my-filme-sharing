<template>
    <div class="bg-gray-300 w-full h-full">
        <div class="h-3/4 w-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="h-12 w-28 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
                <img src="/userlogin.png" class="h-12 w-12">
                <div class="text-2xl font-bold w-16">Login</div>
            </div>

            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-1/2 mt-10">
                <div class="p-3 w-full">
                    <label class="text-xl text-gray-900">Email</label> 
                    <input type="text" class="h-12 w-full mt-3 p-3"
                    :value="email"/>
                </div>

                <div class="p-3 w-full">
                    <label class="text-xl text-gray-900">Password</label>
                    <input type="text" class="h-12 w-full mt-3 p-3"
                    :value="password"/>
                </div>

                <div class="w-full mt-3 h-14">
                    <button class="h-12 w-5/6 text-white bg-blue-500 absolute left-1/2 transform -translate-x-1/2 rounded-sm font-medium text-2xl text-center leading-relaxed">login</button>
                </div>

                <div class="h-10 mt-3 text-gray-700 w-full">
                    <button class="absolute left-1/2 transform -translate-x-1/2 underline text-lg w-5/6 text-center"
                    @click="goForgotPsw">
                        password vergessen?
                    </button>
                </div>

                <div class="text-xl mt-8 text-center w-full">Haben Sie noch kein Konto?</div>
                <div class="text-center text-blue-800 text-xl underline" @click="goReg">Hier registrieren</div>

            </div>
            
        </div>      
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    methods:{
        goForgotPsw(){
            this.$router.push('/forgotPsw')
        },
        goReg(){
            this.$router.push('/register')
        }
    },
    data(){
        return {
            email:'',
            password:''
        }
    }
})
</script>

<style scoped>

</style>
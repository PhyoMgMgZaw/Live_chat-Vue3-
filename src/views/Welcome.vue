<template>
  <div class="">
    <div class="" v-if="!showlogin">
      <register >  </register>
      <p>Already have an account? <span @click="showlogin=!showlogin" style="color:red">Login Page</span></p>
    </div>
    <div class="" v-else>
      <login ></login>
      <p>Don't have an account? <span @click="showlogin=!showlogin" style="color:red">Register Page</span></p>
    </div>
  </div>
</template>

<script>
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import { ref } from 'vue'
export default {
  components: { Register,Login },
  setup() {
    let showlogin = ref(false)

    return {
      showlogin
    }
  }

}
</script>

<style>

</style>
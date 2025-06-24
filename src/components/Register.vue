<template>
  <div class="">
    <p>Register Page</p>
    <form @submit.prevent="handleSignup">
        <input type="text" v-model="name" placeholder="Username"><br>
        <input type="email" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button>Register</button>
    </form>

    <p v-if="error" style="color:red">{{ error }}</p>

  </div>
</template>

<script>
import { ref } from 'vue';
import useRegister from '@/composables/register';

export default {
  setup() {
    let name = ref('');
    let email = ref('');
    let password = ref('');

    let { error, createdaccount } = useRegister();

    let handleSignup = async () => {
      const res = await createdaccount(name.value, email.value, password.value);
      console.log(res);
    };

    return {
      name,
      email,
      password,
      handleSignup,
      error
    };
  }
};
</script>


<style scoped>
/* Optional: make error styling cleaner */
p[style] {
  margin-top: 10px;
}
</style>

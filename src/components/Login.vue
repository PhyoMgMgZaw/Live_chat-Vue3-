<template>
  <div class="">
    <p>Login Page</p>
    <form @submit.prevent="handleLogin">
      <input type="email" placeholder="Email" v-model="email" /><br>
      <input type="password" placeholder="Password" v-model="password" /><br>
      <button>Login</button>
    </form>

    <!-- Show error -->
    <p v-if="error" style="color: red;">{{ error }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import useLogin from '@/composables/login';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const { error, login } = useLogin();

    const handleLogin = async () => {
      const res = await login(email.value, password.value);
      console.log('Login result:', res);
    };

    return {
      email,
      password,
      handleLogin,
      error
    };
  }
};
</script>

<style scoped>
/* Optional styling */
p[style] {
  margin-top: 10px;
}
</style>

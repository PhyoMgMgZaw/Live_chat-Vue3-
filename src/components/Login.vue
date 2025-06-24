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
import { useRouter } from 'vue-router';
export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const { error, login } = useLogin();
    const router = useRouter();

    const handleLogin = async () => {
      const res = await login(email.value, password.value);
      if(res) {
        router.push('/chatroom');
      }
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
div {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid #059ced;
  border-radius: 10px;
  background-color: #f9f9f9;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
}

button {
  padding: 10px;
  margin-top: 10px;
  background-color: #059ced;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #027bb5;
}

p {
  text-align: center;
}

p[style] {
  margin-top: 10px;
}

</style>

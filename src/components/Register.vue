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
import { useRouter } from 'vue-router';

export default {
  setup() {
    let name = ref('');
    let email = ref('');
    let password = ref('');
    const router = useRouter();

    let { error, createdaccount } = useRegister();

    let handleSignup = async () => {
      const res = await createdaccount(name.value, email.value, password.value);
      if(res){
        router.push('/chatroom');
      }
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

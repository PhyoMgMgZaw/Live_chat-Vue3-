<template>
  <div class="chat-room">
    <div class="user-info">
      <h3>{{ displayName || 'Anonymous' }}</h3>
      <h5>{{ email }}</h5>
    </div>
    <div class="actions">
      <button @click="handleLogout">Logout</button>
    </div> 
  </div>
</template>


<script>
import { getAuth, signOut } from 'firebase/auth';
import useUser from '@/composables/useUser';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const { displayName, email } = useUser();
    const auth = getAuth();
    const router = useRouter();

    const handleLogout = async () => {
      try {
        await signOut(auth);
        router.push('/'); // Redirect to welcome page after logout
      } catch (err) {
        console.error('Logout error:', err.message);
        alert('Error logging out: ' + err.message);
      }
    };

    return {
      displayName,
      email,
      handleLogout
    };
  }
};
</script>

<style scoped>
.chat-room {
  margin: 2px auto;
  padding: 5px;
  background-color: #059ced;
  border-radius: 8px;
  max-width: 600px;

  display: flex;          /* Make it horizontal */
  align-items: center;    /* Center vertically */
  justify-content: space-between; /* Push items apart */
}

.user-info h3, .user-info h5 {
  margin: 0;
}

button {
  padding: 5px 10px;
  border: none;
  background-color: #fff;
  color: #059ced;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #e0f0fa;
}
</style>

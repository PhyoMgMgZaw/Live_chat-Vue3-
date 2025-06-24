import { ref, onMounted } from 'vue';
import { getAuth } from 'firebase/auth';

export default function useUser() {
  const displayName = ref('');
  const email = ref('');

  const loadUser = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      displayName.value = user.displayName || 'Anonymous';
      email.value = user.email;
    } else {
      displayName.value = '';
      email.value = '';
    }
  };

  onMounted(() => {
    loadUser();
  });

  return {
    displayName,
    email,
    loadUser
  };
}

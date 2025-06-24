import { ref } from 'vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/config';

const useLogin = () => {
  let error = ref('');

  const login = async (email, password) => {
    error.value = '';
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (!res) {
        throw new Error('Login failed');
      }
      return res.user;
    } catch (err) {
      console.error('Login error:', err.code, err.message);
      error.value = err.message;
      return null;
    }
  };

  return { error, login };
};

export default useLogin;


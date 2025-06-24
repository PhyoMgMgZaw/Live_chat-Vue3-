import { ref } from "vue";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase/config";  // Import your auth instance

let useRegister = () => {
  let error = ref("");

  let createdaccount = async (name, email, password) => {
    error.value = "";
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (!res) {
        throw new Error("Could not complete signup");
      }
      await updateProfile(res.user, { displayName: name });
      return res.user;
    } catch (err) {
      error.value = err.message;
      console.error("Signup error:", err.code, err.message);
      return null;
    }
  };

  return { error, createdaccount };
};

export default useRegister;

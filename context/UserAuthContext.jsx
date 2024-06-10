/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Adjust the path to your firebase configuration

const UserAuthContext = createContext();

export function useUserAuth() {
  return useContext(UserAuthContext);
}

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      return userCredential;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  return (
    <UserAuthContext.Provider value={{ user, login }}>
      {children}
    </UserAuthContext.Provider>
  );
}

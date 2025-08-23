import { useEffect, useState } from "react";
import { FirebaseAuthContext } from "./FirebaseAuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const ContextProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create an user by using email and password (sign up)
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // create user using google
  const createUserWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // login existing user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logOutUser,
    createUserWithGoogle,
  };

  return (
    <FirebaseAuthContext.Provider value={userInfo}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export default ContextProvider;

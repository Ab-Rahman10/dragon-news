import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../FIrebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);

  //   Create user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Get the currently signed-in user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //   Logout
  const logOut = () => {
    return signOut(auth);
  };

  //   Login uer
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Update profile
  const userUpdateProfile = (updatedProfile) => {
    return updateProfile(auth.currentUser, updatedProfile);
  };

  const authInfo = {
    user,
    loading,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    userUpdateProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

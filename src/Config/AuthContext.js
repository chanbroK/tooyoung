import React, { Children, useContext, useEffect, useState } from "react";
import { auth, db } from "./Config";
import firebase from "firebase";
import { getUserInfo, getCurrentUserUid } from "./Auth";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setloading] = useState(true);
  const [isLogIn, setIsLogIn] = React.useState(false);
  const [v, setv] = React.useState(false);
  const [uid, setUid] = React.useState(getCurrentUserUid());
  const [userInfo, setUserInfo] = React.useState();
  let flag = 1;
  const reload = () => {
    if (flag === 1) {
      setTimeout(() => {
        setUid(getCurrentUserUid());
        if (uid === "not login") {
          setIsLogIn(false);
          setv(!v);
        } else {
          if (!userInfo) {
            setIsLogIn(true);
            getUserInfo(uid).then((info) => {
              setUserInfo(info);
            });
          }
        }
      }, 1000);
      console.log("[getUserInfo in AuthContext]...");
      console.log(uid);
    }
  };
  React.useEffect(() => {
    reload();
  }, [isLogIn, v]);

  const login = async (email, password) => {
    const uid = await auth.signInWithEmailAndPassword(email, password);
    const info = await getUserInfo(uid.user.uid);
    setUserInfo(info);
    setUid(uid.user.uid);
    flag = 1;
  };

  const signup = async (email, password, isProfessor, name, id) => {
    const idRes = await auth.createUserWithEmailAndPassword(email, password);
    if (idRes.user) {
      const Ref = db.collection("User").doc(idRes.user.uid);
      Ref.set({
        Name: name,
        email: email,
        password: password,
      });
    }
  };

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setloading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

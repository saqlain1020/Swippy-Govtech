import { auth, serverTimestamp } from "../../Firebase/Firebase";
import { firestore } from "./../../Firebase/Firebase";
import { SET_USER } from "./authConstants";
import history from "src/Routes/history";
import { notify } from "reapop";
import { LOADER_START, LOADER_STOP } from "../loader/loaderConstants";

const getUserData = async (uid) => {
  try {
    let query = await firestore.collection("users").doc(uid).get();
    return query.data();
  } catch (error) {
    console.log(error);
  }
};

export const signin = (email, pass) => async (dispatch) => {
  try {
    let user = await auth.signInWithEmailAndPassword(email, pass);
    let {
      user: { uid },
    } = user;
    dispatch(setUser(await getUserData(uid)));
    history.push("/dashboard/profile");
  } catch (error) {
    dispatch(notify(error.message, "error"));
  }
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: {
      user,
    },
  };
};

export const signup = (name, email, pass) => async (dispatch) => {
  try {
    let user = await auth.createUserWithEmailAndPassword(email, pass);
    let {
      user: { uid },
    } = user;
    let obj = {
      uid,
      email,
      name,
      createdAt: serverTimestamp,
    };
    await firestore.collection("users").doc(uid).set(obj);
    dispatch(setUser(await getUserData(uid)));
    history.push("/dashboard/profile");
  } catch (error) {
    dispatch(notify(error.message, "error"));
  }
};

export const authListener = () => async (dispatch) => {
  try {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(await getUserData(user.uid)));
      } else {
        dispatch(setUser(null));
      }
    });
  } catch (error) {
    dispatch(notify(error.message, "error"));
  }
};

export const signout = () => async (dispatch) => {
  try {
    await auth.signOut();
  } catch (error) {
    dispatch(notify(error.message, "error"));
  }
};

import firebase, { firestore } from "src/Firebase/Firebase";
import { notify } from "reapop";
import history from "src/Routes/history";
import store from "src/Redux/store";
import { updateUser } from "src/Redux/user/userActions";

export const fetchTagUser = (tagSerial) => async (dispatch) => {
  try {
    let query = await firestore
      .collection("users")
      .where("tags", "array-contains", tagSerial)
      .limit(1)
      .get();
    let user = null;
    query.forEach((doc) => {
      user = doc.data();
    });
    return user;
  } catch (error) {
    dispatch(notify(error.message, "error"));
  }
};

export const pairTag = (serial, uid) => async (dispatch) => {
  try {
    await firestore
      .collection("users")
      .doc(uid)
      .update({ tags: firebase.firestore.FieldValue.arrayUnion(serial) });
    let arr = store.getState().user.tags;
    arr.push(serial);
    dispatch(updateUser({ tags: arr }));
    dispatch(notify("Tag successfully paired", "success"));
    history.push("/dashboard/profile");
  } catch (error) {
    dispatch(notify(error.message, "error"));
  }
};

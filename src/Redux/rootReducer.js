import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { reducer as notificationsReducer } from "reapop";
import loaderReducer from "./loader/loaderReducer";

const persistConfig = {
  key: "root",
  whitelist: [],
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  notifications: notificationsReducer(),
  loading: loaderReducer,
});

export default persistReducer(persistConfig, rootReducer);

import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  whitelist: [],
  storage,
};


const rootReducer = combineReducers({
    auth: authReducer,
})

export default persistReducer(persistConfig, rootReducer);
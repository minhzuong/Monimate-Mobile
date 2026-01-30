import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import appThemeReducer from "../reducer/app-theme.reducer";
import appReducer from "../reducer/app.reducer";
import languageReducer from "../reducer/language.reducer";

const middleware: any = [];
if (__DEV__) {
  middleware.push(createLogger());
}
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['appReducer', 'languageReducer'],
    blacklist: []
}
const rootReducer = combineReducers({
    appThemeReducer: appThemeReducer,
    appReducer: appReducer,
    languageReducer: languageReducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware), // Nếu không muốn hiển thị redux-logger thì bỏ concat(middleware)
})

const persistor = persistStore(store)

export { persistor, store };
export type RootState  = ReturnType<typeof rootReducer>


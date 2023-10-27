import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";


import logger from "redux-logger";

import { rootReducer } from "./rootReducer";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean)

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [],
    whitelist: ['counter/setCounter']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // this is to prevet the error: "non-serializable value encountered" => this is because we might ran into a non plain javascript object while communicating with the backend
        })
            .concat(middleWares)
})

//# the line number 17 is commented out because one of the middleware is checking for serialized data, we need to make sure that we recieve serialized data else
//# the middleware will throw an error.

export const persistor = persistStore(store)
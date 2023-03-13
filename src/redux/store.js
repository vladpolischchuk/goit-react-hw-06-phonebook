import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist'

import rootReduce from "./root-reducer";

export const store = configureStore({
    reducer: rootReduce,
});

export const persistor = persistStore(store);
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { logger } from "redux-logger";

import { rootReducer, RootState } from './root'

const createStore = () => {
    // const sagaMiddleware = createSagaMiddleware();
    const isProd = process.env.NODE_ENV === 'production'
    // let middleware = isProd ? [sagaMiddleware,] : [sagaMiddleware, logger];

    const store = configureStore({
        reducer: rootReducer,
        // middleware,
    });

    // sagaMiddleware.run(rootSaga);

    return store
}

const store = createStore();
const useAppDispatch = () => useDispatch<AppDispatch>()

type AppDispatch = typeof store.dispatch;

export type { RootState }
export { store, useAppDispatch }
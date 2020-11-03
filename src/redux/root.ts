import { combineReducers } from "@reduxjs/toolkit";
// import { all } from 'redux-saga/effects';

import { authName, authReducer, } from '../features/auth'

const rootReducer = combineReducers({
    [authName]: authReducer,
})

// function* rootSaga() {
//     yield all([
//         authSaga(),
//     ])
// }

type RootState = ReturnType<typeof rootReducer>

export type { RootState }
// export { rootReducer, rootSaga, }
export { rootReducer, }
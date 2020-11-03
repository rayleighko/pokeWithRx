import { AxiosError } from 'axios'
import { createSelector, createAction, PayloadAction, createEntityAdapter } from "@reduxjs/toolkit";

import { createGenericSlice, GenericState } from '../slice'
import { AuthModel } from './model'
import { UserModel } from '../users'

type AuthState = GenericState<AuthModel>

const name = 'auth';

const initialState: AuthState = {
  data: null,
  status: 'finished'
}

const reducers = {
  signInRequest: (state: AuthState, { payload }: PayloadAction<AuthModel>) => {
    return state = {
      status: 'loading',
      data: { ...state, ...payload }
    }
  },
  signInSuccess: (state: AuthState, { payload }: PayloadAction<AuthModel>) => {
    return state = {
      status: 'finished',
      data: { ...state, ...payload }
    }
  },
  signInFailure: (state: AuthState, { payload: error }: PayloadAction<AxiosError>) => {
    return state = {
      status: 'error',
      data: null
    }
  },
  signUpRequest: (state: AuthState, action: PayloadAction<AuthModel>) => {
    return state = {
      status: 'loading',
      data: action.payload
    }
  },
  signUpSuccess: (state: AuthState, { payload: userInfo }: PayloadAction<AuthModel>) => {
    return state = {
      status: 'finished',
      data: userInfo
    }
  },
  signUpFailure: (state: AuthState, { payload: error }: PayloadAction<AxiosError>) => {
    return state = {
      status: 'error',
      data: null
    }
  },
  signOut: (state: AuthState, action: PayloadAction) => {
  },
}

const slice = createGenericSlice({
  name,
  initialState,
  reducers
})

const selectAllState = createSelector(
  (state: AuthState) => state.status,
  (state: AuthState) => state.data,
  (status, data,) => {
    return { status, data, };
  }
);

// const usersSelector = {
//   all: (state: AuthState) => selectAllState(state[name])
// };

const { actions } = slice;

export { actions, initialState, name, }
// export { actions, initialState, name, usersSelector }
export default slice.reducer;
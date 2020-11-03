import { createSlice, SliceCaseReducers, ValidateSliceCaseReducers, PayloadAction } from '@reduxjs/toolkit'

interface GenericState<T> {
    data?: T | null
    status: 'loading' | 'finished' | 'error'
}

const createGenericSlice = <
    T,
    Reducers extends SliceCaseReducers<GenericState<T>>
>({
    name = '',
    initialState,
    reducers
}: {
    name: string
    initialState: GenericState<T>
    reducers: ValidateSliceCaseReducers<GenericState<T>, Reducers>
}) => {
    return createSlice({
        name,
        initialState,
        reducers: {
            start(state) {
                state.status = 'loading'
            },
            /**
             * If you want to write to values of the state that depend on the generic
             * (in this case: `state.data`, which is T), you might need to specify the
             * State type manually here, as it defaults to `Draft<GenericState<T>>`,
             * which can sometimes be problematic with yet-unresolved generics.
             * This is a general problem when working with immer's Draft type and generics.
             */
            success(state: GenericState<T>, action: PayloadAction<T>) {
                state.data = action.payload
                state.status = 'finished'
            },
            error(state: GenericState<T>, action: PayloadAction<T>) {
                state.data = action.payload
                state.status = 'error'
            },
            ...reducers
        }
    })
}

export type { GenericState }

export { createGenericSlice }

// exmaple

// import { Example } from '@src/models/Example'
// const name = 'example'
// type ExampleState = GenericState<Users>
// const initialState: ExampleState = {
//   data: null,
//   status: 'finished'
// }
// const reducers = {
//     exampleReducer(state) {
//         state.status = 'finished'
//         state.data = 'hocus pocus'
//     }
// }
// const exampleSlice = createGenericSlice({
//     name,
//     initialState,
//     reducers,
// })

// const { exampleReducer } = exampleSlice.actions;

// export const exampleAction = createAction(exampleReducer.type, param => ({ payload: param }))

// export default exampleSlice.reducer;
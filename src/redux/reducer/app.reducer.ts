import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppStateEntity } from "@src/models";

const initalState: AppStateEntity = {
    accessToken: undefined,
    showOnboarding: true
}

const slice = createSlice({
    name: 'APP_STATE',
    initialState: initalState,
    reducers: {
        onDisableOnboarding: state => {
            state.showOnboarding = false;
        },
        onSetToken: (state, {payload}: PayloadAction<{accessToken: string}>) => {
            state.accessToken = payload.accessToken
        }
    }
})

const appReducer = slice.reducer
export default appReducer
export const {
    onDisableOnboarding,
    onSetToken
} = slice.actions
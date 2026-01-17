import { createSlice } from "@reduxjs/toolkit"

const initalState = {
    showOnboarding: true
}

const slice = createSlice({
    name: 'APP_STATE',
    initialState: initalState,
    reducers: {
        onDisableOnboarding: state => {
            state.showOnboarding = false;
        },
    }
})

const appReducer = slice.reducer
export default appReducer
export const {
    onDisableOnboarding
} = slice.actions
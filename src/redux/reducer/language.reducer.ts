import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppLanguage, LanguageState } from "@src/models";
import { i18next } from '@src/translations/i18n';
const initalState: LanguageState = {
    appLanguage: AppLanguage.vi,
}

const slice = createSlice({
    name: 'LANGUAGE_STATE',
    initialState: initalState,
    reducers: {
        onChangeLanguage: (state, {payload}: PayloadAction<AppLanguage>) => {
            state.appLanguage = payload
            i18next.changeLanguage(payload);
        }
    }
})

const languageReducer = slice.reducer
export default languageReducer
export const { onChangeLanguage } = slice.actions



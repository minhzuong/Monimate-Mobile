export enum APP_NAVIGATOR {
    ACCOUNT = 'ACCOUNT',
    AUTH = 'AUTH',
    MAIN_TAB = 'MAIN_TAB',
    MAIN = 'MAIN',
}

export enum APP_SCREEN {

    //Screen
    ONBOARDING = 'ONBOARDING',
    LOGIN = 'LOGIN',
    REGISTER = 'REGISTER',
    HOME = 'HOME',
    ACCOUNT_OVERVIEW = 'ACCOUNT_OVERVIEW'
}

export type AuthenticationParamsList = {
    [APP_NAVIGATOR.ACCOUNT]: {
        screen?: string
    };
    [APP_NAVIGATOR.MAIN_TAB]: undefined;
    [APP_NAVIGATOR.MAIN]: undefined
}

export type UnAuthenticationParamsList = {
    [APP_NAVIGATOR.AUTH]: undefined;
    [APP_SCREEN.ONBOARDING]: undefined;
    [APP_SCREEN.LOGIN]: undefined;
    [APP_SCREEN.REGISTER]: undefined;
}



export type RootStackParamList = {} & Partial<AuthenticationParamsList> & Partial<UnAuthenticationParamsList> 
import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import RootNavigator from "./RootNavigator"
import { navigationRef } from "./NavigationServices"
import { useEffect, useRef, useState } from "react"
import { RXStore } from "@src/shared/hooks"
import { AppState, Platform, StatusBar } from "react-native"

export const AppContainer = () => {
    const [navigationReady, setNavigationReady] = useState<boolean>(false);
    const appState = useRef(AppState.currentState)
    const AppTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: '#FFFFFF'
        }
    }

    useEffect(() => {
        const fetchSetting = () => {
            console.log(12312312);
        }

        fetchSetting()
        const subscription = AppState.addEventListener('change', nextAppState => {
            if (
                appState.current.match(/inactive|background/) &&
                nextAppState === 'active'
            ) {
                fetchSetting();
            }
            appState.current = nextAppState;
        });
        return () => subscription.remove()
    }, [])
    return (
        <NavigationContainer
            ref={navigationRef}
            theme={AppTheme}
            onReady={() => {
                setNavigationReady(true);
            }}
        >
            <RootNavigator />
            {navigationReady && <RXStore />}
            <StatusBar barStyle={"dark-content"} />
        </NavigationContainer>
    )
}
import { NavigationContainer } from "@react-navigation/native"
import RootNavigator from "./RootNavigator"
import { navigationRef } from "./NavigationServices"
import { useState } from "react"
import { RXStore } from "@src/shared/hooks"

export const AppContainer = () => {
    const [navigationReady, setNavigationReady] = useState<boolean>(false);
    return (
        <NavigationContainer 
            ref={navigationRef}
            onReady={() => {
                setNavigationReady(true);
            }}
        >
            <RootNavigator/>
            {navigationReady && <RXStore />}
        </NavigationContainer>
    )
}
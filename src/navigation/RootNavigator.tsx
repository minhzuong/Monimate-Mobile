import { createStackNavigator } from "@react-navigation/stack"

import { AuthNavigator } from "@features/auth/navigation"
import MainNavigator from "./MainNavigator"
import { APP_NAVIGATOR, RootStackParamList } from "./ScreenTypes"
import { useAppSelector } from "@src/shared/hooks"

const RootNavigator = () => {
    const RookStack = createStackNavigator<RootStackParamList>()
    const isLoggedIn = !!useAppSelector(x => x.appReducer.accessToken)

    return (
        <RookStack.Navigator screenOptions={{headerShown: false}}>
            {!isLoggedIn ? ( 
                <RookStack.Screen name={APP_NAVIGATOR.AUTH} component={AuthNavigator}/>
            ) : (
               <RookStack.Screen name={APP_NAVIGATOR.MAIN} component={MainNavigator}/>
            )}
        </RookStack.Navigator>
    )
}

export default RootNavigator
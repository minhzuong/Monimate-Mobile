import { createStackNavigator } from "@react-navigation/stack"
import MainTabNavigator from "./MainTabNavigator"
import { APP_NAVIGATOR, AuthenticationParamsList } from "./ScreenTypes"

const MainNavigator = () => {
    const Stack = createStackNavigator<AuthenticationParamsList>()
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={APP_NAVIGATOR.MAIN_TAB} component={MainTabNavigator}/>
        </Stack.Navigator>
    )
}

export default MainNavigator
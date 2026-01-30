import { createStackNavigator } from "@react-navigation/stack"
import MainTabNavigator from "./MainTabNavigator"
import { APP_NAVIGATOR, APP_SCREEN, AuthenticationParamsList } from "./ScreenTypes"
import { SettingLanguageScreen } from "@src/features/account/screens"

const MainNavigator = () => {
    const Stack = createStackNavigator<AuthenticationParamsList>()
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={APP_NAVIGATOR.MAIN_TAB} component={MainTabNavigator}/>
            <Stack.Screen name={APP_SCREEN.SETTING_LANGUAGE} component={SettingLanguageScreen}/>
        </Stack.Navigator>
    )
}

export default MainNavigator
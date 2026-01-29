import { createStackNavigator } from "@react-navigation/stack"
import { APP_SCREEN, AuthenticationParamsList } from "@src/navigation/ScreenTypes"
import { AccountOverviewScreen } from "../screens"


const AccountNavigator = () => {
    const AccountStack = createStackNavigator<AuthenticationParamsList>()
    const Stack = createStackNavigator()
    return (
        <AccountStack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={APP_SCREEN.ACCOUNT_OVERVIEW} component={AccountOverviewScreen}/>
        </AccountStack.Navigator>
    ) 
}

export default AccountNavigator
import { createStackNavigator } from "@react-navigation/stack"
import { AccountParamsList, APP_SCREEN } from "@src/navigation/ScreenTypes"
import { AccountOverviewScreen } from "../screens"

const AccountNavigator = () => {
    const AccountStack = createStackNavigator<AccountParamsList>()
    const Stack = createStackNavigator()
    return (
        <AccountStack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={APP_SCREEN.ACCOUNT_OVERVIEW} component={AccountOverviewScreen}/>
        </AccountStack.Navigator>
    ) 
}

export default AccountNavigator
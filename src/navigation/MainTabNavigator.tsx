import { Text } from "react-native"
import { HomeScreen } from "@features/home/screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AccountNavigator } from "@features/account/navigation"
import { APP_NAVIGATOR, APP_SCREEN } from "./ScreenTypes"
import { APP_FONTS } from "@src/shared/themes"
import { sizes } from "@src/shared/utils"

const Tab = createBottomTabNavigator()

const MainTabNavigator = () => {
    return (
         <Tab.Navigator 
            initialRouteName={APP_SCREEN.HOME} 
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: APP_FONTS.content_semibold,
                    fontSize: sizes._13sdp
                }
            }}
        >
            <Tab.Screen 
                name={APP_SCREEN.HOME} 
                component={HomeScreen}
                options={{
                    tabBarLabel: "Trang chủ"
                }}
            />
            <Tab.Screen name={APP_NAVIGATOR.ACCOUNT} component={AccountNavigator}/>
        </Tab.Navigator>
    )
}

export default MainTabNavigator
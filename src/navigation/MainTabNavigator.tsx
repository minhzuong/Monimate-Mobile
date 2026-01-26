import { Text } from "react-native"
import { HomeScreen } from "@features/home/screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { t } from "i18next"

import { AccountNavigator } from "@features/account/navigation"
import { APP_FONTS } from "@src/shared/themes"
import { sizes } from "@src/shared/utils"
import { useAppTheme } from "@src/shared/hooks"

import { APP_NAVIGATOR, APP_SCREEN } from "./ScreenTypes"
import { TabBarAccount, TabBarHome } from "@src/assets"
const Tab = createBottomTabNavigator()

const MainTabNavigator = () => {

    const { Colors } = useAppTheme()

    return (
        <Tab.Navigator
            initialRouteName={APP_SCREEN.HOME}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.tabBarActiveTintColor,
                tabBarInactiveTintColor: Colors.tabBarInActiveTintColor,
                tabBarStyle: {
                    backgroundColor: Colors.white
                },
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
                    tabBarLabel: t('tabbar.home'),
                    tabBarIcon: ({ focused }) => {
                        return <TabBarHome color={focused ? Colors.tabBarActiveTintColor : Colors.tabBarInActiveTintColor} />
                    }
                }}

            />
            <Tab.Screen
                name={APP_NAVIGATOR.ACCOUNT}
                options={{
                    tabBarLabel: t('tabbar.account'),
                    tabBarIcon: ({ focused }) => {
                        return <TabBarAccount color={focused ? Colors.tabBarActiveTintColor : Colors.tabBarInActiveTintColor} />
                    }
                }}
                component={AccountNavigator}
            />
        </Tab.Navigator>
    )
}

export default MainTabNavigator
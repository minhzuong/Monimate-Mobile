import { useTranslation } from "react-i18next"

import { HomeScreen } from "@features/home/screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { APP_FONTS } from "@src/shared/themes"
import { sizes } from "@src/shared/utils"
import { useAppTheme } from "@src/shared/hooks"
import { APP_SCREEN } from "./ScreenTypes"
import { TabBarAccount, TabBarHome } from "@src/assets"
import { AccountOverviewScreen } from "@src/features/account/screens"
const Tab = createBottomTabNavigator()

const MainTabNavigator = () => {

    const { t } = useTranslation()
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
                name={APP_SCREEN.ACCOUNT_OVERVIEW}
                options={{
                    tabBarLabel: t('tabbar.account'),
                    tabBarIcon: ({ focused }) => {
                        return <TabBarAccount color={focused ? Colors.tabBarActiveTintColor : Colors.tabBarInActiveTintColor} />
                    }
                }}
                component={AccountOverviewScreen}
            />
        </Tab.Navigator>
    )
}

export default MainTabNavigator
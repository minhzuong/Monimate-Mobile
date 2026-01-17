import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"

import { APP_SCREEN, UnAuthenticationParamsList } from "@src/navigation/ScreenTypes"
import { OnboardingScreen } from "@src/features/onboarding/screens"
import { useAppSelector } from "@src/shared/hooks"

import { LoginScreen, RegisterScreen } from "../screens"

const AuthStack = createStackNavigator<UnAuthenticationParamsList>()

const AuthNavigator = () => {

    const showOnboarding = useAppSelector(x => x.appReducer.showOnboarding)

    const defaultScreenOptions: StackNavigationOptions = {
        animationTypeForReplace: 'pop',
        gestureEnabled: false,
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    };

    const onBoardingScreen: {
        name: keyof UnAuthenticationParamsList,
        component: React.ComponentType<Element>
    } = {
        name: APP_SCREEN.ONBOARDING,
        component: OnboardingScreen
    }
    

    const screens: {
        name: keyof UnAuthenticationParamsList,
        component: React.ComponentType<Element>
    }[] = [
        {
            name: APP_SCREEN.LOGIN,
            component: LoginScreen
        },
        {
            name: APP_SCREEN.REGISTER,
            component: RegisterScreen
        },
    ]

    return (
        <AuthStack.Navigator>
            {!!showOnboarding ? (
                <>
                    {[onBoardingScreen, ...screens].map(screen => (
                        <AuthStack.Screen 
                            key={screen.name}
                            name={screen.name} 
                            component={screen.component}
                            options={defaultScreenOptions}
                        />
                    ))}
                </>
            ) : (
                <>
                    {screens.map(screen => (
                        <AuthStack.Screen 
                            key={screen.name}
                            name={screen.name} 
                            component={screen.component}
                            options={defaultScreenOptions}
                        />
                    ))}
                </>
            )}
        </AuthStack.Navigator>
    )
}

export default AuthNavigator
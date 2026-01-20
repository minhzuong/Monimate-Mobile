import { useSafeAreaInsets } from "react-native-safe-area-context"
import { AppButton, AppInput, AppText, Box, PageContainer } from "@src/shared/components"
import { sizes } from "@src/shared/utils"
import { t } from "i18next"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { useAppTheme } from "@src/shared/hooks"
import { navigate } from "@src/navigation/NavigationServices"
import { APP_SCREEN } from "@src/navigation/ScreenTypes"


const LoginScreen = () => {
    // useAppdispatch(onChangeAppTheme({appTheme: 'dark'}))
    const { top: paddingTop } = useSafeAreaInsets() 
    const { Colors } = useAppTheme()
    return (
        <PageContainer 
            padding
            style={{
                paddingTop: paddingTop + sizes._25sdp
            }}
        >
           
                <AppText
                    text={t("login.title")}
                    fontSize="28"
                    fontFamily="content_bold"
                />
                <AppText
                    text="Login to continue using app"
                    margin={{mt: sizes._5sdp}}
                />

            
            <Box 
                gap={10}
                style={[styles.containerInputs]}
            >
                <AppInput
                    label={t('email')}
                    placeholder={t('enter_your_email')}
                    keyboardType="email-address"
                />
                <AppInput
                    label={t('password')}
                    placeholder={t('enter_your_password')}
                    secureTextEntry
                />
                <Box align="flex-end">
                    <TouchableOpacity>
                        <AppText
                            text={t('login.forgot_password')}
                            fontFamily="content_semibold"
                            color={Colors.primary}
                        />
                    </TouchableOpacity>

                </Box>

            </Box>
            <AppButton
                containerStyle={{
                    marginTop: sizes._25sdp
                }}
                title={t('login.title.button')}
            />
                    <AppText 
                        textAlign="center"
                        margin={{mt: sizes._25sdp}}
                    >
                        Don't have an account?{' '}
                        <AppText
                            text="Register"
                            fontFamily="content_semibold"
                            color={Colors.primary}
                            onPress={() => navigate(APP_SCREEN.REGISTER)}
                        /> 
                    </AppText>

        </PageContainer>
    )
}

const styles = StyleSheet.create({
    containerInputs: {
        marginTop: sizes._15sdp
    }
})

export default LoginScreen
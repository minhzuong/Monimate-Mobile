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
            style={
                [
                    {
                        paddingTop: paddingTop + sizes._25sdp
                    },
                    styles.container
                ]
            }
        >
            <Box>
                <AppText
                    text={t("title.login")}
                    fontSize="28"
                    fontFamily="content_bold"
                />
                <AppText
                    text={t('subtitle.login')}
                    margin={{ mt: sizes._5sdp }}
                />
            </Box>
            <Box
                gap={10}

            >
                <AppInput
                    label={t('label.email')}
                    placeholder={t('placeholder.email')}
                    keyboardType="email-address"
                />
                <AppInput
                    label={t('label.password')}
                    placeholder={t('placeholder.password')}
                    secureTextEntry
                />
                <Box align="flex-end">
                    <TouchableOpacity
                        onPress={() => navigate(APP_SCREEN.FORGOT_PASSWORD)}
                    >
                        <AppText
                            text={t('button.forgot_password')}
                            fontFamily="content_semibold"
                            color={Colors.primary}
                        />
                    </TouchableOpacity>
                </Box>

            </Box>
            <AppButton
                containerStyle={{
                    marginTop: sizes._10sdp
                }}
                title={t('button.login')}
            />
            <AppText
                textAlign="center"
            >
                {t('question.account')}{' '}
                <AppText
                    text={t('button.register')}
                    fontFamily="content_semibold"
                    color={Colors.primary}
                    onPress={() => navigate(APP_SCREEN.REGISTER)}
                />
            </AppText>

        </PageContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: sizes._24sdp
    }
})

export default LoginScreen
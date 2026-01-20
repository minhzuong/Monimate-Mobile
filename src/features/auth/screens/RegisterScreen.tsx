import { useSafeAreaInsets } from "react-native-safe-area-context"
import { AppButton, AppInput, AppText, Box, PageContainer } from "@src/shared/components"
import { sizes } from "@src/shared/utils"
import { t } from "i18next"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { useAppTheme } from "@src/shared/hooks"
import { goBack, navigate } from "@src/navigation/NavigationServices"
import { APP_SCREEN } from "@src/navigation/ScreenTypes"
import { LeftArrowIcon } from "@src/assets"


const RegisterScreen = () => {
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
            <Box align="flex-start">
                <TouchableOpacity
                    hitSlop={{
                        top: sizes._24sdp,
                        bottom: sizes._24sdp,
                        left: sizes._24sdp,
                        right: sizes._24sdp,
                    }}
                    onPress={() => goBack()}
                >
                    <LeftArrowIcon
                    />
                </TouchableOpacity>
            </Box>

            <AppText
                text={t("login.title")}
                fontSize="28"
                fontFamily="content_bold"
                margin={{ mt: sizes._5sdp }}
            />
            <AppText
                text="Login to continue using app"
                margin={{ mt: sizes._5sdp }}
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
                <AppInput
                    label={t('password')}
                    placeholder={t('enter_your_password')}
                    secureTextEntry
                />


            </Box>
            <AppButton
                containerStyle={{
                    marginTop: sizes._25sdp
                }}
                title={t('login.title.button')}
            />
        </PageContainer>
    )
}

const styles = StyleSheet.create({
    containerInputs: {
        marginTop: sizes._15sdp
    }
})

export default RegisterScreen
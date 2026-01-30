import { StyleSheet, TouchableOpacity, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useTranslation } from "react-i18next"

import { AppButton, AppInput, AppText, BackButton, Box, PageContainer } from "@src/shared/components"
import { sizes } from "@src/shared/utils"
import { useAppTheme } from "@src/shared/hooks"
import { goBack, navigate } from "@src/navigation/NavigationServices"
import { LeftArrowIcon } from "@src/assets"
import { APP_SCREEN } from "@src/navigation/ScreenTypes"


const ForgotPasswordScreen = () => {
    // useAppdispatch(onChangeAppTheme({appTheme: 'dark'}))
    const { t } = useTranslation()
    const { top: paddingTop } = useSafeAreaInsets()
    const onSubmit = () => {
        navigate(APP_SCREEN.VERIFY_OTP)
    }
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
            <Box align="flex-start">
                <BackButton />
            </Box>
            <Box>
                <AppText
                    text={t("title.forgot_password")}
                    fontSize="28"
                    fontFamily="content_bold"
                    margin={{ mt: sizes._5sdp }}
                />
                <AppText
                    text={t('subtitle.forgot_password')}
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
            </Box>
            <AppButton
                containerStyle={{
                    marginTop: sizes._10sdp
                }}
                title={t('button.confirm')}
                onPress={onSubmit}
            />
        </PageContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: sizes._24sdp
    }
})

export default ForgotPasswordScreen
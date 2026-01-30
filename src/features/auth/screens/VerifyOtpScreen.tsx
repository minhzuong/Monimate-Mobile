import { StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useTranslation } from "react-i18next"

import { AppButton, AppInput, AppText, BackButton, Box, PageContainer } from "@src/shared/components"
import { sizes } from "@src/shared/utils"
import { useAppTheme } from "@src/shared/hooks"

const VerifyOtpScreen = () => {
    // useAppdispatch(onChangeAppTheme({appTheme: 'dark'}))
    const { t } = useTranslation()
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
            <Box align="flex-start">
                <BackButton />
            </Box>
            <Box>
                <AppText
                    text={t("title.otp_verification")}
                    fontSize="28"
                    fontFamily="content_bold"
                />
                <AppText
                    text={t('subtitle.otp_verification')}
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
            />
        </PageContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: sizes._24sdp
    }
})

export default VerifyOtpScreen
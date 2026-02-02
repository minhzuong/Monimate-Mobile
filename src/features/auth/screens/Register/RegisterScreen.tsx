import { StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useTranslation } from "react-i18next"

import { useAppTheme } from "@src/shared/hooks"
import { AppButton, AppInput, AppText, BackButton, Box, PageContainer } from "@src/shared/components"
import { sizes } from "@src/shared/utils"

const RegisterScreen = () => {
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
               <BackButton/>
            </Box>
            <Box>
                <AppText
                    text={t("title.register")}
                    fontSize="28"
                    fontFamily="content_bold"
                />
                <AppText
                    text={t('subtitle.register')}
                    margin={{ mt: sizes._5sdp }}
                />
            </Box>
            <Box
                gap={sizes._10sdp}
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
                <AppInput
                    label={t('label.confirm_password')}
                    placeholder={t('placeholder.confirm_password')}
                    secureTextEntry
                />
            </Box>
            <AppButton
                containerStyle={{
                    marginTop: sizes._10sdp
                }}
                title={t('button.register')}
            />
        </PageContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: sizes._24sdp
    },
})

export default RegisterScreen
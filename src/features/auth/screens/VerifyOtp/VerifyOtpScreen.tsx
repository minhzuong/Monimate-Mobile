import { StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useTranslation } from "react-i18next"
import { Formik } from "formik"

import { AppButton, AppInput, AppText, BackButton, Box, PageContainer } from "@src/shared/components"
import { sizes } from "@src/shared/utils"
import { useAppTheme } from "@src/shared/hooks"
import { OTPValidationSchema } from "@src/validations"

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
            <Formik
                initialValues={{ otp: '' }}
                validationSchema={OTPValidationSchema}
                onSubmit={(values) => {
                    // navigate(APP_SCREEN.VERIFY_OTP)
                }}
            >
                {({
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    setFieldValue
                }) => (
                    <>

                        <Box
                            gap={10}
                        >
                            <AppInput
                                label={t('label.otp')}
                                placeholder={t('placeholder.otp')}
                                value={values.otp}
                                onChangeText={text => setFieldValue('otp', text)}
                                onBlur={handleBlur('otp')}
                                errMessage={touched.otp ? errors.otp : ''}
                            />
                        </Box>
                        <AppButton
                            containerStyle={{
                                marginTop: sizes._10sdp
                            }}
                            title={t('button.confirm')}
                            onPress={handleSubmit}
                        />
                    </>

                )}
            </Formik>
        </PageContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: sizes._24sdp
    }
})

export default VerifyOtpScreen
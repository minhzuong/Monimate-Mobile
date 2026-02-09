import { StyleSheet, TouchableOpacity, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useTranslation } from "react-i18next"

import { AppButton, AppInput, AppText, BackButton, Box, PageContainer } from "@src/shared/components"
import { sizes } from "@src/shared/utils"
import { useAppTheme } from "@src/shared/hooks"
import { goBack, navigate } from "@src/navigation/NavigationServices"
import { ArrowLeftIcon } from "@src/assets"
import { APP_SCREEN } from "@src/navigation/ScreenTypes"
import { Formik } from "formik"
import { EmailValidationSchema } from "@src/validations"


const ForgotPasswordScreen = () => {
    // useAppdispatch(onChangeAppTheme({appTheme: 'dark'}))
    const { t } = useTranslation()
    const { top: paddingTop } = useSafeAreaInsets()
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

            <Formik
                initialValues={{email: ''}}
                validationSchema={EmailValidationSchema}
                onSubmit={(values) => {
                    navigate(APP_SCREEN.VERIFY_OTP)
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
                                label={t('label.email')}
                                placeholder={t('placeholder.email')}
                                keyboardType="email-address"
                                value={values.email}
                                onChangeText={text => setFieldValue('email', text)}
                                onBlur={handleBlur('email')}
                                errMessage={touched.email ? errors.email : ''}                
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

export default ForgotPasswordScreen
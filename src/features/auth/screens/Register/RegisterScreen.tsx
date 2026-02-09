import { StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useTranslation } from "react-i18next"
import { Formik } from "formik"

import { useAppTheme } from "@src/shared/hooks"
import { AppButton, AppInput, AppText, BackButton, Box, PageContainer } from "@src/shared/components"
import { sizes } from "@src/shared/utils"
import { RegisterValidationSchema } from "@src/validations"
import { RegisterFormValuesEntity } from "@src/models/form"

const RegisterScreen = () => {
    // useAppdispatch(onChangeAppTheme({appTheme: 'dark'}))
    const { t } = useTranslation()
    const { top: paddingTop } = useSafeAreaInsets()
    const { Colors } = useAppTheme()

    const initialRegisterValues: RegisterFormValuesEntity = {
        email: '',
        password: '',
        confirmPassword: '',
    };
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
                    text={t("title.register")}
                    fontSize="28"
                    fontFamily="content_bold"
                />
                <AppText
                    text={t('subtitle.register')}
                    margin={{ mt: sizes._5sdp }}
                />
            </Box>
            <Formik
                initialValues={initialRegisterValues}
                validationSchema={RegisterValidationSchema}
                onSubmit={(values) => {

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
                            gap={sizes._10sdp}
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
                            <AppInput
                                label={t('label.password')}
                                placeholder={t('placeholder.password')}
                                secureTextEntry
                                value={values.password}
                                onChangeText={text => setFieldValue('password', text)}
                                onBlur={handleBlur('password')}
                                errMessage={touched.password ? errors.password : ''}
                            />
                            <AppInput
                                label={t('label.confirm_password')}
                                placeholder={t('placeholder.confirm_password')}
                                secureTextEntry
                                value={values.confirmPassword}
                                onChangeText={text => setFieldValue('confirmPassword', text)}
                                onBlur={handleBlur('password')}
                                errMessage={touched.confirmPassword ? errors.confirmPassword : ''}
                            />
                        </Box>
                        <AppButton
                            containerStyle={{
                                marginTop: sizes._10sdp
                            }}
                            title={t('button.register')}
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
    },
})

export default RegisterScreen
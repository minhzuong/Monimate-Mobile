import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useTranslation } from "react-i18next"
import { Formik } from "formik";

import { AppButton, AppInput, AppText, Box, PageContainer } from "@src/shared/components"
import { sizes } from "@src/shared/utils"
import { StyleSheet, TouchableOpacity } from "react-native"
import { useAppDispatch, useAppTheme } from "@src/shared/hooks"
import { navigate } from "@src/navigation/NavigationServices"
import { APP_SCREEN } from "@src/navigation/ScreenTypes"
import { onSetToken } from "@src/redux"
import { LocaleSelector } from "@src/features/account/screens/SettingLanguage/components"
import { LoginValidationSchema } from "@src/validations";
import { LoginFormValuesEntity } from "@src/models/form";


const LoginScreen = () => {
    // useAppdispatch(onChangeAppTheme({appTheme: 'dark'}))
    const { t } = useTranslation()
    const { top: paddingTop } = useSafeAreaInsets()
    const { Colors } = useAppTheme()

    const initialLoginValues: LoginFormValuesEntity = {
        email: '',
        password: '',
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
            <Box align="flex-end">
                <LocaleSelector />
            </Box>
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
            <Formik
                initialValues={initialLoginValues}
                validationSchema={LoginValidationSchema}
                onSubmit={(values) => {
                    useAppDispatch(onSetToken({
                        accessToken: "tokennadnfnsadfn"
                    }))
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
                            <AppInput
                                label={t('label.password')}
                                placeholder={t('placeholder.password')}
                                secureTextEntry
                                value={values.password}
                                onChangeText={text => setFieldValue('password', text)}
                                onBlur={handleBlur('password')}
                                errMessage={touched.password ? errors.password : ''}
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
                            onPress={handleSubmit}
                        />
                    </>

                )}

            </Formik>
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
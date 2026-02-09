import * as Yup from 'yup';
import { emailRegex, otpRegex, passwordRegex } from './common';

export const LoginValidationSchema = () =>
    Yup.object().shape({
        email: Yup.string()
            .required('validation.email_is_required')
            .matches(emailRegex, 'validation.email_not_valid'),
        password: Yup.string()
            .required('validation.password_is_required')
            .matches(passwordRegex, 'validation.password_not_valid')
    });
export const RegisterValidationSchema = () =>
    Yup.object().shape({
        email: Yup.string()
            .required('validation.email_is_required')
            .matches(emailRegex, 'validation.email_not_valid'),
        password: Yup.string()
            .required('validation.password_is_required')
            .matches(passwordRegex, 'validation.password_not_valid'),
        confirmPassword: Yup.string()
            .required('validation.confirm_password_is_required')
            .oneOf([Yup.ref('password')], 'validation.passwords_do_not_match')
    });
export const EmailValidationSchema = () =>
    Yup.object().shape({
        email: Yup.string()
            .required('validation.email_is_required')
            .matches(emailRegex, 'validation.email_not_valid'),
    });
export const OTPValidationSchema = () =>
    Yup.object().shape({
        otp: Yup.string()
            .required('validation.otp_is_required')
            .matches(otpRegex, 'validation.otp_not_valid'),
    });

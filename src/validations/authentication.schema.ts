import * as Yup from 'yup';
import { TFunction } from 'i18next'; 

import { emailRegex, passwordRegex } from './common';
export const LoginValidationSchema = () =>
    Yup.object().shape({
        email: Yup.string()
            .required('validation.email_is_required')
            .matches(emailRegex, 'validation.email_not_valid'),
        password: Yup.string()
            .required('validation.password_is_required')
            .matches(passwordRegex, 'validation.password_not_valid')
    });

import * as yup from 'yup';
import { RegexHelper } from '../constants/regex.constant';

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface UserModel {
	email: string;
	trial: number;
	first_name: string;
	last_name: string;
	company_name: string;
	country_code: string;
	access_token: string;
	token_type: string;
}

export const LoginYup = yup.object().shape({
	email: yup.string().required().email(),
	password: yup.string().required(),
});

export const SignUpYup = yup.object().shape({
	userEmail: yup.string().required().email(),
	userPassword: yup.string().required().matches(RegexHelper.PASSWORD),
	userPassword_confirmation: yup
		.string()
		.oneOf([yup.ref('userPassword'), undefined], 'Password not matched!'),
	terms_of_use: yup.boolean().required().isTrue(),
});

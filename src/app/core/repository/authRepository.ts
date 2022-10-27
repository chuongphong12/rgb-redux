import axios from 'axios';
import { environment } from '../../../environments/environment';
import Toastconfig from '../../views/toast';
import { LoginCredentials, UserModel } from '../models/userModel';

export class AuthRepository {
	baseUrl: string = environment.baseUrl.backend + '/api';

	async login(loginForm: LoginCredentials): Promise<UserModel> {
		try {
			const {
				data: { data },
			} = await axios.post(this.baseUrl + '/customer/login', {
				...loginForm,
			});
			return data as UserModel;
		} catch (error: any) {
			Toastconfig.error(error.response.data);
			throw error;
		}
	}

	async logout(): Promise<void> {
		try {
			await axios.get(this.baseUrl + '/customer/logout');
		} catch (e: any) {
			Toastconfig.error(e.response.data);
			throw e;
		}
	}

	setLoginLocalStorage(token: string): void {
		localStorage.setItem('token-rgb', JSON.stringify(token));
	}

	setLogoutLocalStorage(): void {
		localStorage.removeItem('token-rgb');
		localStorage.removeItem('color_data');
		localStorage.removeItem('order_id');
	}
}

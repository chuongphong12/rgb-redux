import { AuthRepository } from '../repository/authRepository';
import { LoginCredentials } from '../models/userModel';

export class ApiService {
	private _authRepository: AuthRepository;

	constructor(authRepository: AuthRepository) {
		this._authRepository = authRepository;
	}

	async login(loginForm: LoginCredentials) {
		const user = await this._authRepository.login(loginForm);
		if (user) {
			this._authRepository.setLoginLocalStorage(user.access_token);
		}
	}
}

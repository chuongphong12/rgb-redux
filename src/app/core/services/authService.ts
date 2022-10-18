export class AuthService {
	constructor() {
		if (localStorage.getItem('token-rgb')) {
			const accessToken = JSON.parse(
				localStorage.getItem('token-rgb') as string
			);
		}
	}
}
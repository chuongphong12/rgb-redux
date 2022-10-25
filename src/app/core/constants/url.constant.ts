import { environment } from './../../../environments/environment';
export class UrlConstant {
	// static readonly ROUND_UP_API_ENDPOINT = environment.baseUrl.tizen;
	static readonly BASE_URL_BACKEND = environment.baseUrl.backend + '/api';

	static readonly REDIRECT_URL_PAYMENT =
		environment.baseUrl.frontend + '/color-comparison/create/payment';
}

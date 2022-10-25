import { environment } from '../../environments/environment';
import axios, { AxiosRequestConfig } from 'axios';
import { getAuthority } from './authority';
import Toastconfig from '../views/toast';

const instance = axios.create({
	baseURL: environment.baseUrl.backend + '/',
	timeout: 300000,
	headers: {
		'Content-Type': 'application/json',
	},
});

// Add a request interceptor
instance.interceptors.request.use(
	async function(config) {
		if (typeof window !== 'undefined') {
			// client side
			const authority = getAuthority();
			const headers = { ...config.headers };
			if (authority) {
				headers['Authorization'] = `Bearer ${authority}`;
			}
			config.headers = headers;
		}
		return config;
	},
	function(error) {
		// Do something with request error
		return Promise.reject(error);
	},
);

// Add a response interceptor
instance.interceptors.response.use(
	async function(response) {
		console.log('axios interceptor 1');
		if (typeof window !== 'undefined') {
		} else {
			console.log('response.status.server', response.status);
		}
		return response;
	},
	function(error) {
		console.log('axios interceptor 2');
		console.log(error);
		if (typeof window !== 'undefined') {
			if (error.response.status === 401 && !error.request.responseURL.includes('/user/logout')) {
				Toastconfig.error('Unauthenticate');
				console.log(error.response.status);

				// await store.dispatch(logOutAndDeleteToken());
			}
		}
		// return response;
		return { response: error.response, data: error.response.data };
	},
);

export const request = (url: string, options: Partial<AxiosRequestConfig>) => {
	return instance.request({ ...options, url: url });
};

export const requestWithToken = (
	url: string,
	token: string,
	options: Partial<AxiosRequestConfig>,
) => {
	const headers = { ...options.headers };
	headers['Authorization'] = `Bearer ${token}`;
	options.headers = headers;
	return instance.request({ ...options, url: url });
};

export default instance;

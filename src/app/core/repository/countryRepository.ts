import axios from 'axios';
import { UrlConstant } from '../constants/url.constant';

export interface ICountry {
	code: string;
	name: string;
}

class CountryRepository {
	private apiURL = UrlConstant.BASE_URL_BACKEND;

	async getAllCountry(): Promise<ICountry[] | undefined> {
		const uri = this.apiURL + `/country`;
		try {
			const {
				data: { data },
			} = await axios.get(uri);
			return data;
		} catch (error: any) {
			console.log(error.response.data);
		}
	}
}

export default CountryRepository;

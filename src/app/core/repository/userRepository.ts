import { UserModel } from '../models/userModel';
import instance from '../../utils/request';
import Toastconfig from '../../views/toast';


export class UserRepository {

	async getProfile(): Promise<UserModel> {
		try {
			const { data: { data } } = await instance.get('customer/profile');
			return data as UserModel;
		} catch (e: any) {
			Toastconfig.error(e.response.data);
			throw e;
		}
	}
}
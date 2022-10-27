import instance from '../../utils/request';
import Toastconfig from '../../views/toast';
import { UserModel } from '../models/userModel';

export class UserRepository {
	async getProfile(): Promise<UserModel> {
		try {
			const {
				data: { data },
			} = await instance.get('/api/customer/profile');
			return data as UserModel;
		} catch (e: any) {
			Toastconfig.error(e.response.data);
			throw e;
		}
	}
}

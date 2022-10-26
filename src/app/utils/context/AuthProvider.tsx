import { createContext, useEffect } from 'react';
import { getProfile, userSelector } from '../../redux/userSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { UserModel } from '../../core/models/userModel';

interface UserContextProps {
	user: UserModel,
}

interface ChildProps {
	children: JSX.Element | JSX.Element[];
}

const AuthContext = createContext<UserContextProps>({} as UserContextProps);

export const AuthProvider = ({ children }: ChildProps) => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(userSelector);

	const fetchCurrentUserProfile = () => {
		const token = localStorage.getItem('token-rgb');
		if (!token) {
			return;
		}
		dispatch(getProfile());
	};

	useEffect(() => {
		fetchCurrentUserProfile();
	}, []);


	return (
		<AuthContext.Provider value={{ user }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
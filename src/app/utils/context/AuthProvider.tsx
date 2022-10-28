import { createContext, useCallback, useEffect } from 'react';
import { UserModel } from '../../core/models/userModel';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getProfile, userSelector } from '../../redux/userSlice';

interface UserContextProps {
	user: UserModel;
}

interface ChildProps {
	children: JSX.Element | JSX.Element[];
}

const AuthContext = createContext<UserContextProps>({} as UserContextProps);

export const AuthProvider = ({ children }: ChildProps) => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(userSelector);
	const token = localStorage.getItem('token-rgb');

	const fetchCurrentUserProfile = useCallback(() => {
		if (!token) {
			return;
		}
		dispatch(getProfile());
	}, [dispatch, token]);

	useEffect(() => {
		fetchCurrentUserProfile();
	}, [fetchCurrentUserProfile]);

	return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export default AuthContext;

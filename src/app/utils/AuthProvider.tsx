import { createContext, useEffect, useState } from 'react';
import { getProfile } from '../redux/userSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
	const dispatch = useAppDispatch();
	const userSelector = useAppSelector(state => state.users);
	const [auth, setAuth] = useState({});

	const fetchCurrentUserProfile = () => {
		const token = localStorage.getItem('token-rgb');
		if (!token) {
			return;
		}
		dispatch(getProfile());
		setAuth(userSelector.user);
	};

	useEffect(() => {
		fetchCurrentUserProfile();
	}, []);


	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
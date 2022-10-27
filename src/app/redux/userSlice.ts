import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { LoginCredentials, UserModel } from '../core/models/userModel';
import { AuthRepository } from '../core/repository/authRepository';
import { UserRepository } from '../core/repository/userRepository';
import { RootState } from '../store';

export interface UserState {
	user: UserModel;
	status: 'idle' | 'loading' | 'failed';
}

const authRepository = new AuthRepository();
const userRepository = new UserRepository();

const initialState = {
	user: {},
	status: 'idle',
} as UserState;

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload;
				state.status = 'idle';
			})
			.addCase(getProfile.fulfilled, (state, action) => {
				state.user = action.payload;
			});
	},
});

export const login = createAsyncThunk(
	'users/login',
	async (loginForm: LoginCredentials, { rejectWithValue }) => {
		try {
			const user = await authRepository.login(loginForm);
			if (user) {
				localStorage.setItem('token-rgb', user.access_token);
			}
			return user;
		} catch (error) {
			return rejectWithValue((error as AxiosError).response?.data);
		}
	}
);

export const getProfile = createAsyncThunk('users/profile', async (data, { rejectWithValue }) => {
	try {
		return await userRepository.getProfile();
	} catch (error) {
		return rejectWithValue((error as AxiosError).response?.data);
	}
});

export const userSelector = (state: RootState): UserModel => state.users.user;
export default userSlice.reducer;

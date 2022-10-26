import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { LoginCredentials, UserModel } from '../core/models/userModel';
import { AuthRepository } from '../core/repository/authRepository';
import { UserRepository } from '../core/repository/userRepository';

export interface UserState {
	user: UserModel,
	status: 'idle' | 'loading' | 'failed'
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
		builder.addCase(login.pending, (state, action) => {
			state.status = 'loading';
		}).addCase(login.fulfilled, (state, action) => {
			state.user = action.payload;
			state.status = 'idle';
		}).addCase(getProfile.fulfilled, (state, action) => {
			state.user = action.payload;
		});
	},
});

export const login = createAsyncThunk('users/login', async (loginForm: LoginCredentials) => {
	return await authRepository.login(loginForm);
});

export const getProfile = createAsyncThunk('users/profile', async (data, getState) => {
	return await userRepository.getProfile();
});

export const userSelector = (state: RootState): UserModel => state.users.user;
export default userSlice.reducer;
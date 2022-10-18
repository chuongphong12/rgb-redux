import UserModel from '../core/models/userModel';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface UserState {
	user: UserModel,
	status: 'idle' | 'loading' | 'failed'
}

const initialState = {
	user: {},
	status: 'idle',
} as UserState;

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: {},
});

export const {} = userSlice.actions;
export const userSelector = (state: RootState): UserModel => state.users.user;
export default userSlice.reducer;
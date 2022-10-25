import { combineReducers } from 'redux';
import UserSlice, { userSelector } from './userSlice';

const rootReducer = combineReducers({
	users: UserSlice,
});

export default rootReducer;

export const selectors = {
	user: userSelector,
};


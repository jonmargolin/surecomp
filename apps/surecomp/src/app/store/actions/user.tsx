import * as actionTypes from './actionTypes';
import { User } from '../model/user-model';
import { Action } from '../utility';
export const loginUser = (user: User) => {
	return {
		type: actionTypes.LOGIN,
		payload: user
	} as Action<User>;
};
export const getUser = () => {
	return {
		type: actionTypes.GET_USER
	} as Action<User>;
};
export const logOutUser = () => {
	return {
		type: actionTypes.LOGOUT
	};
};

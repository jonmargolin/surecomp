import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../components/login';
import { withRouter } from 'react-router-dom';
import toastr from 'toastr';
import './../app.scss';
export const LoginHome = ({ history }) => {
	const dispatch = useDispatch();
	const login = useSelector(state => state.user);
	let loginUser: (user) => any;
	loginUser = useCallback(
		user => {
			if (user.profileObj) {
				dispatch({ type: 'LOGIN_USER', payload: user.profileObj });
			} else {
				toastr.options = {
					positionClass: 'toast-top-full-width',
					hideDuration: 100,
					timeOut: 600000
				};
				toastr.clear();
				setTimeout(() => toastr.success(`Settings updated ${user.error}`), 300);
			}
		},
		[dispatch]
	);

	useEffect(() => {
		if (login) {
			const storeUser = JSON.stringify(login);
			localStorage.setItem('user', storeUser);
			history.push('/');
		}
		return () => {};
	}, [login]);

	return (
		<div>
			<Login onLogin={loginUser} />
		</div>
	);
};
export default withRouter(LoginHome);

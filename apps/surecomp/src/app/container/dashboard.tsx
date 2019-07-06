import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../store/model/user-model';
import Header from '../components/header';
import SideMenu from '../components/sideMenu';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { createStyles, Theme } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex'
		},
		appBar: {
			zIndex: theme.zIndex.drawer + 1
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0
		},
		drawerPaper: {
			width: drawerWidth
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3)
		},
		toolbar: theme.mixins.toolbar
	})
);

const Component = React.lazy(() => import('../components/wizard'));
export const Dashboard: any = ({ history }) => {
	const classes = useStyles();
	const [item, setItem] = useState(1);
	const user: User = useSelector(state => state.user);
	const dispatch = useDispatch();
	const logout = () => {
		localStorage.removeItem('user');
		dispatch({ type: 'LOGOUT_USER' }), history.push('/login');
	};
	const switchComponent = value => {
		switch (value) {
			case 'wizard':
				setItem(1);
				break;
			case 'Starred':
				setItem(2);
				break;
		}
	};
	return (
		<div className={classes.root}>
			<Header imageUrl={user.imageUrl} onLogOut={logout} parentClasses={classes} />
			<SideMenu onChange={event => switchComponent(event.target.innerText)} />
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{item === 1 ? (
					<React.Suspense fallback={<Loader type="Puff" color="#00BFFF" height="100" width="100" />}>
						<Component />
					</React.Suspense>
				) : null}
			</main>
		</div>
	);
};
export default withRouter(Dashboard);

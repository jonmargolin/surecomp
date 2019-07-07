import React from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import GoogleLogin from 'react-google-login';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { environment } from '../../environments/environment';
const styles = () => ({
	root: {
		backgroundColor: 'red'
		/* more styles... */
	},
	login: {
		padding: '0px 40px 0px 40px !important',
		'margin-top': '20px'
	}
});
interface IProps {
	onLogin: (T) => {};
	classes: any;
}

export const Login = React.memo(({ onLogin, classes }: IProps) => (
	<Container component="main" maxWidth="xs">
		<Typography component="h1" variant="h5">
			please Login to the system
		</Typography>
		<Grid container spacing={1}>
			<Grid item xs={12} sm={12}>
				<GoogleLogin
					clientId={environment.google} //CLIENTID NOT CREATED YET
					buttonText="LOGIN WITH GOOGLE"
					onSuccess={onLogin}
					onFailure={onLogin}
					className={classes.login}
				/>
			</Grid>
		</Grid>
	</Container>
));
export default withStyles(styles)(Login);

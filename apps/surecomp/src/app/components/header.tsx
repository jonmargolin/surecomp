import React from 'react';
import { AppBar } from '@material-ui/core/';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = () => ({
appBar:{

  'z-index': 9990
},
 userImg: {
    width: '30px',
   height: '30px',
   'background-size': 'contain',
   'border-radius': '50%'
 },
 logo:{
   backgroundImage: `url(../../assets/images/logo.jpeg)`,
   'background-size': 'contain',
   width: '30px',
   height: '30px',
   'margin-left': 'auto',
   'border-radius': '50%'
 }
});
interface Iprops {
  onLogOut: () => void;
  imageUrl: string
  classes?: any,
  parentClasses?: any
}

export  const Header =  React.memo( ({imageUrl, classes, onLogOut, parentClasses}:Iprops) => (
    <AppBar className={parentClasses.appBar} position="fixed">
      <Toolbar>
        <div>
        </div>
        <div className={classes.userImg} style={{backgroundImage: `url(${imageUrl})` }}>
        </div>
        <Button onClick={onLogOut} color="inherit">Logout</Button>
        <div className={classes.logo}>
        </div>
      </Toolbar>
    </AppBar>
))
export default withStyles(styles)(Header);

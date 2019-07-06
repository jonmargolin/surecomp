import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { createStyles, Theme } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  }),
);
export const SideMenu: any =({onChange}) =>{
  const classes = useStyles()
  return(
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
        {['wizard', 'Starred', 'email', 'Drafts'].map((text) => (
          <ListItem onClick={onChange} button key={text}>
            <ListItemText  primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
export default SideMenu

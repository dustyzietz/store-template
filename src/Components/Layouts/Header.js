import React from 'react';
import { Toolbar, Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
  }));
   
export default function Header() { 
    const classes = useStyles();
    return (
        <AppBar position="static">
        <Toolbar>
          <Typography variant='h6' color='inherit'>
            Exercise Database
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

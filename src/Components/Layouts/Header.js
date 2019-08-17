import React from 'react';
import { Toolbar, Typography, AppBar } from '@material-ui/core';

import CreateDialog from '../Exercises/Dialog'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

   
export default ({ muscles, onExerciseCreate }) => { 
  const classes = useStyles();
    return (
        <AppBar position="static">
        <Toolbar>
          <Typography variant='h6' color='inherit' className={classes.title} >
            Exercise Database
          </Typography>
          <CreateDialog
          onCreate={onExerciseCreate} 
          muscles={muscles}
          />
        </Toolbar>
      </AppBar>
    )
}

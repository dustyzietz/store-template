import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';





const styles = {
paper: {
    padding: '20px',
    margin: '10px',
    height: 500,
    overflowY: 'auto',

}
}

export default ({ exercises }) => 
<Grid container>
    <Grid item xs>
    <Paper elevation={5} style={styles.paper} >
    {exercises.map(([group, exercises]) =>
    <Fragment>
        <Typography
        variant='h6'
        style={{textTransform: 'capitalize'}}
        >
            {group}
        </Typography>
        <List component='ul'>
            {exercises.map(({ title }) =>
            <ListItem>
                <ListItemText primary={title} />
            </ListItem>
            )}
        </List>
        </Fragment>
        )}
    </Paper>
    </Grid>
    <Grid item xs>
    <Paper elevation={5} style={styles.paper} >
    <Typography
    variant='h5'>
        Welcome!
        </Typography>
    <Typography
    variant='subtitle1'
    style={{ marginTop: 20 }}>
        Please select an exercise from the list on the left.
        
    </Typography>
    </Paper>
    </Grid>
</Grid>
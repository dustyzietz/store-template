import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import Form from './Form';


const styles = {
paper: {
    padding: '20px',
    margin: '10px',
    height: 500,
    overflowY: 'auto',

}
}

export default ({ exercises, category, onSelect, 
exercise: {
    id, 
    title= 'Welcome!', 
    description= 'Please select an exercise from the list on the left.'
    },
    onDelete,
    onEditSelect,
    editMode
     }) => 
<Grid container>
    <Grid item xs>
    <Paper elevation={5} style={styles.paper} >
    {exercises.map(([group, exercises]) =>
    !category || category === group
    ?<Fragment key={group}>
        <Typography
        variant='h6'
        style={{textTransform: 'capitalize'}}
        >
            {group}
        </Typography>
        <List component='ul'>
            {exercises.map(({ id, title }) =>
            <ListItem 
            key={id}
            button
            onClick={() => onSelect(id)}
            >
                <ListItemText 
                primary={title}
                />
                <ListItemSecondaryAction>
                    <IconButton onClick={() => onEditSelect(id)} aria-label="delete">
                <Edit />
              </IconButton>
                <IconButton onClick={() => onDelete(id)} aria-label="delete">
                <DeleteIcon />
              </IconButton>
              
                </ListItemSecondaryAction>
                
            </ListItem>
            )}
        </List>
        </Fragment>
        : null 
        )}
    </Paper>
    </Grid>
    <Grid item xs>
    <Paper elevation={5} style={styles.paper} >
        {editMode
        ? <Form/>
    : <Fragment>
        <Typography
    variant='h5'>
       {title}
        </Typography>
    <Typography
    variant='subtitle1'
    style={{ marginTop: 20 }}>
       {description}
    </Typography>
    </Fragment>}
    </Paper>
    </Grid>
</Grid>
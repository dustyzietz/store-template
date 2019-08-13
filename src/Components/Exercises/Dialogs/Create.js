
import React, { Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';


export default class extends Component {
  state = {
    open: false,
    title: '',
     
  };

  handleTogle = () => {
    this.setState({
      open : !this.state.open 
    })
  }

 handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

render() {
const {open, title} = this.state ;
return(
<Fragment>
<Fab onClick={this.handleTogle} aria-label="add"  size="small">
        <AddIcon />
      </Fab>
<Dialog onClose={this.handleTogle} open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
            Create a new Exercise
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           Please fill out the form below
          </DialogContentText>
        <form>
        <TextField
        id="standard-name"
        label="Title"
        value={title}
        onChange={this.handleChange('title')}
        margin="normal"
      />
        </form>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
</Fragment>
)
}}
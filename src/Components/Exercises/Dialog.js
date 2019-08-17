
import React, { Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Form from './Form';





export default (class extends Component {
  state = {
    open: false,
  };

  handleTogle = () => {
    this.setState({
      open : !this.state.open 
    })
  }

 
render() {
const {open} = this.state ;
     
return(
<Fragment>
<Fab onClick={this.handleTogle} aria-label="add"  size="small">
        <CheckCircleOutline />
      </Fab>
<Dialog onClose={this.handleTogle} open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
            Create a new Exercise
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           Please fill out the form below
          </DialogContentText>
        <Form
        
        />
        </DialogContent>
        <DialogActions>
          <Button 
          onClick={this.handleSubmit}
          variant='contained' 
          color="primary"
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
</Fragment>
)
}}
)
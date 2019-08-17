import React from 'react'; 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    FormControl: {
      width: 500
    }
  }));

export default class extends Component {
   state = {
        title: '',
        description: '',
        muscles: ''  
   };

   handleChange = name => ({ target: { value } }) => 
    this.setState({
       [name]: value }
    )
  ;

  handleSubmit = () => {

    const { exercise } = this.state;
    this.props.onCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
    });
    this.setState({
      open: false,
      exercise: {
        title: '',
        description: '',
        muscles: ''
      }
    })
    
  };


    render() {
        const classes = useStyles();
   const { classes, muscles: categories } = this.props ;
        return <form>
        <TextField
        className={classes.FormControl}
        label="Title"
        value={title}
        onChange={this.handleChange('title')}
        margin="normal"
      />
      <br/>
      
       <FormControl >
        <InputLabel htmlFor="muscles">Muscles</InputLabel>
        <Select
        className={classes.FormControl}
          value={muscles}
          onChange={this.handleChange('muscles')}
          
        >
          {categories.map(category =>
          <MenuItem key={category} value={category}>
          {category}
          </MenuItem>
          )}
        </Select>
      </FormControl>
      <br/>
       <TextField
        label="Description"
        value={description}
        onChange={this.handleChange('description')}
        margin="normal"
        multiline
        rowsMax="4"
        className={classes.FormControl}
      />
      
        </form>
    }
}
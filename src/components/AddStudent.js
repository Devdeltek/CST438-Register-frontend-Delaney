import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


// properties AddStudent is required, function called when Add clicked.
class AddStudent extends Component {
      constructor(props) {
      super(props);
      this.state = {open: false, student:{status: 0} };
    };
    
    handleClickOpen = () => {
      this.setState( {open:true} );
    };

    handleClose = () => {
      this.setState( {open:false} );
    };

    handleChange = (event) => {
      const {name,value} = event.target;
      this.setState((prevState) => ({
        student:{
          ...prevState.student,
          [name]:value
        }
      }));
    }

  // Save course and close modal form
    handleAdd = () => {
       this.props.addStudent(this.state.student);
       this.handleClose();
    }

    render()  { 
      return (
        <div align="right" >
        <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
          Add Student
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Add Student</DialogTitle>
          <DialogContent  style={{paddingTop: 20}} >
            <TextField autoFocus fullWidth label="student_name" name="student_name" onChange={this.handleChange}  />
            <TextField autoFocus fullWidth label="student_email" name="student_email" onChange={this.handleChange}  /> 
          </DialogContent>
          <DialogActions>
            <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
            <Button id="Add" color="primary" onClick={this.handleAdd}>Add</Button>
          </DialogActions>
        </Dialog>
      </div>
      ); 
    }
}

// required property:  addCourse is a function to call to perform the Add action
AddStudent.propTypes = {
  addStudent : PropTypes.func.isRequired
}

export default AddStudent;
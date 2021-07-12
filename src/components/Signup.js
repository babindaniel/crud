import React, { useCallback } from 'react';
import useSignUpForm from './CustomHooks';
import { useHistory } from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



const Signup = () => {

  const history = useHistory();
  // const Register = () => history.push('/dashboard');
  const classes = useStyles();

  const Register = () => {

    if (inputs.firstName == '') {
      alert('Please enter first name');
      return false;
    } else if (inputs.lastName == '') {
      alert('Please enter last name');
      return false;
    } else if (inputs.email == '') {
      alert('please enter email');
      return false;
    } else if(!validateEmail(inputs.email)) {
      alert('please enter valid email');
      return false;
    }else if (inputs.password1 == '') {
      alert('Please enter password');
      return false;
    } else {
      
    }
    history.push('/login');
    
    function validateEmail(emailField) {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      if (reg.test(emailField) == false) {        
        return false;
      }
      return true;
    }

    
    
  }
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm({ firstName: '', lastName: '', email: '', password1: '' }, Register);
  function doLogin() {
    history.push('/login');
  }
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <TextField id="standard-basic" label="First Name" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
        </div>
        <div>
          <TextField id="" label="Last Name" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
        </div>
        <div>
          <TextField id="" label="Email" type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
        </div>
        <div>
          <TextField id="" label="Password" type="password" name="password1" onChange={handleInputChange} value={inputs.password1} required />
        </div>

        <div>
          <Button className="btn-success" type="submit">Sign Up</Button>
          <Button variant="contained" color="secondary" onClick={doLogin} type="button">Click here to login</Button>
        </div>

      </form>
    </div>


    // <div className="section is-fullheight">
    //   <div className="container">
    //     <div className="column is-4 is-offset-4">
    //       <div className="box">
    //         <form onSubmit={handleSubmit} autoComplete="off">
    //           <div className="field">
    //             <label className="label has-text-centered">First Name</label>
    //             <div className="control">
    //               <input className="input" type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
    //             </div>
    //           </div>
    //           <div className="field">
    //             <label className="label has-text-centered">Last Name</label>
    //             <div className="control">
    //               <input className="input" type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
    //             </div>
    //           </div>
    //           <div className="field">
    //             <label className="label has-text-centered">Email Address</label>
    //             <div className="control">
    //               <input className="input" type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
    //             </div>
    //           </div>
    //           <div className="field">
    //             <label className="label has-text-centered">Password</label>
    //             <div className="control">
    //               <input className="input" type="password" name="password1" onChange={handleInputChange} value={inputs.password1} />
    //             </div>
    //           </div>

    //           <button className="button is-block is-fullwidth is-success" type="submit">Sign Up</button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Signup;
import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
// import useSignUpForm from './CustomHooks';


function formRegister(event) {
    event.preventDefault();
    console.log('form submitted')
}


function Register() {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: 200,
            },
        },
    }));

    const classes = useStyles();

    return (
        <div>
            <h4>Register</h4>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={formRegister}>
                <p>
                    <TextField id="fname" label="First Name"
                        validations={["required", "min: 5"]} />

                    <Input defaultValue="" inputProps={{ 'aria-label': 'description' }} />
                </p>
                <p>
                    <TextField id="lname" label="Last Name" />
                </p>
                <p>
                    <TextField id="email" label="Email" />
                </p>
                <p>
                    <TextField id="password" label="Passowrd" />
                </p>
                <p>
                    <Button type="submit">Register</Button>
                </p>
            </form>
        </div>
    )
}

export default Register

import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Profile = () => {

    const classes = useStyles();
    const history = useHistory();
    const redirectPage= () => {
        history.push('./vote');
    }
    return (
        <div>
            <h2>Profile Summary</h2>
            <Grid container spacing={4}>
                <Grid item xs={2}>                    
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={4}>                    
                        <Grid item xs={2}>
                            Name
                        </Grid>  
                        <Grid item xs={4}>     
                        William Smith               
                        </Grid>              
                    </Grid>   
                    <Grid container spacing={4}>                    
                        <Grid item xs={2}>
                            Mobile
                        </Grid>  
                        <Grid item xs={4}>     
                        9876543210               
                        </Grid>              
                    </Grid> 
                    <Grid container spacing={4}>                    
                        <Grid item xs={2}>
                            Email
                        </Grid>  
                        <Grid item xs={4}>     
                        smith@gmail.com               
                        </Grid>              
                    </Grid> 
                    <Grid container spacing={4}>                    
                        <Grid item xs={2}>
                            Address
                        </Grid>  
                        <Grid item xs={4}>     
                        Chennai             
                        </Grid>              
                    </Grid> 
                    <Grid container spacing={4}>                    
                        <Grid item xs={2}>
                            DOB
                        </Grid>  
                        <Grid item xs={4}>     
                        19 Dec 1973             
                        </Grid>              
                    </Grid> 
                </Grid>  
                <Grid item xs={2}>   
                    <Button onClick={redirectPage}>Click</Button>                 
                </Grid>              
            </Grid>            
        </div>
    )
}

export default Profile;
import '../App.css';
import React, { useState } from 'react';
import {  Box , Typography , TextField,Button} from '@mui/material';
import { useHistory } from 'react-router';
import AuthService from '../services/auth.services';

export default function Login(){

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const history = useHistory();

    const required = value => {
        if (!value) {
          return (
            <div className="alert alert-danger" role="alert">
              This field is required!
            </div>
          );
        }
      };

      function onChangeEmail(e) {
        setEmail(e.target.value);
      }
      function onChangePassword(e) {
        setPassword(e.target.value);
      }

        
    function handleSubmit(e){
        AuthService.login(Email, Password).then(      
            () => {                
                history.push("/student");
                window.location.reload();
            },
            error => {
                const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            }

            );
        } 


  

return(

<Box className='registerBox'>
<Typography variant="h1" >
        Login
      </Typography>


      <TextField id="standard-basic" label="Email" variant="standard" validations={required} onChange={(e) => onChangeEmail(e)}/><br/>
      <TextField id="standard-basic" label="Password" variant="standard" validations={required} onChange={(e) => onChangePassword(e)}/><br/><br/>
      <Button variant="contained" onClick={(e)=> handleSubmit(e)} > Submit</Button>

</Box>


)
}
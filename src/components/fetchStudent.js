import '../App.css';
import authHeader from '../services/auth-header';
import React, { useState } from 'react';
import {  Box , Typography , TextField,Button ,Dialog ,DialogTitle} from '@mui/material';
import axios from 'axios';
import { API_URL } from './config';

export default function FetchStudent(){
    const date = new Date();
    const [ID, setID] = useState('');
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [RegisterDate, setRegisterDate] = useState('');

    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    function handleClickOpen1(){
      setOpen1(true)
    }

    function handleClickOpen2(){
        setOpen2(true)
      }
  
    function handleClose1 (){
      setOpen1(false)
    }

    function handleClose2 (){
        setOpen2(false)
      }

    const required = value => {
        if (!value) {
          return (
            <div className="alert alert-danger" role="alert">
              This field is required!
            </div>
          );
        }
      };
      
    const headers = authHeader();
      
    

      function onChangeId(e) {
        setID(e.target.value);
      }

      
    function handleSubmit(e){
        

        axios.get(API_URL + '/' +ID+'/info', {headers : headers}).then((res) => {
            setName(res.data.Name) ;
            setEmail(res.data.Email);
            setRegisterDate(res.data.RegisterDate);
        handleClickOpen1();  
        }).catch((res) =>{
                console.log('error');
                    handleClickOpen2();    
        })
        
        } 


  

return(

<Box className='registerBox'>
<Typography variant="h1" >
        Fetch Student 
      </Typography>
      <Typography variant="body1" >
        Enter the ID of the student to be fetched
      </Typography>

      <TextField id="standard-basic" label="ID" variant="standard" validations={required} onChange={(e) => onChangeId(e)}/><br/><br/>
      <Button variant="contained" onClick={(e)=> handleSubmit(e)}>Submit</Button>

      <Typography variant="body1" >
        Name = {Name} <br/>
        Email = {Email} <br/>
        Registration Date = {RegisterDate}

      </Typography>


      <div>
        <Dialog open={open1} onClose={()=> handleClose1}>
            <DialogTitle>Student has been fetched!</DialogTitle>
            <Button onClick={handleClose1} autoFocus>
            Got it!
          </Button>
          </Dialog>

        <Dialog open={open2} onClose={()=> handleClose2}>
        <DialogTitle>Error!</DialogTitle>
        <Button onClick={handleClose2} autoFocus>
            Got it!
          </Button>
        </Dialog>
        </div>

</Box>


)
}
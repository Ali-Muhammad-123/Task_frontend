import '../App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {AppBar,Toolbar,Typography,IconButton,Button,} from '@mui/material';
import AuthService from '../services/auth.services';

const Navbar = () => {
    
const [User, setUser] = useState(AuthService.getCurrentUser());

    

  return (
      
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          
        </IconButton>
        <Typography variant="h6" >
          Student Manager
        </Typography>
        <Button component={Link} to={'/register'} color="inherit" className='menuButton'>
          {User!== undefined? 'Signup': '' }
        </Button>
        <Button component={Link} to={'/'} color="inherit" className='menuButton'>
        {User!== undefined? 'Logout ': 'Login' }
        </Button>

      </Toolbar>

    </AppBar>
  );
};

export default Navbar;
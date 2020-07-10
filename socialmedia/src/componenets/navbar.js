import React, { Component } from 'react'

// material
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
export class navbar extends Component {
    render() {
        return (
           <AppBar position = 'fixed'>
               <Toolbar>
                    <Button color="inherit">LogIn</Button>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">SignUp</Button>
               </Toolbar>
           </AppBar>
        )
    }
}

export default navbar

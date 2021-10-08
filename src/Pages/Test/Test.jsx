import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
    root:{
    
    }
}))

const menuItems = [
    <Link to="/" >Home</Link>,
    <Link to="/dashboard" >Dashboard</Link>,
    <Link to="/signout" >Sign out</Link>,
]

const Test = () => {
    const classes = useStyles();
    console.log(process.env)

    return (
        <div className={classes.root}>
            <form>
            <TextField
              type="url"      
            inputProps={{
                pattern: "(http|https)://(.)+[.](.)+"
            }}        
              required
              fullWidth
              label="URL"
            />
            <button type="submit">asd</button>
            </form>
            
        </div>
    )
}

export default Test;
import React from 'react';
import { makeStyles } from '@material-ui/core';
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
            <BurgerMenu items={menuItems}>

            </BurgerMenu>
            
        </div>
    )
}

export default Test;
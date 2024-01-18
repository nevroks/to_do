import React from 'react';
import classes from './myInput.module.css'
const MyInput = (props) => {
    return (
        <input type={props.type}  {...props} className={classes.myInp} />
    );
};

export default MyInput;
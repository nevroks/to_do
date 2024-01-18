import React from 'react';
import classes from "./myButton.module.css";
const MyButton = ({children, ...props}) => {
    console.log('button rendered')
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;
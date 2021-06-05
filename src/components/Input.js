import React from 'react';
import TextField from '@material-ui/core/TextField';
import { FormHelperText } from '@material-ui/core';


export const Input = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
        <>
            <TextField type={type} {...input} id="standard-basic" label={label}/>
            {
                touched && error && (
                    <FormHelperText className='error'>Field {label} is {error}</FormHelperText>
                )
            }
        </>
        
    )
}
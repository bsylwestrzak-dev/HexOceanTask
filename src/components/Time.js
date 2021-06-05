import React from 'react';
import TextField from '@material-ui/core/TextField';

export const Time = ({input}) => {
    return (
        <>
            <TextField
                {...input}
                id="time"
                label="Preparation time"
                type="time"
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 1, 
                }}
            />
        </>
    )
}
import React from 'react';
import { Field } from 'redux-form';
import { Input } from '../Input';
import { required } from '../../functions/validation';

export const Sandwich = (props) => {
    return (
        <div className='dishOption'>
            <p className='dishHeader'>Specify your sandwich:</p>
            <Field name='slices_of_bread' component={Input} label = 'Slices of bread' validate={required} /> 
        </div>
    )
}
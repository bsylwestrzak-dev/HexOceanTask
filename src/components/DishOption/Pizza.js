import React from 'react';
import { Field } from 'redux-form';
import { Input } from '../Input';
import { required } from '../../functions/validation';

export const Pizza = (props) => {
    return (
        <div className='dishOption'>
            <p className='dishHeader' style={{paddingBottom: '20px'}}>Specify your pizza:</p>
            <Field name='no_of_slices' component={Input} label = 'Number of slices' type='number' validate={required} /> 
            <Field name='diameter' component={Input} label= 'Diameter' type='number' validate={required} />
        </div>
    )
}
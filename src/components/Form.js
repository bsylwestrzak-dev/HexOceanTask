import React from 'react'
import { Input } from './Input';
import { Time } from './Time';
import { DishType } from './DishType';
import { DishOption } from './DishOptions';
import { reduxForm, Field } from 'redux-form';
import { getCurrentTime } from '../functions/getCurrentTime';
import { required } from '../functions/validation';
import { useSelector } from 'react-redux';
import Toast from '../utilities/Toast';


const Form = ({handleSubmit}) => {
    const {type} = useSelector(({ dishTypeReducer }) => dishTypeReducer);
    const {spiciness_scale} = useSelector(({ dishTypeReducer }) => dishTypeReducer);
    const onSubmit = async (data) => {
        data.type = type
        switch(type){
            case 'pizza':
                data.no_of_slices = parseInt(data.no_of_slices)
                data.diameter = parseFloat(data.diameter)
                break;
            case 'soup':
                data.spiciness_scale = spiciness_scale
                break;
            case 'sandwich':
                data.slices_of_bread = parseInt(data.slices_of_bread)
                break;
            default:
                break;    
        }
        try{
            const response = await fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', {
                method: "POST",
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            const _data = await response.json();
            if(response.status !== 200){
                throw _data
            } else {
                Toast.toastMessage('Your order has been placed', 'success')
                console.log(_data)
            }
        }
        catch(err){
            Object.keys(err).forEach(key => {
                Toast.toastMessage(err[key], 'error')
            });
        }
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className='wrap'>
                <div className='dishname'>
                    <Field name='name' component={Input} label='Dish name' validate={required}/>
                </div>
                <Field name='preparation_time' component={Time} validate={required}/>
            </div>
            <DishType />
            <DishOption />
            <button type='submit' className='btn'>Order</button>
        </form>
    )
}

export default reduxForm({
    form: 'test',
    initialValues: {
        preparation_time: getCurrentTime()
      }
})(Form);
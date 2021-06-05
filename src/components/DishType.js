import React from 'react';
import { Dish } from './Dish';
import { useSelector } from 'react-redux';

export const DishType = () => {
    const {type} = useSelector(({ dishTypeReducer }) => dishTypeReducer);
    const activeStyle = "blue auto 5px"
    return (
        <div className='dishSection'>
            <p className='chooseDishTypeText'>Choose Dish Type:</p>
            <div className='dishWrap'>
                <Dish style={type === 'pizza' && activeStyle} className='dish pizza' dishName='pizza' />
                <Dish style={type === 'woup' && activeStyle} className='dish soup' dishName='soup' />
                <Dish style={type === 'sandwich' && activeStyle} className='dish sandwich' dishName='sandwich' />
            </div>
        </div>
    )
}
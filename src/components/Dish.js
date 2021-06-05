import React from 'react';
import { useDispatch } from 'react-redux';
import { SET_DISH_TYPE } from '../redux/actions/index';

export const Dish = ({ dishName, className, style }) => {
    const dispatch = useDispatch();
    return (
        <div className='dishTypeSingleWrap'>
            <p className='dishName'>{dishName}</p>
            <div style={{outline: style}} onClick={() => dispatch(SET_DISH_TYPE(dishName))} className={className}></div>
        </div>
    )
}
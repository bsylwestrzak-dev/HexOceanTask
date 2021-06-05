import React from 'react';
import { Soup } from './DishOption/Soup'
import { Pizza } from './DishOption/Pizza';
import { Sandwich } from './DishOption/Sandwich';
import { useSelector } from 'react-redux';


export const DishOption = () => {
    const {type} = useSelector(({ dishTypeReducer }) => dishTypeReducer);
    return (
        <div>
          {type === 'pizza' && <Pizza />}
          {type === 'soup' && <Soup />}
          {type === 'sandwich' && <Sandwich />}
        </div>
    )
}
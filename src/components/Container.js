import React from 'react';
import hexoceanWave from '../assets/hexoceanWave.png';
import Form  from './Form';
import { HeaderAndLogo } from './HeaderAndLogo';

export const Container = () => {
    return (
        <div className='container'>
            <div className='leftSide' />
            <div className='rightSide'>
                <HeaderAndLogo />
                <Form/>
            </div>
            <img className='wave' src={hexoceanWave} alt='hexoceanWave' />
        </div>
    )
}
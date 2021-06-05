import React from 'react';
import hexoceanLogo from '../assets/hexoceanLogo.png';

export const HeaderAndLogo = () => {
    return (
        <div className='headerAndLogo'>
            <h3 className='headerText'>BRINGING GOOD FOOD INTO YOUR EVERYDAY</h3>
            <img className='logo' src={hexoceanLogo} alt='Hex Ocean Logo' />
        </div>
    )
}
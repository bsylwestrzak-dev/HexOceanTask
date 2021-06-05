import React from 'react';
import './App.css';
import { Container } from './components/Container';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <div className='App'>
      <Container />
      <ToastContainer
                position="top-right" 
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover> 
      </ToastContainer>
    </div>
  )
}

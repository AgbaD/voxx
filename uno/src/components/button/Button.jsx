import React from 'react';
import './button.css';

const Button = ({ name }) => {
  return (
    <button type='button' className='button'>{name}</button>
  )
}

export default Button
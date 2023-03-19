import React from 'react';
import './card.css';


const Card = ({ title, content, img }) => {
  return (
    <div className='card' style={{ background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${img})` }}>
        <h5>{title}</h5>
        <p>{content}</p>
    </div>
  )
}

export default Card
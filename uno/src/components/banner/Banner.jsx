import React from 'react';
import './banner.css';

const Banner = ({ location }) => {
  return (
    <div>
        <h1>{location}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ab amet suscipit tempore sunt veritatis iste exercitationem. 
        Laboriosam, omnis dolorem. Saepe laborum ipsum debitis voluptas 
        vel ullam porro! Nihil, ut illum.</p>
    </div>
  )
}

export default Banner
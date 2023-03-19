import React from 'react';
import './header.css';

import { Button, Card, Banner } from '../';
import pic1 from '../../img/pic-1.png'
import pic2 from '../../img/pic-2.png'
import pic3 from '../../img/pic-3.png'
import pic4 from '../../img/pic-4.png'

const Header = ({ location }) => {
  return (
    <div className='header'>
      <div className="col">
        <Banner location={location} />
        <Button name='Explore'/>
      </div>

      <div className="col">
        <Card title="Think & Grow Rich" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Provident soluta sint itaque est officiis nostrum neque." img={pic1} />
        <Card title="Science of Getting Rich" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Provident soluta sint itaque est officiis nostrum neque." img={pic2} />
        <Card title="The Psychopath's Test" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Provident soluta sint itaque est officiis nostrum neque." img={pic3} />
        <Card title="Snakes in Suits" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Provident soluta sint itaque est officiis nostrum neque." img={pic4} />
      </div>
    </div>
  )
}

export default Header
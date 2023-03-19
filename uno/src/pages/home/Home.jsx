import React from 'react'
import background from '../../img/background.png';
import { Navbar, Header } from '../../components';

const Home = () => {
    return (
        <div className='container' style={{
            background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${background})`,
        }}>
            <Navbar />
            <Header location='Home'/>
        </div>
    )
}

export default Home
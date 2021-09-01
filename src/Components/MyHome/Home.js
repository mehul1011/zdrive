import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'

function Home(){
    return (
        <div className="home-container">
            <h1 style={{textAlign: 'center'}}>Qride</h1>
            <Link to="/book">
                <button className="home-button">Book</button>
            </Link>
            <Link to="/trips">
                <button className="home-button">Trips</button>   
            </Link>
        </div>
    );
}

export default Home;
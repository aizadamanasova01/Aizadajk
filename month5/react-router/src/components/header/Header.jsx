import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <nav>
            <ul 
            style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "center",
                columnGap: "15px",
                padding: "20px 0px",
                background: "gray",
                 }}>
                <li>
                    <Link to='/'> Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/info'>Info</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default Header
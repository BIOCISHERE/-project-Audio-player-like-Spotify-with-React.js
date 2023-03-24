import React from "react";
import { BsSpotify } from 'react-icons/bs'

const Navbar = () => {
    return (
    <nav className="navbar bg-body-tertiary bg-dark">
        <div className="container-fluid">
            <span className="trackSelected navbar-brand mx-auto"><BsSpotify className="me-2" />Audio player like spotify with React.js</span>
        </div>
    </nav>
    );
};

export default Navbar
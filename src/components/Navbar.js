import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleInfo, faArrowRight, faHand, faTag } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleSwitch = () => {setIsDarkMode(!isDarkMode);};

  return (
    <div className='backgorund pt-4'>
        <div class="container-card justify-content-center">
            <div className="navbar-card row">
            <div className="navbar-brand w-25 mt-2">
                <img className="logo-size" src="logo.png" alt="interiorVerse" />
                <div className="col-2">
                    <span className="fs-3 text-white fw-bold">interiorVerse</span>
                    <h6 className="text-white">by interioXr</h6>
                </div>
            </div>
            <div className="navbar-links w-75">
                <button className='fw-bold'><FontAwesomeIcon icon={faHouse} size="1x" className='mx-1'/>Home</button>
                <div className="dropdown"
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => setDropdownVisible(false)}
                >
                    <button className='fw-bold'><FontAwesomeIcon icon={faCircleInfo} size="1x" className='mx-1'/>About Us</button>
                    {dropdownVisible && (
                        <div className="dropdown-content">
                            <div className='down-content'>
                                <a className='text-white fw-bold' href="#our-team">Our Team</a>
                            </div>
                            <a className='text-white fw-bold p-2' href="#our-story">Our Story</a>
                        </div>
                    )}
                </div>
                <button className='fw-bold'><FontAwesomeIcon icon={faTag} size="1x" className='mx-1'/>Pricing</button>
                <button className='fw-bold'><FontAwesomeIcon icon={faArrowRight} size="1x" className='mx-1'/>interioXr</button>
                <button className='fw-bold'><FontAwesomeIcon icon={faArrowRight} size="1x" className='mx-1'/>WebApp</button>
                <button className='fw-bold'><FontAwesomeIcon icon={faArrowRight} size="1x" className='mx-1'/>iOS/Android</button>
                <button className='fw-bold'><FontAwesomeIcon icon={faHand} size="1x" className='mx-1'/>Contact Us</button>
                <div className={`toggle-switch ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleSwitch}>
                    <div className="toggle-thumb">
                    {isDarkMode ? <img src='sun.png' alt="sun" className='icon-logo-2' /> : <img src='moon.png' alt="moon" className='icon-logo-2' />}
                    </div>
                </div>
                {/* <div className='h-60 mt-1'>
                    <img className="icon-logo-2 img-card" src="moon.png" alt="interiorVerse" />
                    <img className="icon-logo-2 img-card-2" src="moon.png" alt="interiorVerse" />
                </div> */}
            </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;

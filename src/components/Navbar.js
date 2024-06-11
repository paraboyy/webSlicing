import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleInfo, faArrowRight, faHand, faTag } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
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
                <button className='fw-bold'><FontAwesomeIcon icon={faCircleInfo} size="1x" className='mx-1'/>About Us</button>
                <button className='fw-bold'><FontAwesomeIcon icon={faTag} size="1x" className='mx-1'/>Pricing</button>
                <button className='fw-bold'><FontAwesomeIcon icon={faArrowRight} size="1x" className='mx-1'/>interioXr</button>
                <button className='fw-bold'><FontAwesomeIcon icon={faArrowRight} size="1x" className='mx-1'/>WebApp</button>
                <button className='fw-bold'><FontAwesomeIcon icon={faArrowRight} size="1x" className='mx-1'/>iOS/Android</button>
                <button className='fw-bold'><FontAwesomeIcon icon={faHand} size="1x" className='mx-1'/>Contact Us</button>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;

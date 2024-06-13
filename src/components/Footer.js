import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faEnvelope, faLocationDot, faMapMarked, faPhone, } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className='background'>
            <div className='con'></div>
            <div className='dp-flex p-11 pt-5'>
                <div className='w-25'>
                    <div className='dp-flex'>
                        <img className="logo-size" src="logo.png" alt="interiorVerse" />
                        <div className="">
                            <span className="text-1">interiorVerse</span>
                            <h6 className="text-2 text-start">by interio<span className='fw-bold'>Xr</span></h6>
                        </div>
                    </div>
                    <p className='text-justify icon-text-2 mt-3'>Welcome to interiorVerse, where design dreams come to life in breathtaking virtual reality! Step into a world of hyper-realistic and fully immersive VR walkthroughs that redefine how we envision and create interior spaces. Welcome to interiorVerse – where your dream spaces await!</p>
                </div>

                <div className='w-25 p-7'>
                    <p className='bold text-start'>Get in Touch</p>
                    <div className='dp-flex'>
                        <FontAwesomeIcon icon={faLocationDot} size="1x" className='mx-2 text-pupple'/>
                        <p className='text-start icon-text'>1004, 10th Floor, Galleria Mkt.,DLF Phase IV, Gurugram</p>
                    </div>
                    <p className='text-start icon-text'><FontAwesomeIcon icon={faEnvelope} size="1x" className='mx-2 text-pupple'/>info@interioXr.com</p>
                    <p className='text-start icon-text'><FontAwesomeIcon icon={faPhone} size="1x" className='mx-2 text-pupple'/>+91 9560013324</p>
                </div>

                <div className='w-25 p-7'>
                    <p className='bold text-start'>Recent Posts</p>
                    <div className='dp-flex'>
                        <img className="icon-logo" src="post-card-1.png" alt="interiorVerse" />
                        <p className='text-start icon-text'>"Designing in a New Dimension: Unleashing Your Creativity with interiorVerse"</p>
                    </div>
                    <div className='dp-flex mt-4'>
                        <img className="icon-logo" src="pos-card-2.png" alt="interiorVerse" />
                        <p className='text-start icon-text'>"Designing in a New Dimension: Unleashing Your Creativity with interiorVerse"</p>
                    </div>
                </div>

                <div className='w-25 p-7'>
                    <p className='bold text-start'>Join Our Newsletters</p>
                    <span className='text-start icon-text dp-flex'>Your Email</span>
                    <input className='p-4 fs-7' placeholder='Enter Your Email'></input>
                    <button className='btn w-100 mt-3 fw-bold'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
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
                        <img className="logo-size-2" src="logo.png" alt="interiorVerse" />
                        <div className="">
                            <span className="text-1 text-heavy">interiorVerse</span>
                            <h6 className="text-2 text-start text-semibold">by interio<span className='text-extrabold'>Xr</span></h6>
                        </div>
                    </div>
                    <p className='text-justify text-bold icon-text-2 mt-3'>Welcome to interiorVerse, where design dreams come to life in breathtaking virtual reality! Step into a world of hyper-realistic and fully immersive VR walkthroughs that redefine how we envision and create interior spaces. Welcome to interiorVerse – where your dream spaces await!</p>
                </div>

                <div className='w-25 p-7'>
                    <p className='text-bold text-start'>Get in Touch</p>
                    <div className='dp-flex'>
                        <img className="icon-size-2 mx-2" src="Group.svg" />
                        <p className='text-start text-bold icon-text ml-7'>1004, 10th Floor, Galleria Mkt.,DLF Phase IV, Gurugram</p>
                    </div>
                    <div className='dp-flex'>
                        <img className="icon-size-2 mx-2" src="Mail.svg" />
                        <p className='text-start text-bold icon-text'>info@interioXr.com</p>
                    </div>
                    <div className='dp-flex'>
                        <img className="icon-size-2 mx-2" src="Phone.svg" />
                        <p className='text-start text-bold icon-text'>+91 9560013324</p>
                    </div>
                </div>

                <div className='w-25 p-7'>
                    <p className='text-Black text-start'>Recent Posts</p>
                    <div className='dp-flex'>
                        <img className="icon-logo" src="post-card-1.png" alt="interiorVerse" />
                        <p className='text-start text-bold icon-text'>"Designing in a New Dimension: Unleashing Your Creativity with interiorVerse"</p>
                    </div>
                    <div className='dp-flex mt-4'>
                        <img className="icon-logo" src="pos-card-2.png" alt="interiorVerse" />
                        <p className='text-start text-bold icon-text'>"The Future of Design Visualization: Embracing Hyper-Realism with interiorVerse"</p>
                    </div>
                </div>

                <div className='w-25 p-7'>
                    <p className='text-Black text-start'>Join Our Newsletters</p>
                    <span className='text-start icon-text dp-flex text-semibold'>Your Email</span>
                    <input className='p-3 fs-7' placeholder='Enter Your Email'></input>
                    <button className='btn w-100 mt-3 fw-bold'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
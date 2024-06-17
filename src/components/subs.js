import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../views/Home.css';

const Subs = () => {
    return (
        <div>
            <div className='p-60'>
                <div className='container-sub padding-10'>
                    <p className='text-sub text-end text-heavy' data-text="Subscribe To Our">Subscribe To Our</p>
                    <div className='dp-flex mt-n-75'>
                        <div className='w-65'>
                            <video 
                                src='card-video.mp4' 
                                className='logo-sub mt-5 dp-flex' 
                                controls 
                                // autoPlay 
                                muted
                                // loop
                            >
                                and also I can see different sizes and spaces and etc... on your work.
                            </video>                        
                        </div>
                        <div className='w-35'>
                            <p className='text-sub text-end mb-5 text-heavy'>Updates</p>
                            <p className='text-sub-des text-end text-semibold'>Stay in the loop with latest developments as we welcome the future, together.</p>
                            <div className='dp-flex mb-4 mt-4 justify-content-end'>
                                <img className="icon-size w-15 mx-2" src="Play Circle.png" alt="Play Icon" />
                                <span className='text-white text-bold text-end text-15'>View Past Newsletters</span>
                            </div>
                            <div className='row'>
                                <input className='text-white text-center w-75 container-email' placeholder='Email Address'></input>
                                <p className='text-white text-center w-32 text-Black container-sing'>Sign Up!<FontAwesomeIcon className='mx-1' icon={faArrowRight} size="1x"/></p>
                            </div>
                        </div>
                    </div>
                    <div className='line-2'></div>
                </div>
            </div>
        </div>
    );
};

export default Subs;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import '../views/Home.css';

const Subs = () => {
    return (
        <div>
            <div className='mt-5 p-50 mb-5'>
                <div className='container-sub padding-10'>
                    <p className='text-sub text-end' data-text="Subscribe To Our">Subscribe To Our</p>
                    <div className='dp-flex'>
                        <div className='w-65'>
                            <img src='imgsub.png' className='logo-sub'/>
                        </div>
                        <div className='w-35'>
                            <p className='text-sub text-end'>Updates</p>
                            <p className='text-sub-des text-end'>Stay in the loop with latest developments as we welcome the future, together.</p>
                            <p className='text-white text-end fs-5'><FontAwesomeIcon className='mx-2' icon={faCirclePlay} size="1x"/>View Past Newsletters</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subs;
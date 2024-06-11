import React from 'react';
import './Home.css';

const Home = () => {
    return(
        <div>
            <div className='mt-5 dp-flex justify-content-center'>
                <div className='w-50'>
                    <p className='content-border fw-bold'>Exprole Our Virtual Realities:</p>
                    <span className='font-1 text-white'>The </span>
                    <span className='font-1 text-white fw-bold line'>interiorVerse</span>
                    <p className='font-1 text-white'>Showcase Collection</p>
                </div>
            </div>

            <div className='card-home mb-4 row'>
                <div className='w-50 justify-content-center p-50'>
                    <p className='font-2 text-white text-justify'>Welcome to the <span className='fw-bold'>interiorVerse Showcase Collection.</span>
                    Step into a world of <span className='fw-bold'>imagination</span> with our VR enviroments. From chic bedroom to
                    modern kitchens, our <span className='fw-bold'> Showcase inspire & captivate.</span></p>

                    <p className='font-2 text-white text-justify mt-5'>perfect for architects, designers, &
                    home ownwers, our VR walkthroughs bring <span className='fw-bold'>your visions to life</span>
                     with stunning <span className='fw-bold'>realism</span></p>

                    <button className='btn dp-block mt-5'>See playlist</button>
                </div>
                <div className='w-50'>
                    <div className='row'>
                        <div class="card c-width mt-2">
                            <img src="card.png" className="logo" alt="logo" />
                        </div>
                        <div class="card c-width mt-2">
                            <img src="card.png" className="logo" alt="logo" />
                        </div>
                    </div>
                    <div className='row'>
                        <div class="card c-width mt-2">
                            <img src="card.png" className="logo" alt="logo" />
                        </div>
                        <div class="card c-width mt-2">
                            <img src="card.png" className="logo" alt="logo" />
                        </div>
                    </div>
                    <div className='row'>
                        <div class="card c-width mt-2">
                            <img src="card.png" className="logo" alt="logo" />
                        </div>
                        <div class="card c-width mt-2">
                            <img src="card.png" className="logo" alt="logo" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-7 row mb-4 sec-home'>
                <div className='p-50 section-text w-35'>
                    <p className='text-white text-end'> ---- </p>
                    <p className='text-white fw-bold font-72 text-start'>Exprole Collection</p>
                    <p className='text-white text-justify'>Discover the <span className='fw-bold'>future</span> of interior design and architectural visualization with interiorVerse.
                     Exprole our Showcase models, <span className='fw-bold'> experience the cutting-edge technology,</span> and see for yourself how VR can
                     <span className='fw-bold'> transform your design</span> process</p>
                </div>
                <div className='d-flex section-card'>
                    <div className='card mx-2'>
                        <img src="cardphoto.png" className="logo" alt="logo" />
                        <div className='card-body'>
                            <p className='p-2 card-titlle text-start fw-bold'>iVr's Showcase Series . Bakery/Pastry shop . SC05</p>
                            <p className='p-2 card-description text-justify'>Immerse yourself in this luxurios enviroment with our VR walkthroughs
                            . See how chic black tones and elegant design create a stylish, serene space</p>
                        </div>
                    </div>
                    <div className='card mx-2'>
                        <img src="cardphoto.png" className="logo" alt="logo" />
                        <div className='card-body'>
                            <p className='p-2 card-titlle text-start fw-bold'>iVr's Showcase Series . Bakery/Pastry shop . SC05</p>
                            <p className='p-2 card-description text-justify'>Immerse yourself in this luxurios enviroment with our VR walkthroughs
                            . See how chic black tones and elegant design create a stylish, serene space</p>
                        </div>
                    </div>
                    <div className='card mx-2'>
                        <img src="cardphoto.png" className="logo" alt="logo" />
                        <div className='card-body'>
                            <p className='p-2 card-titlle text-start fw-bold'>iVr's Showcase Series . Bakery/Pastry shop . SC05</p>
                            <p className='p-2 card-description text-justify'>Immerse yourself in this luxurios enviroment with our VR walkthroughs
                            . See how chic black tones and elegant design create a stylish, serene space</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import Navbar from '../components/Navbar';
import VideoPlayer from '../components/VideoPlayer';
import Footer from '../components/Footer';
import Subs from '../components/subs';

const Home = () => {
    const [cardIndex, setCardIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const handleLeftClick = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (cardIndex < 1) { // Adjust based on the number of cards minus one
      setCardIndex(cardIndex + 1);
    }
  };
    
    const scrollContainer = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300; // Adjust this value as needed
            if (direction === 'left') {
                scrollContainerRef.current.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            } else if (direction === 'right') {
                scrollContainerRef.current.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    };

    return(
        <div>
            <Navbar />
            <VideoPlayer />
            <div className='mt-5 dp-flex justify-content-center'>
                <div className='w-50'>
                    <p className='content-border text-center'>Explore Our Virtual Realities:</p>
                    <p className='text-center'><span className='font-1 text-white'>The </span>
                    <span className='font-1 text-white text-bold line'>interiorVerse</span></p>
                    <p className='font-1 text-white'>Showcase Collection</p>
                </div>
            </div>

            <div className='card-home mb-4 row'>
                <div className='w-50 justify-content-center p-50'>
                    <p className='font-2 text-justify'>Welcome to the <span className='text-heavy'>interiorVerse Showcase Collection.</span>
                    Step into a world of <span className='text-heavy'>imagination</span> with our VR environments. From chic bedrooms to
                    modern kitchens, our <span className='text-heavy'> Showcase inspire & captivate.</span></p>

                    <p className='font-2 text-justify mt-5'>Perfect for architects, designers, &
                    homeowners, our VR walkthroughs bring <span className='text-heavy'>your visions to life </span>
                     with stunning <span className='text-heavy'>realism</span></p>
                    <a href="https://www.youtube.com/playlist?list=PLTgXgeMBmVcj1jFFeG7VH4luU68SoX_vI">
                        <button class='btn btn-hover dp-block mt-5 text-Black'>
                            <span class="button-text">See playlist</span>
                            <div class="circle circle2"></div>
                            <div class="circle circle1"></div>
                            <img class="icon-size-3 button-text mx-2" src="Arrow-up.svg" alt="interiorVerse" />
                        </button>
                    </a>
                </div>
                <div className='w-50 card-after'>
                    <img className="icon-2" src="Component 11.png" alt="interiorVerse" />
                </div>
            </div>

            <div className='mt-7 row mb-4 sec-home'>
      <div className='p-50 section-text w-35'>
        <div className='button-container-2 row'>
          <button className='button-custom w-15 mr-n-1' onClick={handleLeftClick}>
            <FontAwesomeIcon icon={faArrowLeft} size="2x" className='mx-1 pr-90 text-icon' />
          </button>
          <button className='button-custom w-15' onClick={handleRightClick}>
            <FontAwesomeIcon icon={faArrowRight} size="2x" className='mx-1 text-icon2' />
          </button>
        </div>
        <span className='text-white text-bold font-72 text-start'>Explore</span>
        <p className='text-white text-bold font-72 text-start mt-n-7'>Collection</p>
        <p className='tx-1 text-justify'>
          Discover the <span className='text-heavy'>future</span> of interior design and architectural visualization with interiorVerse.
          Explore our Showcase models, <span className='text-heavy'>experience the cutting-edge technology,</span> and see for yourself how VR can
          <span className='text-heavy'> transform your design</span> process
        </p>
      </div>
      <div className='d-flex section-card-wrapper' style={{ overflow: 'hidden', width: '100%' }}>
        <div className='d-flex section-card' style={{ transform: `translateX(-${cardIndex * 40}%)`, transition: 'transform 0.5s ease' }}>
          <div className='card mx-2'>
            <img src="cardphoto.png" className="logo" alt="logo" />
            <div className='card-body'>
              <p className='p-2 card-title text-start text-bold'>iVr's Showcase Series . Bakery / Pastry shop . SC05</p>
              <p className='p-2 card-description text-justify'>
                Immerse yourself in this luxurious environment with our VR walkthroughs.
                See how chic black tones and elegant design create a stylish, serene space
              </p>
            </div>
          </div>
          <div className='card mx-2'>
            <img src="cardphoto.png" className="logo" alt="logo" />
            <div className='card-body'>
              <p className='p-2 card-title text-start text-bold'>iVr's Showcase Series . Bakery / Pastry shop . SC05</p>
              <p className='p-2 card-description text-justify'>
                Immerse yourself in this luxurious environment with our VR walkthroughs.
                See how chic black tones and elegant design create a stylish, serene space
              </p>
            </div>
          </div>
          <div className='card mx-2'>
            <img src="cardphoto.png" className="logo" alt="logo" />
            <div className='card-body'>
              <p className='p-2 card-title text-start text-bold'>iVr's Showcase Series . Bakery / Pastry shop . SC05</p>
              <p className='p-2 card-description text-justify'>
                Immerse yourself in this luxurious environment with our VR walkthroughs.
                See how chic black tones and elegant design create a stylish, serene space
              </p>
            </div>
          </div>
          <div className='card mx-2'>
            <img src="cardphoto.png" className="logo" alt="logo" />
            <div className='card-body'>
              <p className='p-2 card-title text-start text-bold'>iVr's Showcase Series . Bakery / Pastry shop . SC05</p>
              <p className='p-2 card-description text-justify'>
                Immerse yourself in this luxurious environment with our VR walkthroughs.
                See how chic black tones and elegant design create a stylish, serene space
              </p>
            </div>
          </div>
          <div className='card mx-2'>
            <img src="cardphoto.png" className="logo" alt="logo" />
            <div className='card-body'>
              <p className='p-2 card-title text-start text-bold'>iVr's Showcase Series . Bakery / Pastry shop . SC05</p>
              <p className='p-2 card-description text-justify'>
                Immerse yourself in this luxurious environment with our VR walkthroughs.
                See how chic black tones and elegant design create a stylish, serene space
              </p>
            </div>
          </div>
        </div>
      </div>
            </div>

            <div className='mt-5 dp-flex'>
                <div className='w-75'>
                    <p className='font-white text-start mx-6 text-heavy'>What Our Clients Said about us</p>
                    <p className='font-white-2 text-start mx-6'>Find Out How The Response So Far Has Been:</p>
                </div>
                <div className='w-25 p-55'>
                    <div className='button-container'>
                        <button className='button-custom-3 mx-2' onClick={() => scrollContainer('left')}>
                            <FontAwesomeIcon icon={faArrowLeft} size="2x" className='mx-1 text-icon3' />
                        </button>
                        <button className='button-custom-2' onClick={() => scrollContainer('right')}>
                            <FontAwesomeIcon icon={faArrowRight} size="2x" className='mx-1 text-icon4' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='scroll-container mt-4 mb-5' ref={scrollContainerRef} style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
                <div className='section-card' style={{ display: 'inline-block' }}>
                    <div className='card-slide-active mx-2' style={{ display: 'inline-block' }}>
                        <div className='dp-flex p-3'>
                            <img src="profil-1.png" className="logo-card w-25" alt="logo" />
                            <div className='w-75 mt-3'>
                                <span className='text-start fs-28 text-semibold'>Amelia Joseph</span>
                                <p className='text-start fs-15 text-Black'>Chief Manager</p>
                            </div>
                        </div>
                        <div className='card-body padding-4' >
                            <p className='text-justify pr-3'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.</p>
                        </div>
                    </div>
                    <div className='card-slide mx-2' style={{ display: 'inline-block' }}>
                        <div className='dp-flex p-3'>
                            <img src="profil-2.png" className="logo-card w-25" alt="logo" />
                            <div className='w-75 mt-3'>
                                <span className='text-start fs-28 text-semibold'>Jacob Joshua</span>
                                <p className='text-start fs-15 text-Black'>Chief Manager</p>
                            </div>
                        </div>
                        <div className='card-body padding-4'>
                            <p className='text-justify pr-3'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.</p>
                        </div>
                    </div>
                    <div className='card-slide mx-2' style={{ display: 'inline-block' }}>
                        <div className='dp-flex p-3'>
                            <img src="profil-3.png" className="logo-card w-25" alt="logo" />
                            <div className='w-75 mt-3'>
                                <span className='text-start fs-28 text-semibold'>Jacob Joshua</span>
                                <p className='text-start fs-15 text-Black'>Chief Manager</p>
                            </div>
                        </div>
                        <div className='card-body padding-4'>
                            <p className='text-justify pr-3'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.</p>
                        </div>
                    </div>
                    <div className='card-slide mx-2' style={{ display: 'inline-block' }}>
                        <div className='dp-flex p-3'>
                            <img src="profil-2.png" className="logo-card w-25" alt="logo" />
                            <div className='w-75 mt-3'>
                                <span className='text-start fs-28 text-semibold'>Jacob Joshua</span>
                                <p className='text-Black text-start fs-15'>Chief Manager</p>
                            </div>
                        </div>
                        <div className='card-body padding-4'>
                            <p className='text-justify pr-3'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.</p>
                        </div>
                    </div>
                    <div className='card-slide mx-2' style={{ display: 'inline-block' }}>
                        <div className='dp-flex p-3'>
                            <img src="profil-3.png" className="logo-card w-25" alt="logo" />
                            <div className='w-75 mt-3'>
                                <span className='text-start fs-28 text-semibold'>Jacob Joshua</span>
                                <p className='text-Black text-start fs-15'>Chief Manager</p>
                            </div>
                        </div>
                        <div className='card-body padding-4'>
                            <p className='text-justify pr-3'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='element-2'></div>
            <Subs />
            <div className='element'></div>
            <Footer /> 
        </div>
    );
};

export default Home;

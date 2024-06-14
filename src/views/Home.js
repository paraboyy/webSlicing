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

    //  const handleLeftClick = () => {
    //     if (cardIndex > 0) {
    //         setCardIndex(cardIndex - 1);
    //     }
    // };

    // const handleRightClick = () => {
    //     // Jumlah card bisa disesuaikan dengan jumlah card yang ada.
    //     const totalCards = 3; // Misalkan ada 3 card, sesuaikan dengan kebutuhan
    //     if (cardIndex < totalCards - 1) {
    //         setCardIndex(cardIndex + 1);
    //     }
    // };

    const handleLeftClick = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (cardIndex < 2) { // Adjust based on the number of cards minus one
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
                    <p className='content-border text-center fw-bold'>Explore Our Virtual Realities:</p>
                    <p className='text-center'><span className='font-1 text-white'>The </span>
                    <span className='font-1 text-white fw-bold line'>interiorVerse</span></p>
                    <p className='font-1 text-white'>Showcase Collection</p>
                </div>
            </div>

            <div className='card-home mb-4 row'>
                <div className='w-50 justify-content-center p-50'>
                    <p className='font-2 text-white text-justify'>Welcome to the <span className='fw-bold'>interiorVerse Showcase Collection.</span>
                    Step into a world of <span className='fw-bold'>imagination</span> with our VR environments. From chic bedrooms to
                    modern kitchens, our <span className='fw-bold'> Showcase inspire & captivate.</span></p>

                    <p className='font-2 text-white text-justify mt-5'>Perfect for architects, designers, &
                    homeowners, our VR walkthroughs bring <span className='fw-bold'>your visions to life</span>
                     with stunning <span className='fw-bold'>realism</span></p>
                    <button className='btn dp-block mt-5'>See playlist<FontAwesomeIcon icon={faArrowRight} size="1x" className='mx-2'/></button>
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
        <span className='text-white fw-bold font-72 text-start'>Explore</span>
        <p className='text-white fw-bold font-72 text-start mt-n-7'>Collection</p>
        <p className='text-white text-justify'>
          Discover the <span className='fw-bold'>future</span> of interior design and architectural visualization with interiorVerse.
          Explore our Showcase models, <span className='fw-bold'>experience the cutting-edge technology,</span> and see for yourself how VR can
          <span className='fw-bold'>transform your design</span> process
        </p>
      </div>
      <div className='d-flex section-card-wrapper' style={{ overflow: 'hidden', width: '100%' }}>
        <div className='d-flex section-card' style={{ transform: `translateX(-${cardIndex * 100}%)`, transition: 'transform 0.5s ease' }}>
          <div className='card mx-2'>
            <img src="cardphoto.png" className="logo" alt="logo" />
            <div className='card-body'>
              <p className='p-2 card-title text-start fw-bold'>iVr's Showcase Series . Bakery / Pastry shop . SC05</p>
              <p className='p-2 card-description text-justify'>
                Immerse yourself in this luxurious environment with our VR walkthroughs.
                See how chic black tones and elegant design create a stylish, serene space
              </p>
            </div>
          </div>
          <div className='card mx-2'>
            <img src="cardphoto.png" className="logo" alt="logo" />
            <div className='card-body'>
              <p className='p-2 card-title text-start fw-bold'>iVr's Showcase Series . Bakery / Pastry shop . SC05</p>
              <p className='p-2 card-description text-justify'>
                Immerse yourself in this luxurious environment with our VR walkthroughs.
                See how chic black tones and elegant design create a stylish, serene space
              </p>
            </div>
          </div>
          <div className='card mx-2'>
            <img src="cardphoto.png" className="logo" alt="logo" />
            <div className='card-body'>
              <p className='p-2 card-title text-start fw-bold'>iVr's Showcase Series . Bakery / Pastry shop . SC05</p>
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
                    <p className='font-white text-start mx-6 fw-bold'>What Our Clients Said about us</p>
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
                <div className='section-card p-3' style={{ display: 'inline-block' }}>
                    <div className='card-slide-active mx-2' style={{ display: 'inline-block' }}>
                        <div className='dp-flex p-3'>
                            <img src="profil-1.png" className="logo-card w-25" alt="logo" />
                            <div className='w-75 mt-3'>
                                <span className='text-start fs-28'>Amelia Joseph</span>
                                <p className='bold text-start fs-15'>Chief Manager</p>
                            </div>
                        </div>
                        <div className='card-body padding-4' >
                            <p className='text-justify'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.</p>
                        </div>
                    </div>
                    <div className='card-slide mx-2' style={{ display: 'inline-block' }}>
                        <div className='dp-flex p-3'>
                            <img src="profil-2.png" className="logo-card w-25" alt="logo" />
                            <div className='w-75 mt-3'>
                                <span className='text-start fs-28'>Jacob Joshua</span>
                                <p className='bold text-start fs-15'>Chief Manager</p>
                            </div>
                        </div>
                        <div className='card-body padding-4'>
                            <p className='text-justify'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.</p>
                        </div>
                    </div>
                    <div className='card-slide mx-2' style={{ display: 'inline-block' }}>
                        <div className='dp-flex p-3'>
                            <img src="profil-3.png" className="logo-card w-25" alt="logo" />
                            <div className='w-75 mt-3'>
                                <span className='text-start fs-28'>Jacob Joshua</span>
                                <p className='bold text-start fs-15'>Chief Manager</p>
                            </div>
                        </div>
                        <div className='card-body padding-4'>
                            <p className='text-justify'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.</p>
                        </div>
                    </div>
                    <div className='card-slide mx-2' style={{ display: 'inline-block' }}>
                        <div className='dp-flex p-3'>
                            <img src="profil-2.png" className="logo-card w-25" alt="logo" />
                            <div className='w-75 mt-3'>
                                <span className='text-start fs-28'>Jacob Joshua</span>
                                <p className='bold text-start fs-15'>Chief Manager</p>
                            </div>
                        </div>
                        <div className='card-body padding-4'>
                            <p className='text-justify'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.</p>
                        </div>
                    </div>
                    <div className='card-slide mx-2' style={{ display: 'inline-block' }}>
                        <div className='dp-flex p-3'>
                            <img src="profil-3.png" className="logo-card w-25" alt="logo" />
                            <div className='w-75 mt-3'>
                                <span className='text-start fs-28'>Jacob Joshua</span>
                                <p className='bold text-start fs-15'>Chief Manager</p>
                            </div>
                        </div>
                        <div className='card-body padding-4'>
                            <p className='text-justify'>Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.</p>
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

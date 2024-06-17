import React from 'react';
import Navbar from '../components/Navbar2';
import VideoPlayer from '../components/VideoPlayer2';
import './Individual.css'
import Footer from '../components/Footer';
import Subs from '../components/subs';

const Individual = () => {
    return (
        <div className='p-absolute'>
            <Navbar/>

            <div className='p-50'>
                <p className='text-indv text-light'><span className='text-bold'>interiorVerse</span> / Abous Us / iVr's Showcase Series / SC05</p>
                <p className='text-indv-2'>Bakery/Pastry Shop <span className='text-heavy'> • SC05</span></p>
                <div className='line-3'></div>
            </div>

            <VideoPlayer /> 

            <div className='background-2'>
                <div className='background-black'></div>
                <p className='p-51 text-56 mb-5'>Sweet Dreams Are Made Of This - The <span className='text-bold'>Bakery/Pastry Shop</span> Showcase</p>

                <div className='dp-flex'>
                    <div className='w-50 p-50'>
                        <p className='text-indv'>Welcome to the <span className='text-heavy'>sweetest</span> corner of the interiorVerse Showcase Collection. Our Bakery/Pastry Shop VR model is a charming blend of rustic charm and modern design, crafted to evoke the aroma of freshly baked goods and the <span className='text-heavy-italic'>warmth of a neighborhood</span> bakery. Let’s take a delicious virtual journey through this delectable space, where every detail is designed to <span className='text-heavy'>delight and inspire.</span></p>
                        <p className='text-heavy text-white fs-3 mt-5'>A Taste of Nostalgia</p>
                        <p className='mt-5 text-indv'>Imagine stepping into a bakery where the <span className='text-heavy'>comforting smell of freshly baked</span> bread fills the air. Our Bakery/Pastry Shop captures that nostalgic essence, transporting you to a place where simplicity meets sophistication. The <span className='text-heavy'>wooden shelves lined with pastries,</span> the inviting display counter, and the cozy seating area come together to create a space that feels both <span className='text-heavy'>familiar and enchanting.</span></p>
                        <p className='text-heavy text-white fs-3 mt-5'>Feature $ Highlights</p>
                        <p className='mt-5 text-indv'>Our Bakery/Pastry Shop model offers a rich experience with: </p>
                        <p className='mt-2 text-indv'><span className='text-heavy mx-2'>• Charming</span> Decor: Rustic wooden accents and vintage-inspired decor create a warm, welcoming atmosphere.</p>
                    </div>
                    <div className='w-50 p-52'>
                        <p className='text-indv'><span className='text-heavy mx-2'>Inviting</span> Display Counter: Showcasing an array of delicious pastries and baked goods, <span className='text-heavy mx-2'>tempting you with every glance.</span></p>
                        <p className='mt-2 text-indv'><span className='text-heavy mx-2'>• Cozy</span> Seating Area: Perfect for enjoying a cup of coffee and a pastry, with comfortable seating and charming tables.</p>
                        <p className='text-indv'><span className='text-heavy mx-2'>• Functional</span> Kitchen: A behind-the-scenes look at the modern, <span className='text-heavy mx-2'>efficient kitchen</span> where all the magic happens.</p>
                        <p className='text-heavy text-white fs-3 mt-5'>Experience the Sweetness</p>               
                        <p className='mt-5 text-indv'>With interiorVerse, you can immerse yourself in this delightful bakery through our interactive VR walkthrough. Walk around the shop, <span className='text-heavy mx-2'>explore</span> the display cases, and even peek into the kitchen to see where the baking magic takes place. Feel the ambiance, visualize the layout, and <span className='text-heavy mx-2'>get inspired</span> by the charming details.</p>
                        <p className='mt-5 text-indv'>Our Bakery/Pastry Shop showcase is <span className='text-heavy mx-2'>more</span> than just a virtual model; it’s an invitation to dream, create, and be inspired. Whether you’re savoring the sweet details or planning your own bakery venture, interiorVerse is here to <span className='text-heavy mx-2'>bring your visions to life</span> with stunning realism and immersive experiences. Dive into our showcase today and see how we can help you create your perfect space.</p>
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

export default Individual;
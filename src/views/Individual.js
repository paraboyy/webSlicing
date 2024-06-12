import React from 'react';
import Navbar from '../components/Navbar2';
import VideoPlayer from '../components/VideoPlayer2';
import './Individual.css'
import Footer from '../components/Footer';
import Subs from '../components/subs';

const Individual = () => {
    return (
        <div>
            <Navbar/>

            <div className='p-50'>
                <p className='text-indv'><span className='fw-bold'>interiorVerse</span> / Abous Us / iVr's Showcase Series / SC05</p>
                <p className='text-indv-2'>Bakery/Pastry Shop <span className='fw-bold'> SC05</span></p>
            </div>

            <VideoPlayer /> 

            <div className='background-2'>
                <div className='background-black'></div>
                <p className='p-51 text-56 mb-5'>Sweet Dreams Are Made Of This - The <span className='fw-bold'>Bakery/Pastry Shop</span> Showcase</p>

                <div className='dp-flex'>
                    <div className='w-50 p-50'>
                        <p className='text-indv'>Welcome to the sweetest corner of the interiorVerse Showcase Collection. Our Bakery/Pastry Shop VR model is a charming blend of rustic charm and modern design, crafted to evoke the aroma of freshly baked goods and the warmth of a neighborhood bakery. Let’s take a delicious virtual journey through this delectable space, where every detail is designed to delight and inspire.</p>
                        <p className='fw-bold text-white fs-5 mt-5'>A Taste of Nostalgia</p>
                        <p className='mt-5 text-indv'>Imagine stepping into a bakery where the comforting smell of freshly baked bread fills the air. Our Bakery/Pastry Shop captures that nostalgic essence, transporting you to a place where simplicity meets sophistication. The wooden shelves lined with pastries, the inviting display counter, and the cozy seating area come together to create a space that feels both familiar and enchanting.</p>
                        <p className='fw-bold text-white fs-5 mt-5'>Feature $ Highlights</p>
                        <p className='mt-5 text-indv'>Our Bakery/Pastry Shop model offers a rich experience with: </p>
                        <p className='mt-2 text-indv'><span className='fw-bold mx-2'>.</span>Charming Decor: Rustic wooden accents and vintage-inspired decor create a warm, welcoming atmosphere.</p>
                    </div>
                    <div className='w-50 p-52'>
                        <p className='text-indv'>Inviting Display Counter: Showcasing an array of delicious pastries and baked goods, tempting you with every glance.</p>
                        <p className='mt-2 text-indv'><span className='fw-bold mx-2'>.</span>Cozy Seating Area: Perfect for enjoying a cup of coffee and a pastry, with comfortable seating and charming tables.</p>
                        <p className='text-indv'><span className='fw-bold mx-2'>.</span>Functional Kitchen: A behind-the-scenes look at the modern, efficient kitchen where all the magic happens.</p>
                        <p className='fw-bold text-white fs-5 mt-5'>Experience the Sweetness</p>               
                        <p className='mt-5 text-indv'>With interiorVerse, you can immerse yourself in this delightful bakery through our interactive VR walkthrough. Walk around the shop, explore the display cases, and even peek into the kitchen to see where the baking magic takes place. Feel the ambiance, visualize the layout, and get inspired by the charming details.</p>
                        <p className='mt-5 text-indv'>Our Bakery/Pastry Shop showcase is more than just a virtual model; it’s an invitation to dream, create, and be inspired. Whether you’re savoring the sweet details or planning your own bakery venture, interiorVerse is here to bring your visions to life with stunning realism and immersive experiences. Dive into our showcase today and see how we can help you create your perfect space.</p>
                    </div>
                </div>
            </div>

            <Subs />
            <Footer />
        </div>
    );
};

export default Individual;
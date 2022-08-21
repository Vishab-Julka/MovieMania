import React from 'react'
import EntertainmentCardSlider from '../Components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../Components/PosterSlider/PosterSlider.Component';

function HomePage() {
  return (
    <>
        <HeroCarousel />
        <div className='container mx-auto px-20 my-8'>
            <h1 className='text-2xl font-bold text-gray-800 my-3'>
                The Best of Entertainment
            </h1>
            <EntertainmentCardSlider />
        </div> 

        <div className='container mx-auto px-20 my-8'>
            <PosterSlider />
        </div>
        
    </>
  );
}

export default HomePage;

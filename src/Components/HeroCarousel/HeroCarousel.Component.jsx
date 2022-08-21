import React from 'react';
import HeroSlider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { NextArrow,PrevArrow } from './Arrows.Component';

const HeroCarousel = () => {

    const [images, setImages] = useState([
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1660307241725_gangubaitelugu_web.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1659530909175_wfdv.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1658829190282_web.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1660221587097_pvr_privilege_web.jpg"
    ]);

    const settingsLG = {
        arrows: true,
        autoplay : true,
        centerMode: true,
        centerPadding : '20px',
        slidesToShow: 1,
        infite: true,
        slideToScroll: 1,
        nextArrow : <NextArrow />,
        prevArrow : <PrevArrow />
    };

    const settings = {
        arrows: true,
        slidesToShow: 1,
        speed: 500,
        infite: true,
        slideToScroll: 1,
        nextArrow : <NextArrow />,
        prevArrow : <PrevArrow />
    };
    
    return(<>
            <div className='lg:hidden'>
                <HeroSlider {...settings}>
                    {images.map((image) => (
                        <div className='w-full h-56 md:h-80 py-3'>
                            <img src={image} alt='HeroBanner' className='w-full h-full object-center' />
                        </div>
                    ))}
                </HeroSlider>
            </div>

            <div className='hidden lg:block'>
                <HeroSlider {...settingsLG}>
                    {images.map((image) => (
                        <div className='w-full h-96 px-2 py-3'>
                            <img src={image} alt='HeroBanner' className='w-full h-full object-center rounded-md' />
                        </div>
                    ))}
                </HeroSlider>

            </div>
    
    
    </>)
}

export default HeroCarousel;
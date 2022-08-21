import React from 'react';
import Slider from 'react-slick';

function EntertainmentCard(props) {
  return (
    <>
        <div className='w-full h-30 px-2'>
            <img className='w-full h-full rounded-xl' src={props.src} alt='Entertainment Image' />
        </div>
    </>
  )
}

function EntertainmentCardSlider(){

    const EntertainmentImage = [
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTYwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshops-collection-202007231330.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/fitness-collection-2020081150.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-collection-202007220710.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjE1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202007220710.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202007220710.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202011150107.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/self-improvement-collection-202007220710.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/cooking-collection-202007222211.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/interactive-games-collection-202012041129.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/art-and-crafts-collection-202007220710.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NzArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/theatre-shows-collection-202012041128.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NDArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/adventure-collection-202010140844.png"
    ];

    const settings = {
        infinite: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        InitialSlide: 0,
        responsive: [
            {
                breakpoints: 1024,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoints: 600,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    InitialSlide: 1
                },
            },
            {
                breakpoints: 480,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return(
        <>
            <Slider {...settings}>
                {EntertainmentImage.map((image) => (
                    <EntertainmentCard src={image} />
                ))}

            </Slider>
        </>
    )
}

export default EntertainmentCardSlider;

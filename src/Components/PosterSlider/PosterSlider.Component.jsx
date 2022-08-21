import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.Component";


const PosterSlider = () => {


    const posterImages = [
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTE3ayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00304943-sebfpfepqd-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICA5NzUgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331912-enlthftmgl-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICA5Mmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00307869-ksphbgpyyc-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzElICAxMDlrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00098735-uydsvrdktl-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzElICA2ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00328501-nmgcnvgdax-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICA4NzIgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331590-ezbvpdagxj-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICA0NGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00136643-drxbugxtfx-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330300-qlfyslcpae-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzYlICA3OTUgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00327068-scjkljxejq-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTAlICAxOWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00324951-ftfymesfra-portrait.jpg"
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
            <div className="flex flex-col items-start my-2">
                <h3 className="text-2xl font-bold">Recommended Movies</h3>
                <p className="text-sm text-gray-800">
                    List of recommended movies
                </p>
            </div>
            <Slider {...settings}>
                {posterImages.map((image) => (
                    <Poster src={image} />
                ))}
            </Slider>
        </>
    );
 
}

export default PosterSlider;
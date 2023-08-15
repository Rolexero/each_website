"use client";

import Image from "next/image";
import Slider from "react-slick";
import { data } from "../Companies/Companies";

interface datatype {
  imgSrc: string;
  country: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    imgSrc: "/each.jpg",
    country: "Bangladesh",
    paragraph: "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
  {
    imgSrc: "/each2.jpg",
    country: "United States",
    paragraph: "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
  {
    imgSrc: "/each3.jpg",
    country: "Australia",
    paragraph: "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
  {
    imgSrc: "/each4.png",
    country: "China",
    paragraph: "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
  {
    imgSrc: "/each4.png",
    country: "China",
    paragraph: "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
  {
    imgSrc: "/each4.png",
    country: "China",
    paragraph: "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
  {
    imgSrc: "/each4.png",
    country: "China",
    paragraph: "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
  {
    imgSrc: "/each4.png",
    country: "China",
    paragraph: "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
  {
    imgSrc: "/each4.png",
    country: "China",
    paragraph: "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
  {
    imgSrc: "/each4.png",
    country: "China",
    paragraph: "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
  {
    imgSrc: "/each4.png",
    country: "China",
    paragraph: "Event madness gathering innoies, & tech enthusiasts in Speced.",
  },
];

const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-babyblue" id="gallery">
      <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-4xl sm:text-6xl font-semibold text-center my-10 lh-81">
          Gallery
        </h3>

        {/* <Image src={'/assets/network/map.png'} alt={"map-image"} width={1400} height={800} /> */}

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <Slider {...settings}>
            {Aboutdata.map((item, i) => (
              <div key={i}>
                <Image
                  src={item.imgSrc}
                  alt={item.imgSrc}
                  width={250}
                  height={250}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

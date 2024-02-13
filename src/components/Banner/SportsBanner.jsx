import React, { useState, useEffect } from 'react';
import BannerImg1 from "../../assets/banner2.png";
import BannerImg2 from "../../assets/banner3.png";
import BannerImg3 from "../../assets/banner4.png";
import BannerImg4 from "../../assets/banner5.png";

const SportsBanner = () => {
  const images = [ BannerImg1, BannerImg2, BannerImg3, BannerImg4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div className='w-full lg:p-2 mt-1 sm:mt-1 flex'>
      <img
        src={images[currentIndex]}
        alt="SportsBanner"
        className='w-full'
      />
    </div>
  );
};

export default SportsBanner;

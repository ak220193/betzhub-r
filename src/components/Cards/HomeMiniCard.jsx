import React, { useState, useEffect } from 'react';
import ratingIcon from '../../assets/notostar.svg';
import { ReviewList } from '../../constants/reviewList';

const HomeMiniCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ReviewList.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='flex justify-center w-full text-white font-bold text-xl uppercase mb-4'>Reviews</div>
      <div className='bg-black-700'>
        <div className='flex gap-6 p-10 overflow-x-hidden relative'>
          {ReviewList.map((item, index) => (
            <div
              key={index}
              className='flex flex-col justify-between gap-1 bg-gray-200 p-5 rounded-lg transform duration-400'
              style={{ minWidth: '190px', maxWidth: '200px', transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <h3 className='text-xs'>{item?.text}</h3>
              <div className='mb-5 mt-5'>
                <h2 className='text-xs font-bold pt-2 py-2'>{item?.name}</h2>
                <div className='flex gap-2'>
                  {Array.from({ length: item.rating }, (_, index) => (
                    <img src={ratingIcon} key={index} alt='rating' className='w-5' />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeMiniCards;

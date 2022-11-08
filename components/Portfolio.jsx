import Images from 'next/image';
import React from 'react';

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4 animate-bounce'>Decoration Photos</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Images
            src='https://img.softmedal.com/uploads/2022-10-23/261818604696.jpg'
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          />
        </div>
        <div className='w-full h-full'>
          <Images
            src='https://img.softmedal.com/uploads/2022-10-23/666307840488.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Images
            src='https://img.softmedal.com/uploads/2022-10-23/311377116483.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Images
            src='https://img.softmedal.com/uploads/2022-10-23/340929412640.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Images
            src='https://img.softmedal.com/uploads/2022-10-23/578416109787.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
      </div>
      
    </div>
  );
};

export default Portfolio;
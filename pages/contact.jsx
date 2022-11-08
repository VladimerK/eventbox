import React from "react";
import Contact from "../components/Contact";
import { Hero } from "../components/Hero";
import IgImg6 from "../public/decor.jpg";
import Images from "next/image";

const contact = () => {
  return (
    <div>
      <Hero  heading='' message='We will move the highest mountains for you!' text='დაგვიკავშირდი'/>
      <div
        role="status"
        className="space-y-8 md:space-y-0 md:space-x-8 md:flex md:items-center"
      >
<Images className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={IgImg6} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Event Box</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Tel: +995 577 32 45 61</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Email: eventbox.ge@gmail.com</p>

    </div>
       {/* <div className="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
          <Images
            className="w-12 h-12 text-gray-200"
            src={IgImg6}
            fill="currentColor"
          ></Images> */}
          {/* <Images classNameName='w-12 h-12 text-gray-200'
            src={IgImg6}
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          /> */}
        {/* </div> */}
        
      
      </div>

      <Contact />
    </div>
  );
};

export default contact;

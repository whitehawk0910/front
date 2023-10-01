import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>Find a Lawyer</p>
          <p className='text-gray-700 leading-6'>
            Are you in need of legal assistance? Look no further. Our platform is designed to help you find the right lawyer for your specific legal needs. Whether it's a personal injury case, family law matters, or business-related issues, our extensive network of experienced attorneys is here to guide you. Take the first step towards resolving your legal concerns today.
          </p>
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

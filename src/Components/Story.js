import React from 'react'
import Image from 'next/image'
import siting from '../Components/Images/Siting.png'
const Story = () => {
  return (
    <div className='bg-white'>
      <div className='grid grid-cols-10 '>
        <div className='col-span-4'>
        <Image src={siting} alt='no sit img'/></div>
        <div className='col-span-6'>
            <div className='space-y-6 mr-20'>
            <div className='font-bold text-4xl  text-black pt-24'>
                <h1>Best Experinced Freelancer Here</h1>
            </div>
            <div className=' text-lg  text-black py-2'>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
            </div>
            <div className="flex items-center space-x-7 ">
          <button className="bg-[#D14852] border border-red-500 text-white py-2 px-7 shadow-2xl hover:bg-white hover:text-red-600">
            Read More
          </button>
          <button className="bg-[#1A2E35] border border-[#1A2E35] hover:bg-white hover:text-black text-white py-2 px-10">
            Hire
          </button>
        </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Story

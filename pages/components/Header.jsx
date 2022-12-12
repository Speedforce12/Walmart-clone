import Image from "next/image";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { MdMiscellaneousServices } from "react-icons/md";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BsCart } from "react-icons/bs";

const Header = () => {
  return (
    <header className='grid sticky top-0 z-50 grid-cols-3 bg-blue-500 p-5 xl:px-10 items-center'>
      {/* left */}
      <div className='flex items-center  h-12 space-x-1 cursor-pointer my-auto'>
        <Image
          src='https://cdn.corporate.walmart.com/12/9d/06ecf3584e91acccc37162f09714/logowhite.svg'
          alt='walmart'
          height={80}
          width={220}
          className='object-contain object-left px-3 py-1 hover:opacity-80 hover:bg-black/50 rounded-full'
        />
        <div className='lg:flex hidden items-center px-3 py-1 hover:opacity-80 hover:bg-black/50 cursor-pointer rounded-full text-white space-x-2'>
          <RxDashboard size={25} />
          <span className='font-semibold py-2'>Departments</span>
        </div>

        <div className='lg:flex hidden items-center px-3 py-1 hover:opacity-80 hover:bg-black/50 cursor-pointer rounded-full text-white space-x-2'>
          <MdMiscellaneousServices size={25} />
          <span className='font-semibold py-2'>Services</span>
        </div>
      </div>

      {/* middle */}
      <div className='flex items-center rounded-full py-2 bg-white'>
        <input
          type='text'
          placeholder='Search Walmart'
          className='px-5 bg-transparent flex-grow outline-none placeholder:text-xs'
        />
        <AiOutlineSearch
          size={30}
          className='mx-2 rounded-full p-2 cursor-pointer bg-yellow-500 hidden xl:inline-flex'
        />
      </div>

      {/* right */}
      <div className='flex items-center justify-evenly'>
        <div className='xl:flex items-center hidden ml-10 space-x-3 text-white hover:opacity-80 hover:bg-black/50 rounded-full px-3 py-2 cursor-pointer'>
          <AiOutlineHeart size={20} />
          <div className='grid'>
            <p className='text-xs'>Reorder</p>
            <span className='font-bold'>My Items</span>
          </div>
        </div>

        <div className='xl:flex items-center hidden ml-10 space-x-3 text-white hover:opacity-80 hover:bg-black/50 rounded-full px-3 py-2 cursor-pointer'>
          <CiUser size={20} />
          <div className='grid'>
            <p className='text-xs'>Hi, O'vonee D</p>
            <span className='font-bold'>Account</span>
          </div>
        </div>

        <div className='flex relative mx-a flex-col items-center  ml-10 space-x-3 text-white hover:opacity-80 hover:bg-black/50 rounded-full px-3 py-2 cursor-pointer'>
          <div className='absolute rounded-full bg-yellow-500 px-1  -top-1 right-3'>
            0
          </div>
          <BsCart size={20} />
          <p className='text-xs'>$0.00</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

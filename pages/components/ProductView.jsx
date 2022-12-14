import Image from "next/image";
import React from "react";

const ProductView = () => {
  return (
    <div className='p-3 bg-white max-w-[450px] rounded-lg flex min-h-[450px] flex-col gap-6 mb-2'>
      <div className='flex justify-start'>
        <h3 className='font-semibold text-2xl text-left '>
          Low prices all around
        </h3>
      </div>
      <div className='flex justify-between px-8'>
        <div className='relative h-32 w-32 flex flex-col mr-8'>
          <img
            src='https://i5.walmartimages.com/dfw/4ff9c6c9-6e90/k2-_eb1b44b9-f92e-4ff4-b4ef-a848628e258b.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF'
            className='object-contain'
          />
          <span className='text-black whitespace-nowrap'>
            Up to 50% off toys
          </span>
        </div>

        <div className=' relative h-32 w-32'>
          <img
            src='https://i5.walmartimages.com/dfw/4ff9c6c9-cc52/k2-_b4655a10-d667-40b5-a426-3d9a89ddb3b7.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF'
            className='object-contain'
          />
          <span className='text-black whitespace-nowrap'>
            Up to 45% off tech
          </span>
        </div>
      </div>
      <div className='flex justify-between px-8'>
        <div className='relative h-32 w-32'>
          <img
            src='https://i5.walmartimages.com/dfw/4ff9c6c9-c46a/k2-_6da69d0a-794d-41a2-a669-dc4302c39b80.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF'
            className='object-contain'
          />
          <span className='text-black whitespace-nowrap'>Up to 40% off home</span>
        </div>
        <div className='relative h-32 w-32'>
          <img
            src='https://i5.walmartimages.com/dfw/4ff9c6c9-4bae/k2-_cc93827f-e9e3-468d-aa36-626713d18436.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF'
            className='object-contain'
          />
          <span className='text-black whitespace-nowrap'>Up to 50% off toys</span>
        </div>
      </div>
    </div>
  );
};

export default ProductView;

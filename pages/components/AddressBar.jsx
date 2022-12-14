import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";
import Options from "./Options";

const AddressBar = () => {
  return (
    <div className='flex px-14 border-t py-2 bg-blue-500 items-center justify-between'>
      <div className='relative h-6 w-6 text-white flex cursor-pointer items-center'>
        <Image
          src='https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png'
          fill
        />
        <span className='font-semibold whitespace-nowrap pl-8 pr-5'>
          How do you want your items?
        </span>
        |
        <div className='md:flex items-center hidden'>
          <span className='text-white px-2'>
            <IoLocationOutline size={25} />
          </span>
          <span className='font-semibold whitespace-nowrap pr-2'>
            2281 Northwest 82nd Avenue
          </span>
          <img
            src='https://i5.walmartimages.com/dfw/4ff9c6c9-cc5a/k2-_cb966ffb-2cf6-4a8d-869c-27d99919cb16.v1.png'
            className='mx-2'
          />
          <p className='whitespace-nowrap'>Doral Supercenter</p>
        </div>
      </div>

      <div className='xl:flex space-x-5 hidden text-white'>
        <Options option='Grocery & essentials' />
        <Options option='Tech under $100' />
        <Options option='Apparel' />
        <Options option='Up to 50% off toys!' />
        <Options option='Christmas sweater' />
        <Options option='Deals' />
        <Options option='Walmart+' />
      </div>
    </div>
  );
};

export default AddressBar;

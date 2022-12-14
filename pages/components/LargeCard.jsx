import Image from 'next/image'
import {Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const LargeCard = ({products}) => {
  return (
    <Fade>
      {products.map((product, index) => (
        <section className='relative cursor-pointer p-5' key={index}>
          <div className='relative h-96 min-w-[300px] each-slide'>
            <Image
              src={product.img}
              fill
              alt=''
              className='object-cover rounded-2xl'
            />
          </div>

          <div className='absolute top-32 left-12'>
            <h3 className='text-4xl mb-3 w-64'>{product.title}</h3>
            {/* <p>{description}</p> */}

            <button className='text-sm text-white bg-gray-900 py-2 rounded-lg mt-5 px-4'>
              Shop {product.title}
            </button>
          </div>
        </section>
      ))}
    </Fade>
  );
}

export default LargeCard
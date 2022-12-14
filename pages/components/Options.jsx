import Link from "next/link";
import React from "react";

const Options = ({ option }) => {
  return (
    <div className='font-semibold flex hover:underline'>
      <Link href='/'>{option}</Link>
    </div>
  );
};

export default Options;

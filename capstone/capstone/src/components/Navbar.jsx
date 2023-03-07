import React from "react";
import img1 from "../imgs/ll.jpg";

export default function Navbar() {
  return (
    <nav className='w-[100vw] h-[15vh] bg-gray-400 flex justify-between'>
      <img src={img1} className='h-[15vh] p-4 ml-6' />
      <div className='text-2xl mr-4'>
        <ul className=' flex m-6 gap-8 p-4 '>
          <li className=' rounded-md hover:bg-[#F4CE14] p-2'>
            <a href='#'>Home</a>
          </li>
          <li className='rounded-md hover:bg-[#F4CE14] p-2'>
            <a href='#'> Menu</a>
          </li>
          <li className='rounded-md hover:bg-[#F4CE14] p-2'>
            <a href='#'>Book a Table</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

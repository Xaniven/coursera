import React from "react";
import img1 from "../imgs/ll.jpg";

export default function Navbar() {
  return (
    <div className='sticky top-0'>
      <nav className=' w-[100vw] min-h-[10vh] bg-gray-400 flex justify-between'>
        <a href='/'>
          {" "}
          <img src={img1} className='h-[15vh] p-4 ml-6' />
        </a>
        <div className='text-2xl mr-6'>
          <ul className=' lg:flex m-2 gap-8 p-10 '>
            <li className=' rounded-md hover:bg-[#F4CE14] p-2'>
              <a href='/'>Home</a>
            </li>
            <li className='rounded-md hover:bg-[#F4CE14] p-2'>
              <a href='/menu'> Menu</a>
            </li>
            <li className='rounded-md hover:bg-[#F4CE14] p-2'>
              <a href='/book'>Book a Table</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

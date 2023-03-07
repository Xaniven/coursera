import React from "react";
import img2 from "../imgs/bread.jpg";
import img3 from "../imgs/salad.jpg";
import img4 from "../imgs/pasta.jpg";
import img5 from "../imgs/grill.jpg";

export default function Home() {
  return (
    <div className='h-[auto] '>
      <section className='h-[30vh] bg-[#495E57] flex justify-between'>
        <div className=' text-white text-2xl ml-6 p-6 w-[50vw]'>
          <h1 className='font-extrabold text-4xl '>
            Little Lemon <br /> Chicago
          </h1>
          <p>Family Owned Mediterranean restaurant, on Maldove St. Chicago, IL</p>
          <button className='bg-[#F4CE14] p-2 mt-6 rounded-md text-black hover:bg-[#EE9972]'>
            {" "}
            Book a Table
          </button>
        </div>
        <img src={img2} className=' w-[50vw] rounded-2xl p-2 object-cover m-2 ' />
      </section>

      <section>
        <div className='p-4 text-center'>
          <h1 className='text-5xl'>Weekly Specials:</h1>
          <p className=' text-lg'>(Availible weekdays noon - 4pm)</p>
          <button className='bg-[#F4CE14] p-2 m-2 rounded-md text-black hover:bg-[#EE9972]'>
            See Menu
          </button>
        </div>
        <div className='foodWrap flex justify-evenly'>
          <div className='card p-4 m-6 bg-[#EDEFEE] rounded-2xl w-[300px]'>
            <img src={img4} className=' object-cover h-[200px]' height='300px' width='300px' />
            <div className='cardBody text-center'>
              <h1 className=' text-xl'>Endless Pasta</h1>
              <p>All you can it, in any flavor</p>
              <button className='bg-[#F4CE14] p-2 m-2 rounded-md text-black hover:bg-[#EE9972]'>
                See Menu
              </button>
            </div>
          </div>
          <div className='card p-4 m-6 bg-[#EDEFEE] rounded-2xl w-[300px]'>
            <img src={img3} className=' object-cover h-[200px]' height='300px' width='300px' />
            <div className='cardBody text-center'>
              <h1 className=' text-xl'>House Salads</h1>
              <p>Check out our fresh made salads</p>
              <button className='bg-[#F4CE14] p-2 m-2 rounded-md text-black hover:bg-[#EE9972]'>
                See Menu
              </button>
            </div>
          </div>
          <div className='card p-4 m-6 bg-[#EDEFEE] rounded-2xl w-[300px]'>
            <img src={img5} className=' object-cover h-[200px]' height='300px' width='300px' />
            <div className='cardBody text-center'>
              <h1 className=' text-xl'>Flame Grilled Perfection</h1>
              <p>Order your grilled favorites</p>
              <button className='bg-[#F4CE14] p-2 m-2 rounded-md text-black hover:bg-[#EE9972]'>
                See Menu
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import img2 from "../imgs/bread.jpg";

export default function Menu() {
  const menuItems = [
    {
      section: "Starters",
      items: ["Fried Calamari", "Garlic Knots", "Burrata with Tomatoes and Basil"],
    },
    {
      section: "Entrees",
      items: ["Spaghetti Bolognese", "Eggplant Parmesan", "Chicken Marsala"],
    },
    {
      section: "Desserts",
      items: ["Tiramisu", "Cannoli", "Panna Cotta"],
    },
    {
      section: "Drinks",
      items: ["Soda", "Beer", "Wine"],
    },
  ];
  return (
    <>
      <section className='h-[40vh] p-2 bg-[#495E57] flex justify-between'>
        <div className=' text-white text-2xl ml-6 m-2 p-6 w-[50vw]'>
          <h1 className='font-extrabold text-4xl '>
            Little Lemon <br /> Chicago
          </h1>
          <p>Family Owned Mediterranean restaurant, on Maldove St. Chicago, IL</p>
          <a href='/book'>
            {" "}
            <button className='bg-[#F4CE14] p-2 m-2 rounded-md text-black hover:bg-[#EE9972]'>
              Book a Table
            </button>
          </a>
        </div>
        <img src={img2} className=' w-[50vw] rounded-2xl p-2 object-cover m-2 ' />
      </section>
      <div className='text-center'>
        <h1 className=' mt-8 text-6xl font-extrabold'>Our Menu</h1>
        <div className='max-w-4xl mt-10 mx-auto h-[60vh]'>
          <div className='flex flex-wrap justify-between'>
            {menuItems.map((section, index) => (
              <div className='w-full md:w-1/2 mb-8 md:mb-0' key={index}>
                <h2 className='text-2xl font-bold mb-4'>{section.section}</h2>
                <ul>
                  {section.items.map((item, index) => (
                    <li key={index} className='mb-2 p-4'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
import img2 from "../imgs/bread.jpg";

export default function ReservationForm() {
  const [name, setName] = useState("Haskell");
  const [dateTime, setDateTime] = useState("4:30pm 2/3/23");
  const [guests, setGuests] = useState("6");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [sub, setSub] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSub(true);
  };

  if (sub == false) {
    return (
      <>
        <section className='h-[40vh] p-2 bg-[#495E57] flex justify-between'>
          <div className=' text-white text-2xl ml-6 m-2 p-6 w-[50vw]'>
            <h1 className='font-extrabold text-4xl '>
              Little Lemon <br /> Chicago
            </h1>
            <p>Family Owned Mediterranean restaurant, on Maldove St. Chicago, IL</p>
            <a href='/menu'>
              {" "}
              <button className='bg-[#F4CE14] p-2 m-2 rounded-md text-black hover:bg-[#EE9972]'>
                View Menu
              </button>
            </a>
          </div>
          <img src={img2} className=' w-[50vw] rounded-2xl p-2 object-cover m-2 ' />
        </section>

        <div className='max-w-md mx-auto mt-6'>
          <h1 className='text-3xl font-bold mb-4'>Reservation Form</h1>
          <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2' htmlFor='name'>
                Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* Time and Date Section */}
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2' htmlFor='date'>
                Date and Time
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='date'
                type='datetime-local'
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
              />
            </div>
            {/* Number of Guests Section */}
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2' htmlFor='guests'>
                Number of Guests
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='guests'
                type='number'
                placeholder='Number of Guests'
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            {/* Phone Number Section */}
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2' htmlFor='phone'>
                Phone Number
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='phone'
                type='tel'
                placeholder='Phone Number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {/* Additional Comments Section */}
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2' htmlFor='comments'>
                Special Request
              </label>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='comments'
                rows='4'
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className='flex items-center justify-between'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
  if (sub == true) {
    return (
      <>
        <section className='h-[40vh] p-2 bg-[#495E57] flex justify-between'>
          <div className=' text-white text-2xl ml-6 m-2 p-6 w-[50vw]'>
            <h1 className='font-extrabold text-4xl '>
              Little Lemon <br /> Chicago
            </h1>
            <p>Family Owned Mediterranean restaurant, on Maldove St. Chicago, IL</p>
            <button className='bg-[#F4CE14] p-2 mt-6 rounded-md text-black hover:bg-[#EE9972]'>
              {" "}
              View Menu
            </button>
          </div>
          <img src={img2} className=' w-[50vw] rounded-2xl p-2 object-cover m-2 ' />
        </section>
        <div className='max-w-md mx-auto  min-h-[30vh] mt-10'>
          <div className='bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
            <svg
              className='text-white fill-current w-8 h-8'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M17.707 3.293c-.391-.391-1.023-.391-1.414 0L7 12.586 4.707 10.293c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l3 3c.191.191.447.293.707.293s.516-.102.707-.293l11-11c.391-.391.391-1.023 0-1.414z' />
            </svg>
          </div>
          <h1 className='text-3xl font-bold mb-4'>Thank You for Your Reservation</h1>
          <p className='text-center'>
            Table for {guests} booked for {name} <br /> @ {dateTime} <br /> Thank you for choosing
            little lemon, we can't wait to see you!{" "}
          </p>
        </div>
      </>
    );
  }
}

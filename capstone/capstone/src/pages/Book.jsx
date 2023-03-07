import { useState } from "react";

export default function ReservationForm() {
  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [guests, setGuests] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className='max-w-md mx-auto'>
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
            Additional Comments
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
  );
}

import React from 'react'




const EmailBanner = () => {
  return (
    <div className='flex flex-col items-center pt-10 pb-10 bg-gradient-to-r from-orange-300 to-primary'>
      <div>
        <h2 className='text-4xl font-semibold mb-4 text-white'>Get Notified About New Products</h2>
        <input type="text" placeholder='Enter Your Email' className='w-full p-3'/>
      </div>
    </div>
  );
}

export default EmailBanner

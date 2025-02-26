import React from 'react';

function Contact() {
  return (
    <div className="w-full flex flex-col items-center gap-6 mt-10 px-4 sm:px-8">
      {/* Heading Section */}
      <div className="relative flex items-center justify-center w-full h-20 bg-black">
        <div className="absolute flex items-center justify-center w-full">
          <div className="w-1/4 border-t border-gray-600 hidden sm:block"></div>
          <span className="mx-4 text-zinc-500 italic text-lg font-sans">Reach Out Anytime</span>
          <div className="w-1/4 border-t border-gray-600 hidden sm:block"></div>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-[Lobster] text-center">
        Let's Stay <span className="text-zinc-700">Connected</span>
      </h1>

      {/* Description */}
      <p className="w-[70%] sm:w-[40%] text-zinc-600 font-medium text-xs 
      sm:text-sm text-center">
        Let's connect! Whether you have a project in mind or just want to chat, I'm always open to new opportunities and collaborations.
      </p>

      {/* Contact Button */}
    


      <a href="mailto:rutanmandaviya14@gmail.com" className="relative bg-black my-2 text-white rounded-full border-2 border-zinc-800 hover:border-white hover:transition-ease hover:duration-900 px-5 py-3 text-sm sm:text-[15px] font-semibold flex gap-2 justify-center items-center shadow-[0px_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0px_6px_95px_rgba(255,255,255,0.4)] transition-all duration-300">
  <i className="ri-arrow-right-up-long-line text-lg"></i> Contact Me
</a>

      {/* Social Media Links */}
      <div className='flex items-center justify-center gap-5 my-3'>
            <a href='https://in.linkedin.com/in/rutan-mandaviya-966877266' target='_blank' className='text-zinc-600 text-[25px]   hover:text-white px-4 '><i className="  ri-linkedin-box-fill"></i> </a><span className='inline-block h-6 w-[1.1px] bg-zinc-800 '></span>
            <a href='https://github.com/rutan-mandaviya' target='_blank' className=' text-zinc-600 text-[25px]   hover:text-white px-4 '><i className=" ri-github-fill"></i></a><span className='inline-block h-6 w-[1.1px] bg-zinc-800 '></span>
            <a href='https://www.instagram.com/rutan_mandaviya?igsh=N21kcnUwcTB6NTR6' target='_blank' className=' text-zinc-600 text-[25px]   hover:text-white px-4 '><i className=" ri-instagram-line"></i> </a>
        </div>

      {/* Email */}
      <a href="mailto:rutanmandaviya14@gmail.com" className="text-zinc-100 font-[cursive] text-sm hover:text-white">
        rutanmandaviya14@gmail.com
      </a>

      {/* Video Background Bar */}
      <div className="w-full h-1 mt-10 sm:mt-20 overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 relative">
        <video className="absolute top-0 left-0 w-full h-full object-cover" src="/12716-241674181_large.mp4" autoPlay muted loop></video>
      </div>
    </div>
  );
}

export default Contact;

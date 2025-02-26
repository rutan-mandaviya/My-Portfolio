import React from 'react'

function About() {
  return (
    <div className=''>
      <div className='w-full min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-15 px-5'>
        <div className='w-full lg:w-1/3 flex flex-col gap-8 text-center lg:text-left'>
          <h1 className='text-3xl font-medium mt-10 md:text-5xl'>More about <span className='font-[cursive] opacity-50 text-[#999999] font-extralight'><i>myself</i></span></h1>
          <p className='text-zinc-600 font-medium text-sm md:text-base md:w-[90%] font-sans'>Hi, I’m Rutan, a passionate MERN stack developer blending creativity and problem-solving to build dynamic and seamless web experiences.</p>
          <a href="resume_rutan.pdf" target="_blank" rel="noopener noreferrer">
  <button className='w-[60%] lg:w-[40%] mx-auto lg:mx-0 bg-zinc-950 my-2 text-zinc-100 rounded-full border-2 border-zinc-800 hover:border-white hover:transition-ease hover:duration-900 py-3 text-[15px] font-semibold flex gap-2 justify-center items-center hover:shadow-[0px_6px_95px_rgba(255,255,255,0.4)] transition-all duration-300'>
    <i className='ri-arrow-right-up-long-line text-lg'></i> Resume
  </button>
</a>

        </div>
        <div className='relative w-[90%] lg:w-1/3 h-[250px] lg:h-[40%] rounded-md border-8 border-zinc-900 overflow-hidden shadow-[0px_0px_15px_5px_rgba(255,255,255,0.8)]'>
          <img 
            src='image.png' 
            className='w-full h-full object-cover filter ' 
            alt='image' 
          />
          <div className='absolute bottom-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] opacity-100 transition-opacity duration-300 hover:opacity-0'></div>
        </div>
      </div>
      <div className='w-full h-1 rounded-2xl bg-gradient-to-r from-black via-zinc-800 to-black'></div>
    </div>
  )
}

export default About

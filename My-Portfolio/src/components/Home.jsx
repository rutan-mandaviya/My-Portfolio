import React from 'react';

function Home() {
  return (
    <div className='flex flex-col h-full scroll-smooth  font-[Montserrat] '>
        <div className="w-full h-15 bg-black">

        </div>
    <div  className='w-full h-96 bg-zinc-800 cursor-auto '>
      <video 
        className='w-full h-full object-cover  ' 
        src="/Flame_Dhua.mp4" 
        autoPlay={true} 
        loop={true} 
        muted={true}
        onLoadedMetadata={(e) => e.target.playbackRate = 2} 
         />
         <div className="absolute bottom-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)]"></div>
    </div>

    <div className='w-full h-full flex flex-col items-center  bg-zinc-700 '>
        <div style={{boxShadow:"0 0 3em #6d6d6d"}} className='w-44 h-44 rounded-full overflow-hidden absolute left-1/2 top-1/ -translate-x-[50%] -translate-y-[50%]' >
            
        <img className='w-full h-full object-cover object-top ' src="rutan mandaviya - 1-removebg-preview.jpg" alt="" />
        </div> 
        <div className="w-full h-[52vh]  absolute top-[85%] z-1 overflow-hidden">
  <video 
    className="w-full h-full object-cover opacity-25  mix-blend-lighten backdrop-brightness-150"
    src="9665235-hd_1920_1080_25fps.mp4" 
    autoPlay 
    muted 
    loop
  />
</div>

     
    </div>
 
    <div className='flex mt-25 flex-col justify-center items-center gap-5 my-2 z-30'>
        
        <h6 className='text-zinc-500 text-sm font-semibold'><span style={{boxShadow:"0 0 90 #02c551"}} className='inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3'></span>available for work</h6>
        <h1 className='text-4xl md:text-5xl sm:text-5xl lg:text-5xl font-sans font-semibold tracking-tight opacity-90 '>Rutan <span className="font-[Lobster] opacity-50 text-[#999999] font-extralight"><i>Mandaviya</i></span></h1>
        <h6 className='text-[10px] md:text-sm text-zinc-400 font-medium '>MERN Stack Developer | UI/UX Designer </h6>
        <div className='flex items-center justify-center gap-5 my-3'>
            <a href='https://in.linkedin.com/in/rutan-mandaviya-966877266' target='_blank' className='text-zinc-600 text-[25px]   hover:text-white px-4 '><i className="  ri-linkedin-box-fill"></i> </a><span className='inline-block h-6 w-[1.1px] bg-zinc-800 '></span>
            <a href='https://github.com/rutan-mandaviya' target='_blank' className=' text-zinc-600 text-[25px]   hover:text-white px-4 '><i className=" ri-github-fill"></i></a><span className='inline-block h-6 w-[1.1px] bg-zinc-800 '></span>
            <a href='https://www.instagram.com/rutan_mandaviya?igsh=N21kcnUwcTB6NTR6' target='_blank' className=' text-zinc-600 text-[25px]   hover:text-white px-4 '><i className=" ri-instagram-line"></i> </a>
        </div>
        <a href="mailto:rutanmandaviya14@gmail.com" className="relative bg-black my-2 text-white rounded-full border-2 border-zinc-800 hover:border-white hover:transition-ease hover:duration-900 px-7 py-4 text-[15px] font-semibold flex gap-2 justify-center items-center shadow-[0px_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0px_6px_95px_rgba(255,255,255,0.4)] transition-all duration-300">
  <i className="ri-arrow-right-up-long-line text-lg"></i> Contact Me
</a>

        <i className="text-4xl animate-bounce my-10 mt-5 mb- ri-arrow-down-s-line  "></i>



      
      
    </div>        
        <div className='w-full h-1 rounded-2xl bg-gradient-to-r from-black via-zinc-800 to-black'></div>
    </div>
        
  );
}

export default Home;

import React from 'react';

function Skills() {
  return (
    <div className='w-full min-h-[30vw] font-[Montserrat] flex flex-col justify-center items-center px-4 md:px-10'>
      <div className='relative flex items-center justify-center w-full h-20 bg-black'>
        <div className='absolute left-0 right-0 flex items-center justify-center'>
          <div className='w-1/4 border-t border-gray-600'></div>
          <span className='mx-4 text-gray-400 italic text-xs md:text-lg sm:text-lg'>Skills & Knowledge</span>
          <div className='w-1/4 border-t border-gray-600'></div>
        </div>
      </div>
      
      <div className='w-[90%] md:w-[80%] min-h-[18vw] p-6 md:px-20 md:py-14 border-4 flex justify-center flex-wrap items-center gap-4 border-zinc-900 rounded-md bg-[#141414]'>
        <div className='flex flex-wrap gap-3 justify-center'>
          {["Java", "Python", "HTML5/CSS3", "Tailwind", "JavaScript", "GSAP", "SaaS",  
            "React", "Node.js", "Express", "MongoDB", "SQL", "Git", "GitHub", "Redux"
          ].map((skill, index) => (
            <button
              key={index}
              className='bg-[#111] px-4 py-2 text-gray-400 sm:text-gray-200 font-semibold text-sm border border-gray-700 rounded-lg shadow-md hover:bg-[#222] hover:scale-105 transition-all duration-200'
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      <div className='w-full h-1 rounded-2xl mt-10 bg-gradient-to-r from-black via-zinc-800 to-black'></div>
    </div>
  );
}

export default Skills;

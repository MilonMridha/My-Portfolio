import React from 'react';

// import woman image
import WomanImg from '../assets/img/banner-woman2.webp';
import mypic from '../assets/img/my-pic/portfolio.png'

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center h-full pt-8'>
          <div className='sm:flex-col lg:flex flex-1 justify-center mt- py-5 items-end h-full'>
            <img src={mypic} alt='' />
          </div>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>

            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-4xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Hey, I'm Milon Mridha! 👋 <br /> MERN-Stack Developer.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Hard working IT professional with huge knowledge and proficiency in Javascript, ReactJs, HTML, CSS,
              and mobile responsive web development.
            </p>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
              Work with me
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

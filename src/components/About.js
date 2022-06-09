import React from 'react';

// import img
import Image from '../assets/img/my-pic/about.png';

const About = () => {
  return (
    <section className='section bg-secondary'  id='about'>
      <div className='container mx-auto'>
        <div className=' grid grid-cols-1 md:grid-cols-2 flex flex-col xl:flex-row gap-10 p-0 items-center'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Milon Mridha
              </h2>
              <p className='mb-4 text-accent'>
                Frontend Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Hard working IT professional with huge knowledge and proficiency in Javascript, ReactJs, HTML, CSS,
                and mobile responsive web development as well as strong skills and ability in writing clean and efficient
                code, seeks the position of Front-End web developer role. <br />
                <br />

              </p>
            </div>


            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

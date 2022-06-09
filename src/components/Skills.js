import React from 'react';

// import skill data
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
      
      <div className='container mx-auto'>
      <h1 className='text-3xl text-center font-bold mb-5'>Skills</h1>
        <div
          className='grid grid-cols-8 md:grid-flow-col mt-3'
        >
          {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center justify-center'
                key={index}
              >
                <img className='lg:h-20' src={skill.image} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

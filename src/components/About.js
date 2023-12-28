import React from 'react';
// countup
import CountUp from 'react-countup';
// intersction observer
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
//variant
import {fadeIn} from '../variants';

const About = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.5
  });
  return ( 
    <section className='section' id='about' ref={ref} >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-20'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
           className='flex-1 bg-about bg-contain bg-no-repeat h-[500px] mix-blend-lighten bg-top'>
          </motion.div>
          {/* text */}
          <div className='flex-1'>
            <h2 className='h2 font-bold text-accent'>About Me</h2>
            <h3 className=' h3 mb-6'>UCF grad and emerging full-stack developer in the MERN stack, passionate about creating intuitive digital experiences in the metaverse.</h3>
            <h2 className='h2 font-bold text-accent'>Beyond the Code: A World of Adventure and Exploration</h2>
            <h3 className=' h3 mb-6'>
            Outdoor enthusiast and gamer, finding balance in nature and the strategic realms of Dungeons & Dragons, enhancing my creative coding skills.       </h3>
            {/* stats  */}
            <div className='flex gap-x-6 lg:gap-x-10 mb12'>
              <div>
                <div className='text-[40px] font-tertuary text-gradient mb-2'>
                  { inView ? <CountUp start={0} end={21} duration={3} /> :  
                  null }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br/>
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertuary text-gradient mb-2'>
                  { inView ? <CountUp start={0} end={999} duration={3} /> : 
                  null }
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Cups of Coffee<br/>
                  Consumed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertuary text-gradient mb-2'>
                  { inView ? <CountUp start={0} end={38} duration={3} /> : 
                  null }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Dungeons <br/>
                  Cleared
                </div>
              </div>
            </div>
            <div>  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


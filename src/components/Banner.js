import React from 'react';
// images
import image from '../assets/avatar.png';
// icons
import {FaGithub, FaDribbble, FaTwitter} from 'react-icons/fa';
// type animation
import {TypeAnimation} from 'react-type-animation';
// motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
   <div className='mx-auto'>
     <div className='flex flex-col gap-y-8 lg:flex-row'>
      {/*text */}
      <div className='flex-1 text-center font-secondary lg:text-left' >
        <motion.h1
         variants={fadeIn('up', 0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{ once: false, amount: 0.7 }} 
         className='text-[55px] font-bold leading-[0.8] lg:text-[60px]'>
          Austin <span> Wilson</span>
        </motion.h1>
        <motion.div 
         variants={fadeIn('down', 0.4)}
         initial='hidden'
         whileInView={'show'}
         viewport={{ once: false, amount: 0.7 }} 
         className='mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1] '> 
          <span className='text-white mr-4'>I am a</span>
          <TypeAnimation sequence={[
            'Designer', 
            2000, 
            'Developer', 
            2000, 
            'Engineer', 
            2000,
            ]} 
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}

          />
        </motion.div>
        <motion.p 
         variants={fadeIn('left', 0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{ once: false, amount: 0.7 }} 
         className='mb-8 max-w-lg mx-auto lg:mx-0'>
         "Hello! I'm Austin AKA DevopA, a passionate and creative Developer, Designer, and Engineer. With a keen eye for innovative design and a commitment to efficient engineering, I craft digital solutions that blend form and function seamlessly. Dive into my world where code meets creativity, and explore projects that reflect my expertise in bringing ideas to life. Let's connect and collaborate!
        </motion.p>
        <motion.div 
         variants={fadeIn('right', 0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{ once: false, amount: 0.7 }} 
         className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'> 
          <button className='btn btn-lg'>Contact Me</button>
          <a href='https://github.com/Devop-A/portfolio' className='text-gradient btn-link'>
            My Portfolio
          </a>
        </motion.div>
        {/* socials */}
        <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
          <a href='https://github.com/Devop-A'>
            <FaGithub />
          </a>
          <a href='https://dribbble.com/DevopA'>
            <FaDribbble />
          </a>
          <a href='https://twitter.com/devopacoding'>
            <FaTwitter />
          </a>
        </div>
      </div>
      {/*image */}
      <div className='hidden lg:flex flex-1 ,max-w-[320px] lg:max-w-[482px] mx-auto'> 
        <img style={{ maxWidth: '350px', maxHeight: '350px' }} src= {image} alt=''/>
      </div>
      {/*text */}

     </div>
   </div>
  </section>;
};

export default Banner;

import React from 'react';
// icon
import {BsArrowUpRight } from 'react-icons/bs';


// services data

const services = [
  {
    name: 'UI/UX Design',
    description: 'Crafting user-centric designs with a focus on usability and aesthetic appeal to deliver delightful and functional digital interfaces.',
    link: 'Learn More',
  },
  {
    name: 'Development',
    description: 'Building robust and scalable web applications using modern technologies to bring your innovative ideas to life with clean, efficient code.',
    link: 'Learn More',
  },
  {
    name: 'Digital Marketing',
    description: 'Leveraging the power of SEO, social media, and targeted content strategies to amplify your brand\'s online presence and engage with your audience.',
    link: 'Learn More',
  },
  {
    name: 'Product Branding',
    description: 'Creating strong, memorable brands through strategic design and storytelling that resonate with customers and differentiate you from competitors.',
    link: 'Learn More',
  },
];

function Services() {
  return <section className='section mt-40' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text & image*/}
        <div className='flex-1 lg:bg-services  bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
        <h2 className='h2 text-accent mb-6'>What I do</h2>
        <h3 className='h3 max-w-[455px] mb-16'>
        Blending creativity with technology to craft digital solutions that stand out.
        </h3>
        <button className='btn btn-sm'>See my Work</button>
        </div>

        {/* services */}
        <div className='flex-1 items-center'>
          {/* services list */}
          <div>
            {services.map((service, index) => {
              // destructure service
              const {name, description, link} = service;
              return (
               <div className='border-b border-white/20 h-[146px] mb-[38px] flex' 
                key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tacking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'> 
                  <a href='teamdevop.dev' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                  <BsArrowUpRight />
                  </a>
                  <a href='teamdevop.dev' className='text-gradient text-sm'>{link}</a>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div> 
    </div>    
   </section>;
}

export default Services;

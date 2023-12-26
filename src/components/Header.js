import React from 'react';
// images
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='py-8'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            {/* logo */}
            <a href='#'>
              {/* Inline styles for max-width and max-height */}
              <img style={{ maxWidth: '120px', maxHeight: '100px' }} src={Logo} alt='Logo'/>
            </a>
            {/* button */}
            <button className='btn btn-sm'>Work With Me</button>
          </div>
        </div>
    </header>
  );
};

export default Header;
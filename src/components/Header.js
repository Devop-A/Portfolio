import React from 'react';
// images
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            {/* logo */}
            <a href='https://teamdevop.dev'>
              {/* Inline styles for max-width and max-height */}
              <img style={{ maxWidth: '120px', maxHeight: '100px' }} src={Logo} alt='Logo'/>
            </a>
            {/* button */}
            <Link to='contact' smooth={true} duration={500}>
              <button className='btn btn-sm'>Work With Me</button>
            </Link>
          </div>
        </div>
    </header>
  );
};

export default Header;
// import { Link } from 'react-router-dom';
// import PrimaryButton from './../Buttons/PrimaryButton';
// import SecondaryButton from './../Buttons/SecondaryButton';

// function Header() {
//   return (
//     <div className='flex justify-around items-center h-20 bg-[var(--header-color)] drop-shadow-[rgba(0,0,0,0.12)] border border-[rgba(0,0,0,0.12)] overflow-x-hidden'>
//         <div className="flex justify-between items-center gap-2.5">
//             <img src="/logo.svg" className="md:w-10 md:h-10 w-10 h-10" alt="logo" />
//             <img src="/logoName.svg" className="md:w-[93px] md:h-[33px] w-24 h-10" alt="Accurack" />
//         </div>
//         <div className="hidden justify-around sm:flex md:gap-6 lg:gap-10 sm:gap-2 text-[var(--dark-primary)]">
//             <Link to="#">Product</Link>
//             <Link to="#">Features</Link>
//             <Link to="#">Industries</Link>
//             <Link to="#">Resources</Link>
//             <Link to="#">Pricing</Link>
//         </div>
//         <div className="flex items-center gap-2.5">
//           <SecondaryButton cssClasses='sec-button-hover'>Sign in</SecondaryButton>
//           <PrimaryButton>Request Demo</PrimaryButton>
//         </div>
//     </div>
//   )
// }

// export default Header

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import PrimaryButton from './../Buttons/PrimaryButton';
import SecondaryButton from './../Buttons/SecondaryButton';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <div className='relative flex justify-between items-center h-20 bg-[var(--header-color)] drop-shadow-[rgba(0,0,0,0.12)] border border-[rgba(0,0,0,0.12)] overflow-x-hidden px-4 sm:px-6'>
      
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <img src="/logo.svg" className="md:w-10 md:h-10 w-10 h-10" alt="logo" />
        <img src="/logoName.svg" className="md:w-[93px] md:h-[33px] w-24 h-10" alt="Accurack" />
      </div>

      {/* Nav Links - visible only on large screens */}
      <div className="hidden lg:flex justify-around md:gap-6 lg:gap-10 text-[var(--dark-primary)]">
        <Link to="#">Product</Link>
        <Link to="#">Features</Link>
        <Link to="#">Industries</Link>
        <Link to="#">Resources</Link>
        <Link to="#">Pricing</Link>
      </div>

      {/* Buttons and Hamburger */}
      <div className="flex items-center gap-2.5">
        {/* Always show Sign In */}
        <SecondaryButton cssClasses='sec-button-hover'>Sign in</SecondaryButton>

        {/* Show Request Demo only on large screens */}
        <div className="hidden lg:block">
          <PrimaryButton>Request Demo</PrimaryButton>
        </div>

        {/* Hamburger Menu - visible below lg */}
        <div className="lg:hidden ml-2">
          <FiMenu size={24} color="#117D90" onClick={toggleMenu} className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 right-4 bg-white shadow-lg rounded-lg py-3 px-5 z-50 flex flex-col gap-3 text-[var(--dark-primary)] lg:hidden">
          <Link to="#" onClick={() => setIsMenuOpen(false)}>Product</Link>
          <Link to="#" onClick={() => setIsMenuOpen(false)}>Features</Link>
          <Link to="#" onClick={() => setIsMenuOpen(false)}>Industries</Link>
          <Link to="#" onClick={() => setIsMenuOpen(false)}>Resources</Link>
          <Link to="#" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
        </div>
      )}
    </div>
  );
}

export default Header;

import { Link } from 'react-router-dom';
import PrimaryButton from './../Buttons/PrimaryButton';
import SecondaryButton from './../Buttons/SecondaryButton';

function Header() {
  return (
    <div className='flex justify-around items-center h-20 bg-[var(--header-color)] drop-shadow-[rgba(0,0,0,0.12)] border border-[rgba(0,0,0,0.12)] overflow-x-hidden'>
        <div className="flex justify-between items-center gap-2.5">
            <img src="/logo.svg" className="md:w-10 md:h-10 w-10 h-10" alt="logo" />
            <img src="/logoName.svg" className="md:w-[93px] md:h-[33px] w-24 h-10" alt="Accurack" />
        </div>
        <div className="hidden justify-around sm:flex md:gap-6 lg:gap-10 sm:gap-2 text-[var(--dark-primary)]">
            <Link to="#">Product</Link>
            <Link to="#">Features</Link>
            <Link to="#">Industries</Link>
            <Link to="#">Resources</Link>
            <Link to="#">Pricing</Link>
        </div>
        <div className="flex items-center gap-2.5">
          <SecondaryButton cssClasses='sec-button-hover'>Sign in</SecondaryButton>
          <PrimaryButton>Request Demo</PrimaryButton>
        </div>
    </div>
  )
}

export default Header
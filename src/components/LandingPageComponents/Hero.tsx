import React from 'react'
import SecondaryButton from './../Buttons/SecondaryButton'
import PrimaryButton from './../Buttons/PrimaryButton'

function Hero() {
  return (
    <div className='flex w-[98vw] h-[100vh] justify-center bg-[linear-gradient(0deg,_#ffffff_30%,_var(--header-color)_100%)]'>
      {/* left side */}
      <div className='flex flex-col gap-5 mt-40 ml-20 w-[65rem]'>
        <div>
          <SecondaryButton cssClasses='flex gap-3 on-hover'>
            <img src="/icons/chatIcon.svg" alt="" />
            Chat with us
          </SecondaryButton>
          <img className='absolute z-10 top-32 left-[35%]' src="/arrow.svg" alt="" />
        </div>
        <div className='flex flex-col w-[75%] gap-6'>
          <h1 className='text-4xl text-[#0F172A] fonts'>
            Revolutionary <span className='text-[var(--primary-color)]'>Inventory</span> Management: Transform Your <span className='text-[var(--primary-color)]'>Business</span> Cashflow
          </h1>
          <p className='text-[#475569] text-sm'>
            AI-powered system that resolves 87% of cashflow issues, trusted by 10,000+  businesses across 35 countries. Experience an average 32% reduction in  excess inventory costs with our comprehensive solution
          </p>
        </div>
        <div className='flex gap-2.5'>
          <input type="text" placeholder='Input text here' className='hero-input'/>
          <PrimaryButton cssClasses='rounded-sm'>Request Demo-</PrimaryButton>
        </div>
      </div>


      {/* right side */}
      <div className='w-[100%] h-[98vh] m-0 mt-20'><img src="/PhoneHero.svg" className='w-[100%] m-0 p-0' alt="picture" /></div>
    </div>
  )
}

export default Hero
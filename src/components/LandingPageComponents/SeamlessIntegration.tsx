

function SeamlessIntegration() {
  return (
    <>
    <div className='flex flex-col items-center justify-center mt-20 bg-[var(--primary-color)]'>
        <div className="mt-20 text-4xl md:text-5xl lg:text-5xl font-bold text-[#f9fafd] fonts text-center gap-1.5 flex flex-col">
            <div className=''>SeamlessPOS <span className="text-[#50BED2]">Integration</span></div>
            <img src="/underlineLight.svg" className="md:ml-96 lg:ml:96 m-auto" alt="underline" />
        </div>
        <div className='w-[80%]'><img src="/phone.png" alt="phone" /></div>
    </div>
    <div className='relative h-[9rem] -z-10 bottom-64'><img src="/lines.svg" alt="lines" /></div>
    </>
  )
}

export default SeamlessIntegration
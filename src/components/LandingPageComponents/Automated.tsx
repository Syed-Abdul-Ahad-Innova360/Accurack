function Automated() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(/AutomatedBg.png)` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#117D90]/65"></div>

      {/* Your content goes here */}
      <div className="relative z-10 text-white p-10">
        <div className="mt-10 text-4xl md:text-5xl lg:text-5xl font-bold text-[#f9fafd] fonts text-center gap-1.5 flex flex-col justify-center items-center">
          <div className=''>Automated Supplier <span className="text-[#50BED2]">Management</span></div>
          <img src="/underlineLight.svg" className='size-1/4 ml-80' alt="underline" />
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols flex flex-col justify-center gap-15 mt-10 place-items-center">
          <div><img src="/Automated1.svg" className='size-[85%]' alt="picture" /></div>
          <div><img src="/Automated1.svg" className='size-[85%]' alt="picture" /></div>
          <div><img src="/Automated1.svg" className='size-[85%]' alt="picture" /></div>
          <div><img src="/Automated1.svg" className='size-[85%]' alt="picture" /></div>
        </div>
      </div>
    </div>
  );
}

export default Automated;

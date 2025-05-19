function InventoryForcasting() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 md:mt-40 lg:mt-40 overflow-x-hidden">
        <div className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#0F172A] fonts text-center gap-1.5 flex flex-col">
            <div>Intelligent Inventory <span className="text-[var(--primary-color)]">Forecasting</span></div>
            <img src="/underline.svg" className="md:ml-96 lg:ml:96 m-auto" alt="underline" />
            {/* <img src="/arrow2.svg" alt="arrow" className="md:hidden lg:hidden absolute z-10 right-0 size-1/12"/> */}
        </div>
        <div className="relative mt-10 flex flex-col md:flex-row lg:flex-row md:gap-10 lg:gap-10 items-center justify-center md:w-[50vw] lg:w-[50vw]">
            <img src="/pentagonPhone.png" className="xl:hidden size-1/2 mb-20" alt="pentagon" />
            <img src="/inventory.png" className="md:h-[70vh] lg:h-[70vh]" alt="picture" />
            {/* hidden on phone */}
            <img src="/pentagonPc.png" className="hidden xl:block h-[70vh] ml-40" alt="pentagon" />
        </div>
    </div>
  )
}

export default InventoryForcasting

function FinancialReporting() {
    return (
        <div className='flex flex-col items-center justify-center mt-20'>
            <div className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#0F172A] fonts text-center gap-1.5 flex flex-col">
                <div>Comprehensive Financial <span className="text-[var(--primary-color)]">Reporting</span></div>
                <img src="/underline.svg" className="md:ml-96 lg:ml:96 m-auto" alt="underline" />
            </div>
            <div className='w-[50%]'>
                <img src="/financial.png" alt="picture" />
            </div>
            <div className='w-[100%] mt-10'>
                <img src="/financialCard1.png" alt="financial card" />
            </div>
        </div>
    )
}

export default FinancialReporting
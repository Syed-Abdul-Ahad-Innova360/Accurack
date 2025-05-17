// function BusinessGrowth() {
//   return (
//     <div className="bg-[#065B6A] mt-20">
//         <div className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#f9fafd] fonts text-center gap-1.5 flex flex-col">
//             <div className='mt-20'>
//                 <span className="text-[#50BED2]">Realtime <img src="/underlineLight.svg" className="size-1/4 m-auto md:hidden lg:hidden xl:hidden" alt="underline" />
//                 </span>Business Growth Analytics</div>
//             <img src="/underlineLight.svg" className="size-1/4 ml-54 hidden md:block lg:block xl-block" alt="underline" />
//         </div>

//     </div>
//   )
// }

// export default BusinessGrowth



function BusinessGrowth() {
    return (
        <div className="bg-[#065B6A] mt-20">
            {/* Heading */}
            <div className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#f9fafd] fonts text-center gap-1.5 flex flex-col">
                <div className="mt-20">
                    <span className="text-[#50BED2]">
                        Realtime{" "}
                        <img
                            src="/underlineLight.svg"
                            className="size-1/4 m-auto md:hidden lg:hidden xl:hidden"
                            alt="underline"
                        />
                    </span>
                    Business Growth Analytics
                </div>
                <img
                    src="/underlineLight.svg"
                    className="size-1/4 ml-54 hidden md:block lg:block xl:block"
                    alt="underline"
                />
            </div>

            {/* Images */}
            <div className="mt-16 px-4 pb-10">
                <div className="mt-16 px-4">
                    <div className="flex flex-col items-center justify-center gap-14 md:grid md:grid-cols-2 md:gap-10 md:justify-items-center max-w-5xl m-auto">
                        <img src="/bg1.png" alt="bg1" className="w-full max-w-xs" />
                        <img src="/bg2.png" alt="bg2" className="w-full max-w-xs" />
                        <img src="/bg3.png" alt="bg3" className="w-full max-w-xs" />
                        <img src="/bg4.png" alt="bg4" className="w-full max-w-xs" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BusinessGrowth;

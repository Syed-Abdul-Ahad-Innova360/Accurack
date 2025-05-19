// // function Payroll() {
// //     return (
// //         <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
// //             {/* Background SVG overlay */}
// //             <img
// //                 src="/payrollBg.svg"
// //                 alt="Payroll background"
// //                 className="absolute inset-0 w-full h-full object-cover z-0"
// //             />

// //             {/* Content */}
// //             <div className="relative z-10 text-center px-4">
// //                 <h1 className="text-4xl md:text-5xl font-bold">
// //                     Payroll Management
// //                 </h1>
// //                 <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto">
// //                     Streamline your payroll processing with automated reports and real-time insights.
// //                 </p>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Payroll;




// function Payroll() {
//     return (
//         <div className="relative w-full h-[700px] bg-[#F9FEFF] overflow-hidden flex items-center justify-center px-4 mt-20">
//             {/* Background SVGs */}
//             <img
//                 src="/curvesTopLeft.svg"
//                 alt="Top Left Curve"
//                 className="absolute md:top-[-75px] lg:top-[-75px] top-0 left-0 w-[30vw] max-w-[600px] min-w-[200px] object-contain transition-all duration-300 z-10"
//             />
//             <img
//                 src="/curvesBottomRight.svg"
//                 alt="Bottom Right Curve"
//                 className="absolute bottom-0 right-0 w-[40vw] max-w-[600px] min-w-[200px] object-contain transition-all duration-300 z-10"
//             />
//             <img
//                 src="/streamLinedArrow.svg"
//                 alt="Top Right Arrow"
//                 className="absolute top-10 right-0 w-[8vw] max-w-[120px] min-w-[50px] object-contain transition-all duration-300 z-10"
//             />

//             {/* Content */}
//             <div className="relative top-20 md:top-0 lg:top-0 z-20 text-center max-w-6xl w-full">
//                 <h1 className="text-3xl md:text-5xl font-semibold text-[#0F172A]">
//                     Streamlined Payroll <span className="text-[var(--primary-color)]">Management</span>
//                 </h1>
//                 <img
//                     src="/underline.svg"
//                     alt="underline"
//                     className="mx-auto my-2"
//                 />

//                 {/* Cards */}
//                 <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
//                     <div className="bg-white shadow-md p-6 rounded-xl">
//                         <h3 className="text-[#0F172A] font-semibold mb-2">FEATURE</h3>
//                         <ul className="text-gray-600 text-sm space-y-1 text-left">
//                             <li>Labor Cost Tracking</li>
//                             <li>Productivity Analysis</li>
//                             <li>Time Tracking</li>
//                             <li>Commission Calculations</li>
//                             <li>Payroll Sync</li>
//                         </ul>
//                     </div>
//                     <div className="bg-white shadow-md p-6 rounded-xl">
//                         <h3 className="text-[#0F172A] font-semibold mb-2">BENEFIT</h3>
//                         <ul className="text-gray-600 text-sm space-y-1 text-left">
//                             <li>Reduce Payroll Costs By 5–22%</li>
//                             <li>Increase Staff Efficiency By 27%</li>
//                             <li>Save 5–7 Hours On Admin Tasks Weekly</li>
//                             <li>Increase Sales Motivation By 31%</li>
//                             <li>Eliminate Double-Entry Errors</li>
//                         </ul>
//                     </div>
//                     <div className="bg-white shadow-md p-6 rounded-xl">
//                         <h3 className="text-[#0F172A] font-semibold mb-2">INTEGRATION</h3>
//                         <ul className="text-gray-600 text-sm space-y-1 text-left">
//                             <li>All Major Timekeeping Systems</li>
//                             <li>Biometric And Mobile Time Clocks</li>
//                             <li>CRM And Sales Platforms</li>
//                             <li>Performance Management Tools</li>
//                             <li>QuickBooks, Xero, ADP, Etc.</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Payroll;







// components/Payroll.tsx

import React from 'react';
import PayrollCard from '../Cards/PayrollCard';

const Payroll: React.FC = () => {
    return (
        <div className="relative w-full overflow-x-hidden h-[700px] bg-[#F9FEFF] overflow-hidden flex items-center justify-center px-4 mt-20">
            {/* Background SVGs */}
            <img
                src="/curvesTopLeft.svg"
                alt="Top Left Curve"
                className="absolute md:top-[-75px] lg:top-[-75px] top-0 left-0 w-[30vw] max-w-[600px] min-w-[200px] object-contain transition-all duration-300 z-10"
            />
            <img
                src="/curvesBottomRight.svg"
                alt="Bottom Right Curve"
                className="absolute bottom-0 right-0 w-[40vw] max-w-[600px] min-w-[200px] object-contain transition-all duration-300 z-10"
            />
            <img
                src="/streamLinedArrow.svg"
                alt="Top Right Arrow"
                className="absolute top-10 right-0 w-[8vw] max-w-[120px] min-w-[50px] object-contain transition-all duration-300 z-10"
            />

            {/* Content */}
            <div className="relative top-20 md:top-0 lg:top-0 z-20 text-center max-w-6xl w-full">
                <h1 className="text-3xl md:text-5xl font-semibold text-[#0F172A]">
                    Streamlined Payroll <span className="text-[var(--primary-color)]">Management</span>
                </h1>
                <img src="/underline.svg" alt="underline" className="mx-auto my-2" />

                {/* Cards */}
                <div className="mt-10 flex flex-row justify-center md:justify-center gap-6 overflow-x-auto md:overflow-x-visible px-4 md:px-0 snap-x snap-mandatory scroll-smooth">
                    <PayrollCard
                        heading="FEATURE"
                        list={[
                            'Labor Cost Tracking',
                            'Productivity Analysis',
                            'Time Tracking',
                            'Commission Calculations',
                            'Payroll Sync',
                        ]}
                    />
                    <PayrollCard
                        heading="BENEFIT"
                        list={[
                            'Reduce Payroll Costs By 5–22%',
                            'Increase Staff Efficiency By 27%',
                            'Save 5–7 Hours On Admin Tasks Weekly',
                            'Increase Sales Motivation By 31%',
                            'Eliminate Double-Entry Errors',
                        ]}
                    />
                    <PayrollCard
                        heading="INTEGRATION"
                        list={[
                            'All Major Timekeeping Systems',
                            'Biometric And Mobile Time Clocks',
                            'CRM And Sales Platforms',
                            'Performance Management Tools',
                            'QuickBooks, Xero, ADP, Etc.',
                        ]}
                    />
                </div>

            </div>
        </div>
    );
};

export default Payroll;

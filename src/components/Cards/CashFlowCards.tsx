
type CashFlowCardProps = {
  icon?: string;
  title: string;
  description: string;
};

function CashFlowCards({ icon, title, description }: CashFlowCardProps) {
  return (
    <div className='flex gap-5 p-6 bg-white rounded-xl shadow-md border border-[rgba(0,0,0,0.12)] w-[100%] md:h-[25vh] lg:h-[25vh] lg:w-[90%] md:w-[90%] justify-center items-center'>
      <div className="text-[var(--primary-color)] mb-3"><img src={icon} alt="icon" className='size-36' /></div>
      <div className="flex flex-col items-start ">
        <div className="font-semibold md:text-3xl text-xl text-[var(--primary-color)] mb-2">{title}</div>
        <p className="text-[var(--text-gray)]">{description}</p>
      </div>
    </div>
  );
}

export default CashFlowCards;


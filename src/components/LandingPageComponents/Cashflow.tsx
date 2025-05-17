import CashFlowCards from '../Cards/CashFlowCards';

function Cashflow() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-4">
      <div className="mt-32 md:text-5xl lg:text-5xl text-4xl font-bold text-[#0F172A] fonts text-center flex flex-col gap-1.5 justify-center items-center">
        <div>Cash Flow <span className="text-[var(--primary-color)]">Optimization</span> Engine</div>
        <img src="/underline.svg" alt="underline" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        <CashFlowCards
          icon="/icons/moneyIcon.svg"
          title="Reduce Tied-Up Capital"
          description="Free up to 42% of your capital within just 90 days by optimizing inventory levels and purchase timing."
        />
        <CashFlowCards
          icon="/icons/pcIcon.svg"
          title="Real-Time Forecasting"
          description="Experience 95% accurate cash flow predictions that help you make informed financial decisions."
        />
        <CashFlowCards
          icon="/icons/disclaimerIcon.svg"
          title="Smart Alerts"
          description="Receive proactive cash preservation alerts before you reach critical thresholds, preventing cash crunches."
        />
        <CashFlowCards
          icon="/icons/settingsIcon.svg"
          title="Automated Payments"
          description="Schedule supplier payments intelligently to maximize cash availability while maintaining vendor relationships."
        />
      </div>
    </div>
  );
}

export default Cashflow;

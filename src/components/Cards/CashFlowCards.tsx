import React from 'react';
import type {ReactNode, JSX} from "react"


type CashFlowCardProps = {
  icon?: ReactNode;
  title: string;
  description: string;
};

function CashFlowCards({ icon, title, description }: CashFlowCardProps) {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-xl shadow-md h-full">
      <div className="text-[var(--primary-color)] mb-3">{icon}</div>
      <div className="font-semibold text-3xl text-[var(--primary-color)] mb-2">{title}</div>
      <p className="text-sm text-[var(--text-gray)]">{description}</p>
    </div>
  );
}

export default CashFlowCards;


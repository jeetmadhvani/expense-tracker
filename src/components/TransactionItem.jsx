import React, { useState } from 'react';
import { Dot, Trash } from 'lucide-react';

const TransactionItem = ({ idx, title, amt, date, category, desc, onDelete }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleDelete = () => {
    setIsExiting(true);
    setTimeout(() => onDelete(), 350);
  };

  return (
<div className={`bg-[#2a2a2a] px-4 py-2 flex gap-1 items-center rounded-xl font-mono text-[#eaeaea] shadow-[0_0_20px_rgba(0,0,0,0.2)]
  ${isExiting ? "animate-itemExit" : "animate-itemEnter"}
`}>
  <h1>{idx}.</h1>

  <div className="flex w-full gap-10 items-start">

    {/* LEFT COLUMN — Title + Date (never shrink) */}
    <div className="flex flex-col min-w-[180px] shrink-0">
      <h1 className="text-xl leading-tight">{title}</h1>
      <h2 className="text-xs flex items-center text-[#c2c2c2]">
        {date} <Dot strokeWidth={5}/> {category}
      </h2>
    </div>

    {/* MIDDLE COLUMN — Description (wrap allowed) */}
    <div className="flex-1 items-centerh-full text-xs text-[#a0a0a0] wrap-break-word leading-snug">
      {desc}
    </div>

    {/* RIGHT COLUMN — Amount + Delete (fixed width) */}
    <div className="flex flex-col items-end shrink-0 min-w-[120px]">
      <h2 className="text-[#E05757] text-xl whitespace-nowrap">- ₹{amt}</h2>

      <button onClick={handleDelete}
        className="group flex justify-center cursor-pointer hover:scale-125 transition-all ease-in-out duration-200 active:scale-105 mt-1">
        <Trash className="text-[#eaeaea] hover:text-[rgba(var(--theme-color),1)] transition-all duration-300"
               size={20}/>
      </button>
    </div>

  </div>
</div>
  );
};

export default TransactionItem;
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { Triangle } from "lucide-react";

const easeOutCubic = (t, b, c, d) => {
  t /= d;
  t--;
  return c * (t * t * t + 1) + b;
};

const SummaryCard = ({ title, amount, change }) => {
  const prevValue = useRef(0);  
  const [displayValue, setDisplayValue] = useState(amount);

  useEffect(() => {
    prevValue.current = displayValue;
    setDisplayValue(amount);
  }, [amount]);

  return (
    <div className="w-full h-full rounded-3xl p-5 text-[#eaeaea] flex flex-col justify-center gap-1 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,0,0,0.5)] transition-all border border-white/5 bg-linear-to-br from-[#222] to-[#1d1d1d]">

      <h1 className="font-mono">{title}</h1>

      <p className="text-5xl font-mono font-stretch-expanded">
        ₹
        <CountUp
          start={prevValue.current}
          end={Number(displayValue)}
          duration={1}
          easingFn={easeOutCubic}
          separator=","
        />
      </p>

      <div className="flex gap-1 items-center">
        <Triangle fill="#4ABF73" strokeWidth={0} size={10} />
        <p className="text-[#4ABF73] font-mono text-xs animate-fadeInUp">
          {/* ₹{change} from last month */}
          ₹0 from last month
        </p>
      </div>

    </div>
  );
};

export default SummaryCard;
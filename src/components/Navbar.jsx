import { Link } from "react-router-dom";
import { LayoutDashboard, ArrowUpDown, Settings, Tag, Goal, Repeat } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", to: "/" },
    { icon: ArrowUpDown, label: "Transactions", to: "/transactions" },
    { icon: Tag, label: "Categories", to: "/categories" },
    { icon: Goal, label: "Goal", to: "/goals" },
    { icon: Repeat, label: "Subscriptions", to: "/subscriptions" },
    { icon: Settings, label: "Settings", to: "/settings" },
  ];

  return (
    <div className="bg-[#1a1a1a] px-15 w-full h-30 flex items-center justify-between">
      
      {/* Logo */}
      <div>
        <h1 className="text-white text-xl font-mono font-bold">TRACE</h1>
      </div>

      {/* Buttons */}
      <div className="
        flex justify-between py-2 w-1/5 rounded-2xl border border-white/5
        bg-[#222222] bg-linear-to-br from-[#222] to-[#1d1d1d]
        transition-all duration-600 hover:shadow-lg shadow-[rgba(var(--theme-color),0.8)]
      ">
        {navItems.map(({ icon: Icon, label, to }, index) => (
          <Link
            key={index}
            to={to}
            className="group relative flex justify-center items-center w-full cursor-pointer hover:scale-150 hover:-translate-y-2 active:translate-y-0 active:scale-130transition-all ease-in-out duration-250"
            >
            <Icon
              size={30}
              strokeWidth={2}
              className="
                relative h-full text-[rgba(var(--theme-color),0.8)]
                transition-all ease-in-out duration-400
                group-hover:text-[rgba(var(--theme-color),1)]
                active:text-[rgba(var(--theme-color),0.8)]
              "
            />

            {/* Tooltip */}
            <span
              className="
                pointer-events-none absolute mt-15 font-mono text-xs text-white
                translate-y-2 opacity-0 transition-all duration-500
                group-hover:-translate-y-2 group-hover:opacity-100 group-hover:translate-x-1
                whitespace-nowrap shadow-lg
              "
            >
              {label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
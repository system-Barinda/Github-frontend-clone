import { useState } from "react";
import { Menu, Search, Github } from "lucide-react";
import HeaderActions from "./HeaderActions"
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0d1117] text-white border-b border-[#21262d]">
      <div className="flex items-center justify-between px-4 py-2">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-md border border-[#30363d] hover:bg-[#21262d]"
            onClick={() => setOpen(!open)}
          >
            <Menu size={20} />
          </button>

          <Github
            size={38}
            className="p-2 border border-[#30363d] rounded-full"
          />

          <span className="hidden md:block text-[16px] font-semibold">
            Dashboard
          </span>
        </div>

        {/* CENTER SEARCH */}
        <div className="hidden md:flex items-center bg-[#010409] border border-[#30363d] rounded-md px-3 py-[6px] w-[320px] lg:w-[420px]">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Type / to search"
            className="bg-transparent outline-none px-2 text-sm w-full placeholder:text-gray-400"
          />
          <span className="text-xs text-gray-400 border border-[#30363d] rounded px-1">
            /
          </span>
        </div>

        {/* RIGHT (Separated Component) */}
        <HeaderActions />
      </div>

      {/* MOBILE SEARCH */}
      {open && (
        <div className="md:hidden px-4 pb-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-[#010409] border border-[#30363d] rounded-md px-3 py-2 text-sm outline-none"
          />
        </div>
      )}
    </header>
  );
}
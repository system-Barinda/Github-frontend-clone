import { useState } from "react";
import {
  Menu,
  Search,
  Plus,
  Github,
  Users,
  CircleDot,
  GitPullRequest,
  Monitor,
  Package,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0d1117] text-white border-b border-[#21262d]">
      <div className="flex items-center justify-between px-4 py-2">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-md hover:bg-[#21262d] md:hidden"
            onClick={() => setOpen(!open)}
          >
            <Menu size={20} />
          </button>

          <Github size={28} />

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

        {/* RIGHT */}
        <div className="flex items-center gap-2">

          {/* Mobile Search */}
          <button className="md:hidden p-2 hover:bg-[#21262d] rounded-md">
            <Search size={18} />
          </button>

          {/* Team Button */}
          <div className="flex items-center border border-[#30363d] rounded-md overflow-hidden">
            <button className="p-2 hover:bg-[#21262d]">
              <Users size={16} />
            </button>
            <button className="p-2 border-l border-[#30363d] hover:bg-[#21262d]">
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Divider */}
          <div className="h-6 w-px bg-[#30363d] mx-1"></div>

          {/* Plus Button */}
          <div className="flex items-center border border-[#30363d] rounded-md overflow-hidden">
            <button className="p-2 hover:bg-[#21262d]">
              <Plus size={16} />
            </button>
            <button className="p-2 border-l border-[#30363d] hover:bg-[#21262d]">
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Issues */}
          <button className="p-2 hover:bg-[#21262d] rounded-md">
            <CircleDot size={18} />
          </button>

          {/* Pull Requests */}
          <button className="p-2 hover:bg-[#21262d] rounded-md">
            <GitPullRequest size={18} />
          </button>

          {/* Codespaces */}
          <button className="p-2 hover:bg-[#21262d] rounded-md">
            <Monitor size={18} />
          </button>

          {/* Marketplace */}
          <button className="p-2 hover:bg-[#21262d] rounded-md">
            <Package size={18} />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button className="p-2 hover:bg-[#21262d] rounded-md">
              <CircleDot size={18} />
            </button>
            <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>

          {/* Profile */}
          <img
            src="https://i.pravatar.cc/30"
            alt="profile"
            className="w-8 h-8 rounded-full border border-[#30363d] cursor-pointer"
          />
        </div>
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
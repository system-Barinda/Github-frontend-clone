import { useState } from "react";
import {
  Menu,
  Search,
  Plus,
  Bell,
  Github,
  Users,
  CircleDot,
  GitBranch,
  Inbox,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0d1117] text-white border-b border-gray-800">
      <div className="flex items-center justify-between px-4 py-2">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-md hover:bg-gray-800 md:hidden"
            onClick={() => setOpen(!open)}
          >
            <Menu size={20} />
          </button>

          <Github size={28} />

          <span className="hidden md:block font-semibold text-lg">
            Dashboard
          </span>
        </div>

        {/* CENTER (Search) */}
        <div className="hidden md:flex items-center bg-[#010409] border border-gray-700 rounded-md px-3 py-1 w-[300px] lg:w-[400px]">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Type / to search"
            className="bg-transparent outline-none px-2 text-sm w-full"
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2">

          {/* Mobile Search */}
          <button className="md:hidden p-2 hover:bg-gray-800 rounded-md">
            <Search size={18} />
          </button>

          {/* Team / Users */}
          <div className="flex items-center border border-gray-700 rounded-md overflow-hidden">
            <button className="p-2 hover:bg-gray-800">
              <Users size={16} />
            </button>
            <button className="p-2 hover:bg-gray-800 border-l border-gray-700">
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-700 mx-1"></div>

          {/* Add (+) */}
          <div className="flex items-center border border-gray-700 rounded-md overflow-hidden">
            <button className="p-2 hover:bg-gray-800">
              <Plus size={16} />
            </button>
            <button className="p-2 hover:bg-gray-800 border-l border-gray-700">
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Issues */}
          <button className="p-2 hover:bg-gray-800 rounded-md">
            <CircleDot size={18} />
          </button>

          {/* Pull Requests */}
          <button className="p-2 hover:bg-gray-800 rounded-md">
            <GitBranch size={18} />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button className="p-2 hover:bg-gray-800 rounded-md">
              <Inbox size={18} />
            </button>
            {/* Blue dot */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>

          {/* Profile */}
          <img
            src="https://i.pravatar.cc/30"
            alt="profile"
            className="w-8 h-8 rounded-full border border-gray-600 cursor-pointer"
          />
        </div>
      </div>

      {/* MOBILE SEARCH */}
      {open && (
        <div className="md:hidden px-4 pb-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-[#010409] border border-gray-700 rounded-md px-3 py-2 text-sm outline-none"
        />
        </div>
      )}
    </header>
  );
}
import { Search,Plus,Users,CircleDot,GitPullRequest,Monitor,ChevronDown,} from "lucide-react";

export default function HeaderActions() {
  return (
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


      <button className="p-2 hover:bg-[#21262d] rounded-md border border-[#30363d]">
        <CircleDot size={18} />
      </button>

      {/* Pull Requests */}


      <button className="p-2 hover:bg-[#21262d] rounded-md border border-[#30363d]">
        <GitPullRequest size={18} />
      </button>

      {/* Codespaces */}


      <button className="p-2 hover:bg-[#21262d] rounded-md border border-[#30363d]">
        <Monitor size={18} />
      </button>

      {/* Notifications */}


      <div className="relative">
        <button className="p-2 hover:bg-[#21262d] rounded-md border border-[#30363d]">
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
  );
}
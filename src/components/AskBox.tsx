import { Search, ChevronDown, Send } from "lucide-react";

export default function AskBox() {
  return (
    <div className="border border-[#30363d] rounded-xl p-4 bg-[#0d1117] space-y-4">

      <input
        placeholder="Ask anything"
        className="w-full bg-transparent outline-none text-lg placeholder:text-gray-400"
      />

      <div className="flex flex-wrap items-center justify-between gap-3">

        <div className="flex gap-2 flex-wrap">
          <button className="flex items-center gap-2 px-3 py-1 border border-[#30363d] rounded-md hover:bg-[#21262d] text-sm">
            Ask <ChevronDown size={14} />
          </button>

          <button className="flex items-center gap-2 px-3 py-1 border border-[#30363d] rounded-md hover:bg-[#21262d] text-sm">
            All repositories <ChevronDown size={14} />
          </button>

          <button className="px-2 py-1 border border-[#30363d] rounded-md hover:bg-[#21262d]">
            +
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">
            Claude Haiku 4.5
          </span>

          <button className="p-2 border border-[#30363d] rounded-md hover:bg-[#21262d]">
            <Send size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
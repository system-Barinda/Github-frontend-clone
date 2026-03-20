import { Bot, FileText, Code, GitPullRequest } from "lucide-react";

export default function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-3">

      <button className="flex items-center gap-2 px-4 py-2 border border-[#30363d] rounded-full hover:bg-[#21262d]">
        <Bot size={16} /> Agent
      </button>

      <button className="flex items-center gap-2 px-4 py-2 border border-[#30363d] rounded-full hover:bg-[#21262d]">
        <FileText size={16} /> Create issue
      </button>

      <button className="flex items-center gap-2 px-4 py-2 border border-[#30363d] rounded-full hover:bg-[#21262d]">
        <Code size={16} /> Write code
      </button>

      <button className="flex items-center gap-2 px-4 py-2 border border-[#30363d] rounded-full hover:bg-[#21262d]">
        <GitPullRequest size={16} /> Pull requests
      </button>

    </div>
  );
}
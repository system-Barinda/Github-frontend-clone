import { X } from "lucide-react";

export default function FeedAlert() {
  return (
    <div className="flex items-center justify-between border border-[#30363d] rounded-md p-3 bg-[#0d1117]">

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center">
          🎁
        </div>

        <p className="text-sm">
          You've been added to the <span className="font-semibold">RP-Tumba</span> organization.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="px-3 py-1 text-sm border border-[#30363d] rounded-md hover:bg-[#21262d]">
          View organization
        </button>
        <X size={16} className="cursor-pointer text-gray-400" />
      </div>

    </div>
  );
}
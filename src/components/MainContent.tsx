import AskBox from "./AskBox";
import ActionButtons from "./ActionButtons";
import FeedAlert from "./FeedAlert";
import RightPanel from "./RightPanel";

export default function MainContent() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 text-white w-full">

      {/* LEFT SIDE */}
      <div className="flex-1 space-y-6">

        <h1 className="text-2xl font-semibold">Home</h1>

        <AskBox />
        <ActionButtons />
        <FeedAlert />

        {/* FEED HEADER */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Feed</h2>
          <button className="px-3 py-1 border border-[#30363d] rounded-md text-sm hover:bg-[#21262d]">
            Filter
          </button>
          
        </div>
        

        {/* Placeholder Feed */}
        <div className="h-40 border border-[#30363d] rounded-md flex items-center justify-center text-gray-400">
          No activity yet
        </div>

      </div>

      {/* RIGHT PANEL */}
      <RightPanel />
    </div>
  );

}
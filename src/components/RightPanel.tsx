export default function RightPanel() {
  return (
    <div className=" h-full w-full lg:w-[320px] border border-[#30363d] rounded-xl p-4 space-y-4 bg-[#0d1117]">

      <h3 className="font-semibold text-sm">
        Latest from our changelog
      </h3>

      <div className="space-y-4 text-sm">

        <div>
          <p className="text-gray-400 text-xs">11 hours ago</p>
          <p>More visibility into Copilot coding agent sessions</p>
        </div>

        <div>
          <p className="text-gray-400 text-xs">13 hours ago</p>
          <p>GitHub Actions: Late March 2026 updates</p>
        </div>

        <div>
          <p className="text-gray-400 text-xs">14 hours ago</p>
          <p>Actions Runner Controller release 0.14.0</p>
        </div>

        <div>
          <p className="text-gray-400 text-xs">15 hours ago</p>
          <p>Copilot coding agent now starts work 50% faster</p>
        </div>

      </div>

      <button className="text-sm text-blue-400 hover:underline">
        View changelog →
      </button>

    </div>
  );
}
export default function RightPanel() {
  const updates = [
    {
      time: "11 hours ago",
      text: "More visibility into Copilot coding agent sessions",
    },
    {
      time: "13 hours ago",
      text: "GitHub Actions: Late March 2026 updates",
    },
    {
      time: "14 hours ago",
      text: "Actions Runner Controller release 0.14.0",
    },
    {
      time: "15 hours ago",
      text: "Copilot coding agent now starts work 50% faster",
    },
  ];

  return (
    <div className="h-full w-full lg:w-[320px] border border-[#30363d] rounded-xl p-4 bg-[#0d1117]">

      <h3 className="font-semibold text-sm mb-4">
        Latest from our changelog
      </h3>

      <div className="relative">

        {/* Vertical line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-[#30363d]" />

        {/* Timeline items */}
        <div className="space-y-6">
          {updates.map((item, index) => (
            <div key={index} className="flex gap-3 relative">

              {/* Dot */}
              <div className="relative z-10">
                <div className="w-3 h-3 bg-[#8b949e] rounded-full"></div>
              </div>

              {/* Content */}
              <div className="text-sm">
                <p className="text-gray-400 text-xs">
                  {item.time}
                </p>
                <p className="text-white leading-snug">
                  {item.text}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      <button className="mt-6 text-sm text-blue-400 hover:underline">
        View changelog →
      </button>

    </div>
  );
}
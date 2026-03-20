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
    <div className="h-full w-full lg:w-[320px] border border-[#30363d] rounded-xl p-5 bg-[#0d1117]">

      {/* Title */}
      <h3 className="font-semibold text-[14px] text-white mb-5">
        Latest from our changelog
      </h3>

      {/* Timeline */}
      <div className="relative">

        {/* Vertical line */}
        <div className="absolute left-[6px] top-1 bottom-1 w-[1px] bg-[#30363d]" />

        <div className="space-y-6">
          {updates.map((item, index) => (
            <div key={index} className="flex items-start gap-4">

              {/* Dot */}
              <div className="relative z-10 mt-[6px]">
                <div className="w-[10px] h-[10px] bg-[#6e7681] rounded-full"></div>
              </div>

              {/* Content */}
              <div>
                <p className="text-[#8b949e] text-xs mb-1">
                  {item.time}
                </p>
                <p className="text-[14px] text-[#c9d1d9] leading-[1.4]">
                  {item.text}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Footer link */}
      <button className="mt-6 text-sm text-[#2f81f7] hover:underline">
        View changelog →
      </button>

    </div>
  );
}
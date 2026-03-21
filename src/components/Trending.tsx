export default function Trending() {
   type Repo = {
  name: string;
  language: string;
  stars: number | string;
  description: string;
};
  const repos:Repo[] = [
    {
      name: "math-inc/OpenGauss",
      language: "Python",
      stars: 478,
      description: "",
    },
    {
      name: "FujiwaraChoki/MoneyPrinterV2",
      language: "Python",
      stars: "16.8k",
      description: "Automate the process of making money online.",
    },
  ];

  return (
    <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-4 w-full max-w-2xl mx-auto text-gray-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <div className="text-sm">
          <span className="font-semibold">Trending repositories</span>
          <span className="mx-1">·</span>
          <a href="#" className="text-blue-400 hover:underline">
            See more
          </a>
        </div>

        
      </div>

      {/* Repo List */}
      <div className="flex flex-col">
        {repos.map((repo, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row sm:justify-between sm:items-start py-4 ${
              index !== 0 ? "border-t border-gray-700" : ""
            }`}
          >
            {/* LEFT */}
            <div>
              <h3 className="text-blue-400 font-medium text-sm mb-1">
                {repo.name}
              </h3>

              {repo.description && (
                <p className="text-sm text-gray-400 mb-2">
                  {repo.description}
                </p>
              )}

              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  {repo.language}
                </span>

                <span>⭐ {repo.stars}</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="mt-3 sm:mt-0">
              <button className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-md text-sm hover:bg-gray-700">
                ☆ Star
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
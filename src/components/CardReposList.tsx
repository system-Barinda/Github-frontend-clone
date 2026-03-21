
export default function CardReposList({repos}){
    return(
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
    )
}
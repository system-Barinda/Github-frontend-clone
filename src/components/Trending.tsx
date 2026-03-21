import { repos } from "../services/Repositorytrending";
import CardReposList from "./CardReposList"
export default function Trending() {
 

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
       <CardReposList repos={repos} />
    </div>
  );
}
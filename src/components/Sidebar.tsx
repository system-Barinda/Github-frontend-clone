import { useState } from "react";
import { ChevronDown, BookOpen } from "lucide-react";
import ProfileName from "../assets/profileName.png"
import { repos } from "../services/ReposotoryList";


export default function Sidebar() {
  const [search, setSearch] = useState("");

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="bg-[#0d1117] text-white w-full md:w-[300px] lg:w-[320px] border-r border-[#21262d] p-4">

      {/* USER */}
      <div className="flex items-center gap-3 mb-6">
        <img
          src={ProfileName}
          alt="profile"
          className="w-10 h-10 rounded-full"
        />

        <div className="flex items-center gap-1 cursor-pointer">
          <span className="font-semibold text-sm">system-Barinda</span>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>

      {/* TOP REPOS HEADER */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-gray-300">
          Top repositories
        </h2>

        <button className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-sm px-2 py-1 rounded-md">
          <BookOpen size={14} />
          New
        </button>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Find a repository..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 bg-[#010409] border border-[#30363d] rounded-md px-3 py-2 text-sm outline-none placeholder:text-gray-400"
      />

      {/* REPO LIST */}
      <div className="space-y-3">
        {filteredRepos.map((repo) => (
          <div
            key={repo.id}
            className="flex items-center gap-2 cursor-pointer hover:text-blue-400"
          >
            <img
              src={ProfileName}
              alt="repo"
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm">{repo.name}</span>
          </div>
        ))}
      </div>

      {/* SHOW MORE */}
      <button className="mt-4 text-sm text-gray-400 hover:text-blue-400">
        Show more
      </button>
    </aside>
  );
}
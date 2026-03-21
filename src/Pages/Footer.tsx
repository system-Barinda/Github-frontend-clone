export default function Footer() {
  return (
    <footer className="border-t border-[#30363d] mt-10 mb-0 py-6 text-sm text-gray-400">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-4">

        {/* LEFT */}
        <div className="flex items-center gap-2">
          {/* GitHub Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-5 h-5 text-gray-400"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 
            0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
            -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 
            2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
            0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 
            0 0 .67-.21 2.2.82a7.66 7.66 0 0 1 2-.27c.68 0 1.36.09 
            2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 
            2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 
            3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 
            0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>

          <span>© 2026 GitHub, Inc.</span>
        </div>

        {/* RIGHT LINKS */}
        <div className="flex flex-wrap justify-center lg:justify-end gap-x-4 gap-y-2 text-gray-400">
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Security</a>
          <a href="#" className="hover:text-white">Status</a>
          <a href="#" className="hover:text-white">Community</a>
          <a href="#" className="hover:text-white">Docs</a>
          <a href="#" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Manage cookies</a>
        </div>
      </div>

      {/* BOTTOM TEXT */}
      <div className="text-center text-xs text-gray-500 mt-2">
        Do not share my personal information
      </div>
    </footer>
  );
}
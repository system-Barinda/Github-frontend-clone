import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./Pages/Footer";

export default function App() {
  return (
    <div className="flex flex-col h-full bg-[#0d1117] ">

      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        {/* MAIN CONTENT */}
        <main className="flex-1 p-4 text-white">
          <MainContent />
          <Footer />
        </main>
        
      </div>
     
    </div>
  );
}
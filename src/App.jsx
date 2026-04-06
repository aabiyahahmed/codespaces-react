import React, { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import KBCard from './components/UI/KBCard';
import CreateModal from './components/UI/CreateModal';
import Button from './components/UI/Button';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const kbData = Array(6).fill({
    title: "Test",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    date: "14/07/2025"
  });

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <Header onCreateClick={() => setIsModalOpen(true)} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        {/* main needs w-full to ensure it fills space but allows max-w inside */}
       <main className="flex-1 overflow-y-auto bg-[#f9fafb] p-0 my-0 scrollbar-thin scrollbar-thumb scrollbar-track">
          <div className="p-8 mx-auto w-full max-w-[1280px]">
            
            {/* Header section of the main content */}
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-2xl font-bold text-[#1E1B4B]">Knowledge Base </h1>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#bbbcbf]">🔍</span>
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="border border-[#dedfe3] rounded-md pl-10 pr-4 py-1.5 text-sm text-[#bbbcbf] placeholder:text-[#bbbcbf] focus:outline-none w-72 bg-white"
  
                  />
                </div>
                {/* Primary Color: #4F46E5  */}
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#4F46E5] text-white px-5 py-1 rounded-md text-sm font-semibold hover:bg-indigo-700 transition-all flex items-center gap-2 border border-transparent"
                >
                  <span className="text-xl">+</span> Create New 
                </button>
              </div>
            </div>

            {/* THE FIX: Explicitly forcing 3 columns on large screens  */}
            
            
            <div className="grid grid-cols-3 gap-8 items-start w-full">
              {kbData.map((item, index) => (
                <KBCard key={index} {...item} />
              ))}
            </div>

            {/* Pagination  */}
            <div className="mt-16 py-6 border-t border-[#dedfe3] flex justify-between items-center text-sm text-[#525354]">
              <div>6 rows</div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3 text-[#525354] font-medium">
                  <span>Rows per page</span>
                  <select className="border border-[#dedfe3] rounded-md px-2 py-1 bg-white outline-none">
                    <option>10</option>
                  </select>
                </div>
                <span className="font-medium text-gray-600">page 1 of 1</span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 flex items-center justify-center border border-[#dedfe3] rounded-md bg-white hover:bg-gray-50 text-gray-300">«</button>
                  <button className="w-8 h-8 flex items-center justify-center border border-[#dedfe3] rounded-md bg-white hover:bg-gray-50 text-gray-300">‹</button>
                  <button className="w-8 h-8 flex items-center justify-center border border-[#dedfe3] rounded-md bg-white hover:bg-gray-50 text-gray-600">›</button>
                  <button className="w-8 h-8 flex items-center justify-center border border-[#dedfe3] rounded-md bg-white hover:bg-gray-50 text-gray-600">»</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {isModalOpen && <CreateModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;
import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

const Header = ({ onCreateClick }) => {
  return (
    <header className="h-16 bg-[#1E1B4B] bg-[linear-gradient(90deg,_rgba(30,27,75,1)_0%,_rgba(52,52,125,1)_50%,_rgba(30,27,75,1)_100%)] flex items-center justify-between px-6 shrink-0 border-b border-white/10">
      <div className="flex items-center gap-4">
        {/* Branding Moved Here */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#4F46E5] rounded-lg flex items-center justify-center text-white">
            <span className="font-bold italic">W</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-white">Worcspace</span>
        </div>

        {/* Workspace Selector */}
        <div className="bg-[#2b3f6e] text-center text-white px-3 py-1 rounded-full text-[12px] flex items-center gap-2 cursor-pointer  ml-4 hover:bg-[#373370] transition-colors">
          <span className="font-medium">Worcspace 1</span>
          <ChevronDown size={12} className="opacity-80" />
        </div>
      </div>

      {/* Search Bar - Centered Horizontally */}
      <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-sm">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b1b3b2]" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-[#a2a2a24d] border-none rounded-lg py-1.5 pl-10 pr-12 text-sm text-[#b1b3b2] placeholder:text-[#b1b3b2] focus:outline-none focus:ring-0 focus:border-none transition-all"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-[#b1b3b2] border border-gray-600 px-1 rounded">⌘K</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Bell size={20} className="text-[#b1b3b2] cursor-pointer hover:text-white" />
        <div className="w-8 h-8 bg-[#a4a6ed] rounded-full flex items-center justify-center text-[#1E1B4B] font-bold text-xs">
          GK
        </div>
      </div>
    </header>
  );
};

export default Header;
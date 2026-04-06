import React from 'react';
import { X } from 'lucide-react';

const CreateModal = ({ onClose }) => {
  const handleContentClick = (e) => e.stopPropagation();

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-[#121212]/50  flex justify-end  duration-300"
      onClick={onClose}
    >
      {/* Slide-over Panel */}
        
        <div 
          className="w-full max-w-[450px] bg-white h-screen shadow-[-40px_0_80px_-20px_rgba(0,0,0,0.3)] flex flex-col border-l border-[#dedfe3]"
          onClick={handleContentClick}
        >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-[#dedfe3]">
          <div>
            <h2 className="text-xl font-bold text-[#1E1B4B]">Create Knowledge Base</h2>
            <p className="text-xs text-gray-400 mt-1">Best for quick answers from documents, websites and text files.</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-full text-[#bbbcbf] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body - Space increased to space-y-10 */}
        <div className="flex-1 overflow-y-auto p-6 space-y-10">
          
          {/* Input: Name */}
          <div className="space-y-3">
            <label className="text-[13px] font-semibold text-[#575859] flex ">
              Name (Cannot be edited later )<span className="text-[#f51b14]">*</span>
            </label>
            <input 
              type="text" 
              placeholder="Name"
              className="w-full border border-[#dedfe3] rounded-md px-4 py-2.5 text-sm focus:ring-1 focus:ring-[#4F46E5] focus:border-[#4F46E5] outline-none bg-white transition-all placeholder:text-[#7d7d80]"
            />
          </div>

          {/* Input: Description */}
          <div className="space-y-3">
            <label className="text-[13px] font-semibold text-[#575859]">Description</label>
            <textarea 
              rows={4}
              placeholder="Description"
              className="w-full border border-[#dedfe3] rounded-md px-4 py-2.5 text-sm focus:ring-1 focus:ring-[#4F46E5] focus:border-[#4F46E5] outline-none bg-white resize-none transition-all placeholder:text-[#7d7d80]"
            />
          </div>

          {/* Input: Vector Store */}
          <div className="space-y-3">
            <label className="text-[13px] font-semibold text-[#575859] flex">
              Vector Store <span className="text-[#f51b14]">*</span>
            </label>
            
            <div className="relative">
              <select 
                className="w-full border border-[#dedfe3] rounded-md px-4 py-2.5 text-sm focus:ring-1 focus:ring-[#4F46E5] focus:border-[#4F46E5] outline-none bg-white transition-all appearance-none cursor-pointer pr-10 text-[#7d7d80]"
              >
                <option value="default">Default</option>
                <option value="pinecone">Pinecone</option>
                <option value="supabase">Supabase</option>
                <option value="milvus">Milvus</option>
              </select>
              
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-[#bbbcbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Input: LLM Embedding Model */}
          <div className="space-y-3">
            <label className="text-[13px] font-semibold text-[#575859] flex ">
              LLM Embedding Model <span className="text-[#f51b14]">*</span>
            </label>
            
            <div className="relative">
              <select 
                className="w-full border border-[#dedfe3] rounded-md px-4 py-2.5 pr-10 text-sm focus:ring-1 focus:ring-[#4F46E5] focus:border-[#4F46E5] outline-none bg-white transition-all appearance-none cursor-pointer text-[#7d7d80]"
              >
                <option value="text-embedding-3-small">text-embedding-3-small</option>
                <option value="text-embedding-3-large">text-embedding-3-large</option>
                <option value="text-embedding-ada-002">text-embedding-ada-002</option>
                <option value="titan-embed-text-v1">titan-embed-text-v1</option>
              </select>

              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-[#bbbcbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#dedfe3] flex justify-end bg-gray-50/30">
          <button 
            
            className="w-[80px] py-2.5 bg-[var(--color-primary)] text-white rounded-md text-sm font-semibold cursor-not-allowed shadow-lg shadow-indigo-200"
          >
            Create 
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
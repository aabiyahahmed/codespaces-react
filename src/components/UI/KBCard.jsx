import React from 'react';

const KBCard = ({ title, description, date }) => {
  return (
    <div className="bg-white border border-[#dedfe3] rounded-xl p-6 flex flex-col min-h-[220px]">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-[#575859] text-lg">{title}</h3>
        <button className="text-[#7d7d80] hover:text-[#7d7d80] text-xl leading-none">⋮</button>
      </div>
      
      <p className="text-sm text-[#7d7d80] leading-relaxed flex-1">
        {description}
      </p>

      {/* Thin Horizontal Line as seen in Document */}
      <hr className="border-[#dedfe3] my-4" />

      <div className="text-[11px] text-[#7d7d80]">
        Created On: <span className="font-medium text-[#7d7d80]">{date}</span>
      </div>
    </div>
  );
};
export default KBCard;
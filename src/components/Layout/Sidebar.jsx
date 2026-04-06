import React from 'react';
import { 
  Bot, 
  Cpu, 
  Library, 
  Send, 
  Monitor, 
  Layers, 
  Zap, 
  Video, 
  PlayCircle, 
  ShieldCheck, 
  BookOpen, 
  Key, 
  Fingerprint, 
  PlugZap,
} from 'lucide-react';

const NavItem = ({ label, icon: Icon, active = false }) => (
  <div className={`relative flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer mb-1 transition-all duration-200 ${
    active 
      ? 'bg-indigo-50/80 text-[#4F46E5]' 
      : 'text-[#575859] hover:bg-gray-50'
  }`}>
    
    {/* The Vertical Indicator Line */}
    {active && (
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-[#4F46E5] rounded-r-full" />
    )}

    <span className={active ? 'opacity-100' : 'opacity-70'}>
      <Icon size={18} />
    </span>
    
    <span className="text-sm font-medium">{label}</span>
  </div>
);
const Sidebar = () => {
  return (
    <aside className="w-64 h-full border-r border-[#dedfe3] bg-white flex flex-col p-4 shrink-0 overflow-y-auto scrollbar-thin scrollbar-thumb scrollbar-track">
      <div className="mb-6">
        <p className="text-[11px] font-bold text-[#7d7d80] uppercase tracking-widest mb-3 px-2">My Projects</p>
        <NavItem label="Agents" icon={Bot} />
        <NavItem label="AI Models" icon={Cpu} />
        <NavItem label="Library" icon={Library} />

        <p className="text-[11px] font-bold text-[#7d7d80] uppercase tracking-widest mt-8 mb-3 px-2">Orchestrator</p>
        <NavItem label="Published" icon={Send} />
        <NavItem label="Machines" icon={Monitor} />
        <NavItem label="Queues" icon={Layers} />
        <NavItem label="Triggers" icon={Zap} />
        <NavItem label="Jobs" icon={Video} />
        <NavItem label="Executions" icon={PlayCircle} />
        <NavItem label="Vault" icon={ShieldCheck} />
        <NavItem label="Knowledge Base" icon={BookOpen} active={true} />
        <NavItem label="Key Store" icon={Library} />
        
        <p className="text-[11px] font-bold text-[#7d7d80] uppercase tracking-widest mt-8 mb-3 px-2">Admin</p>
        <NavItem label="Tenant" icon={Fingerprint} />
        <NavItem label="Integrations" icon={PlugZap} />
      </div>
    </aside>
  );
};

export default Sidebar;
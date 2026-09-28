import React, { useState } from 'react';
import { Header } from './components/Header';
import { PresentationMode } from './components/PresentationMode';
import { MonsterGameShow } from './components/MonsterGameShow';
import { PackingChecklist } from './components/PackingChecklist';
import { BaggageBatterySimulator } from './components/BaggageBatterySimulator';
import { RespectAndHarmony } from './components/RespectAndHarmony';
import { EmergencyActionManual } from './components/EmergencyActionManual';

export default function App() {
  const [activeTab, setActiveTab] = useState<
    'presentation' | 'monstershow' | 'handbook' | 'battery' | 'packing' | 'emergency'
  >('presentation');

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-slate-900 flex flex-col font-sans selection:bg-[#F9D342] selection:text-slate-900">
      {/* Universal Top Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onFullscreen={handleFullscreen}
        onPrint={handlePrint}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'presentation' && <PresentationMode />}
        {activeTab === 'monstershow' && <MonsterGameShow />}
        {activeTab === 'battery' && <BaggageBatterySimulator />}
        {activeTab === 'packing' && <PackingChecklist />}
        {activeTab === 'handbook' && <RespectAndHarmony />}
        {activeTab === 'emergency' && <EmergencyActionManual />}
      </main>

      {/* Playful Pop-Mart Styled Footer */}
      <footer className="border-t-4 border-slate-900 bg-[#2B3A67] px-4 sm:px-8 py-5 text-center text-xs text-slate-300 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-dohyeon text-sm text-[#F9D342]">담양여자중학교</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span className="font-jua text-white">2026. 글로컬 죽향(竹鄕) 역사문화 탐방단</span>
          </div>
          <div className="flex items-center gap-3 font-jua text-slate-300">
            <span>몬스터 에디션 안전교육 & 비상 매뉴얼</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span className="text-[#FF8080]">안전제일 즐거운 여행!</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

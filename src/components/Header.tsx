import React from 'react';
import { Presentation, BookOpen, AlertTriangle, Printer, Maximize2, Sparkles, Gamepad2, Battery, CheckSquare } from 'lucide-react';

interface HeaderProps {
  activeTab: 'presentation' | 'monstershow' | 'handbook' | 'battery' | 'packing' | 'emergency';
  setActiveTab: (tab: 'presentation' | 'monstershow' | 'handbook' | 'battery' | 'packing' | 'emergency') => void;
  onPrint?: () => void;
  onFullscreen?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onPrint,
  onFullscreen,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#2B3A67] border-b-4 border-slate-900 px-4 lg:px-8 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Zone 1: Single text element Brand Zone with playful icon */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-2xl bg-[#F9D342] border-2 border-slate-900 flex items-center justify-center text-slate-900 font-dohyeon text-lg shadow-sm">
            竹
          </div>
          <span className="text-base sm:text-lg font-dohyeon tracking-tight text-white whitespace-nowrap">
            담양여중 글로컬 안전탐험대
          </span>
        </div>

        {/* Zone 2: Navigation Links with Pop-Mart styling */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <button
            onClick={() => setActiveTab('presentation')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs lg:text-sm font-jua rounded-xl transition-all border-2 ${
              activeTab === 'presentation'
                ? 'bg-[#F9D342] text-slate-900 border-slate-900 font-bold shadow-xs'
                : 'text-slate-200 border-transparent hover:bg-white/10 hover:text-white'
            }`}
          >
            <Presentation className="w-4 h-4" />
            <span>시청각실 발표</span>
          </button>

          <button
            onClick={() => setActiveTab('monstershow')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs lg:text-sm font-jua rounded-xl transition-all border-2 ${
              activeTab === 'monstershow'
                ? 'bg-[#FF8080] text-white border-slate-900 font-bold shadow-xs animate-pulse'
                : 'bg-[#FF8080]/30 text-amber-200 border-amber-300/40 hover:bg-[#FF8080] hover:text-white'
            }`}
          >
            <Gamepad2 className="w-4 h-4 text-amber-300" />
            <span>몬스터 퀴즈쇼 🎮</span>
          </button>

          <button
            onClick={() => setActiveTab('battery')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs lg:text-sm font-jua rounded-xl transition-all border-2 ${
              activeTab === 'battery'
                ? 'bg-[#F9D342] text-slate-900 border-slate-900 font-bold shadow-xs'
                : 'text-slate-200 border-transparent hover:bg-white/10 hover:text-white'
            }`}
          >
            <Battery className="w-4 h-4" />
            <span>배터리·수하물</span>
          </button>

          <button
            onClick={() => setActiveTab('packing')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs lg:text-sm font-jua rounded-xl transition-all border-2 ${
              activeTab === 'packing'
                ? 'bg-[#F9D342] text-slate-900 border-slate-900 font-bold shadow-xs'
                : 'text-slate-200 border-transparent hover:bg-white/10 hover:text-white'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>준비물 체크</span>
          </button>

          <button
            onClick={() => setActiveTab('handbook')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs lg:text-sm font-jua rounded-xl transition-all border-2 ${
              activeTab === 'handbook'
                ? 'bg-[#F9D342] text-slate-900 border-slate-900 font-bold shadow-xs'
                : 'text-slate-200 border-transparent hover:bg-white/10 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>생활&존중수칙</span>
          </button>

          <button
            onClick={() => setActiveTab('emergency')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs lg:text-sm font-jua rounded-xl transition-all border-2 ${
              activeTab === 'emergency'
                ? 'bg-[#F9D342] text-slate-900 border-slate-900 font-bold shadow-xs'
                : 'text-slate-200 border-transparent hover:bg-white/10 hover:text-white'
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-amber-300" />
            <span>비상 SOS</span>
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {onFullscreen && (
            <button
              onClick={onFullscreen}
              title="전체화면"
              className="p-2 text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-600 transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          )}
          {onPrint && (
            <button
              onClick={onPrint}
              title="인쇄"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-jua text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-600 transition-colors whitespace-nowrap"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>인쇄</span>
            </button>
          )}
          <button
            onClick={() => setActiveTab(activeTab === 'monstershow' ? 'presentation' : 'monstershow')}
            className="px-3.5 py-2 text-xs font-dohyeon text-slate-900 bg-[#F9D342] hover:bg-[#FBE068] rounded-xl border-2 border-slate-900 shadow-md transition-all whitespace-nowrap"
          >
            {activeTab === 'monstershow' ? '시청각실 발표로 ➔' : '퀴즈쇼 시작! 🎮'}
          </button>
        </div>
      </div>

      {/* Mobile Tab Scroller */}
      <div className="flex md:hidden items-center gap-1.5 overflow-x-auto pt-2 pb-1 no-scrollbar border-t border-white/20 mt-2">
        <button
          onClick={() => setActiveTab('presentation')}
          className={`px-3 py-1 text-xs font-jua rounded-lg whitespace-nowrap ${
            activeTab === 'presentation' ? 'bg-[#F9D342] text-slate-900 font-bold' : 'text-white bg-white/15'
          }`}
        >
          시청각실 발표
        </button>
        <button
          onClick={() => setActiveTab('monstershow')}
          className={`px-3 py-1 text-xs font-jua rounded-lg whitespace-nowrap ${
            activeTab === 'monstershow' ? 'bg-[#FF8080] text-white font-bold' : 'text-amber-300 bg-white/15'
          }`}
        >
          몬스터 퀴즈쇼 🎮
        </button>
        <button
          onClick={() => setActiveTab('battery')}
          className={`px-3 py-1 text-xs font-jua rounded-lg whitespace-nowrap ${
            activeTab === 'battery' ? 'bg-[#F9D342] text-slate-900 font-bold' : 'text-white bg-white/15'
          }`}
        >
          배터리·수하물
        </button>
        <button
          onClick={() => setActiveTab('packing')}
          className={`px-3 py-1 text-xs font-jua rounded-lg whitespace-nowrap ${
            activeTab === 'packing' ? 'bg-[#F9D342] text-slate-900 font-bold' : 'text-white bg-white/15'
          }`}
        >
          준비물
        </button>
        <button
          onClick={() => setActiveTab('handbook')}
          className={`px-3 py-1 text-xs font-jua rounded-lg whitespace-nowrap ${
            activeTab === 'handbook' ? 'bg-[#F9D342] text-slate-900 font-bold' : 'text-white bg-white/15'
          }`}
        >
          생활&존중
        </button>
        <button
          onClick={() => setActiveTab('emergency')}
          className={`px-3 py-1 text-xs font-jua rounded-lg whitespace-nowrap ${
            activeTab === 'emergency' ? 'bg-[#F9D342] text-slate-900 font-bold' : 'text-white bg-white/15'
          }`}
        >
          비상 SOS
        </button>
      </div>
    </header>
  );
};

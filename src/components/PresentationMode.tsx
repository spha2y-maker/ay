import React, { useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Sun,
  Moon,
  Info,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Volume2,
  ShieldCheck,
  ListOrdered,
  Sparkles,
  Palette
} from 'lucide-react';
import { SLIDES_DATA, EXPLORATION_PURPOSES } from '../data/safetyData';

// Image assets mapping
import bannerDamyang from '../assets/images/damyang_bamboo_historical_trip_1790580203953.jpg';
import bannerAirport from '../assets/images/airport_incheon_departure_guide_1790580218844.jpg';
import bannerCabin from '../assets/images/flight_safety_airplane_cabin_1790580238423.jpg';
import bannerKit from '../assets/images/safety_preparedness_emergency_kit_1790580250649.jpg';

// Mascots
import mascotBamboo from '../assets/images/bamboo_monster_hero_1790597455932.jpg';
import mascotQuestion from '../assets/images/curious_question_monster_1790597469605.jpg';
import mascotParty from '../assets/images/party_celebrate_monster_1790597487194.jpg';
import mascotPilot from '../assets/images/safety_pilot_monster_1790597501246.jpg';

export const PresentationMode: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fontSizeLevel, setFontSizeLevel] = useState<'normal' | 'large' | 'huge'>('large');
  const [themeStyle, setThemeStyle] = useState<'popmart' | 'dark' | 'bright'>('popmart');
  const [showTeacherNotes, setShowTeacherNotes] = useState(false);
  const [showSlideList, setShowSlideList] = useState(false);

  const slide = SLIDES_DATA[currentSlideIndex];
  const totalSlides = SLIDES_DATA.length;

  const goToNext = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const getSlideImage = (id: string) => {
    switch (id) {
      case 'intro':
        return bannerDamyang;
      case 'airport':
        return bannerAirport;
      case 'flight-bus':
        return bannerCabin;
      case 'packing':
      case 'battery-baggage':
        return bannerKit;
      default:
        return null;
    }
  };

  // Assign mascots to slides for pop-mart monster charm
  const getSlideMascot = (idx: number) => {
    const mascots = [mascotBamboo, mascotPilot, mascotQuestion, mascotParty];
    return mascots[idx % mascots.length];
  };

  // Pastel Color blocking for Pop Mart theme
  const getSlideColorBg = (idx: number) => {
    const colors = [
      'bg-[#A8D5BA]', // Sage mint
      'bg-[#FCE38A]', // Butter yellow
      'bg-[#F38181]', // Coral peach
      'bg-[#B9E9FC]', // Sky blue
      'bg-[#EAFFD0]', // Soft lime
      'bg-[#D4A5A5]', // Dusty rose
      'bg-[#95E1D3]', // Mint turquoise
      'bg-[#F9D5D3]', // Soft pink
      'bg-[#FFF275]', // Bright sunny yellow
      'bg-[#9ED2BE]', // Pastel emerald
      'bg-[#A0C4FF]', // Light periwinkle
    ];
    return colors[idx % colors.length];
  };

  const currentImage = getSlideImage(slide.id);
  const currentMascot = getSlideMascot(currentSlideIndex);

  // Dynamic font sizing
  const titleSizeClass =
    fontSizeLevel === 'huge'
      ? 'text-3xl sm:text-4xl lg:text-5xl'
      : fontSizeLevel === 'large'
      ? 'text-2xl sm:text-3xl lg:text-4xl'
      : 'text-xl sm:text-2xl lg:text-3xl';

  const bodySizeClass =
    fontSizeLevel === 'huge'
      ? 'text-lg sm:text-xl lg:text-2xl leading-relaxed'
      : fontSizeLevel === 'large'
      ? 'text-base sm:text-lg lg:text-xl leading-relaxed'
      : 'text-sm sm:text-base lg:text-lg leading-relaxed';

  // Overall Theme Container Class
  let containerBg = 'bg-slate-950 text-slate-100';
  if (themeStyle === 'popmart') {
    containerBg = `${getSlideColorBg(currentSlideIndex)} text-slate-900`;
  } else if (themeStyle === 'bright') {
    containerBg = 'bg-slate-50 text-slate-900';
  }

  return (
    <div className={`min-h-[calc(100vh-65px)] flex flex-col transition-colors duration-300 ${containerBg}`}>
      {/* Top Presentation Ribbon & Toolbar */}
      <div
        className={`px-4 sm:px-8 py-3 border-b flex flex-wrap items-center justify-between gap-3 ${
          themeStyle === 'popmart'
            ? 'bg-white/85 backdrop-blur-md border-slate-900/10 shadow-xs'
            : themeStyle === 'dark'
            ? 'bg-slate-900/90 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setShowSlideList(!showSlideList)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-typewriter font-bold transition-colors ${
              themeStyle === 'popmart'
                ? 'bg-[#2B3A67] text-white shadow-xs'
                : 'bg-slate-800 text-slate-200'
            }`}
          >
            <ListOrdered className="w-4 h-4 text-amber-300" />
            <span>MGA SLIDE {currentSlideIndex + 1}/{totalSlides}</span>
          </button>

          <span className={`text-xs font-typewriter font-bold px-2.5 py-1 rounded-lg ${
            themeStyle === 'popmart'
              ? 'bg-[#E76F51] text-white shadow-xs'
              : 'bg-emerald-950 text-emerald-300 border border-emerald-800/50'
          }`}>
            {slide.chapter} · {slide.category}
          </span>
        </div>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Style Toggle */}
          <button
            onClick={() => {
              if (themeStyle === 'popmart') setThemeStyle('dark');
              else if (themeStyle === 'dark') setThemeStyle('bright');
              else setThemeStyle('popmart');
            }}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-typewriter font-bold transition-colors ${
              themeStyle === 'popmart'
                ? 'bg-[#F9D342] text-slate-900 shadow-xs'
                : themeStyle === 'dark'
                ? 'bg-slate-800 text-amber-300'
                : 'bg-slate-100 text-slate-700'
            }`}
            title="테마 스타일 변경 (팝마트 몬스터 / 다크 / 화이트)"
          >
            <Palette className="w-3.5 h-3.5" />
            <span>{themeStyle === 'popmart' ? '몬스터 팝 테마' : themeStyle === 'dark' ? '다크 시네마' : '클린 화이트'}</span>
          </button>

          {/* Font Scaling */}
          <div className="flex items-center rounded-lg p-0.5 border border-slate-700/30 bg-white/40">
            <button
              onClick={() => setFontSizeLevel('normal')}
              className={`px-2 py-1 text-xs font-bold rounded ${
                fontSizeLevel === 'normal' ? 'bg-[#2B3A67] text-white' : 'text-slate-700'
              }`}
            >
              A
            </button>
            <button
              onClick={() => setFontSizeLevel('large')}
              className={`px-2 py-1 text-xs font-bold rounded ${
                fontSizeLevel === 'large' ? 'bg-[#2B3A67] text-white' : 'text-slate-700'
              }`}
            >
              A+
            </button>
            <button
              onClick={() => setFontSizeLevel('huge')}
              className={`px-2 py-1 text-xs font-bold rounded ${
                fontSizeLevel === 'huge' ? 'bg-[#2B3A67] text-white' : 'text-slate-700'
              }`}
            >
              A++
            </button>
          </div>

          {/* Teacher Guide Notes Toggle */}
          <button
            onClick={() => setShowTeacherNotes(!showTeacherNotes)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-jua transition-colors ${
              showTeacherNotes
                ? 'bg-[#E76F51] text-white'
                : 'bg-white/80 border border-slate-300 text-slate-700 hover:bg-white'
            }`}
          >
            <Info className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">발표자 지도 팁</span>
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-white/80 border border-slate-300 text-slate-700 hover:bg-white transition-colors"
            title="전체화면 (F키)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Slide Navigation Overlay Drawer */}
      {showSlideList && (
        <div className="px-4 sm:px-8 py-3 bg-white/95 border-b border-slate-300 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs z-20 shadow-md">
          {SLIDES_DATA.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                setCurrentSlideIndex(idx);
                setShowSlideList(false);
              }}
              className={`p-2.5 text-left rounded-xl transition-all border ${
                idx === currentSlideIndex
                  ? 'bg-[#2B3A67] text-white border-[#2B3A67] font-bold shadow-xs'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="text-[10px] font-typewriter opacity-75">{s.chapter}</div>
              <div className="truncate font-jua text-sm">{s.badge}</div>
            </button>
          ))}
        </div>
      )}

      {/* Main Slide Stage */}
      <div className="flex-1 flex flex-col justify-between max-w-7xl mx-auto w-full px-4 sm:px-8 py-6 lg:py-8">
        <div className="space-y-6">
          {/* Top Title Banner with Pop-Mart accents */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-block bg-[#E76F51] text-white font-typewriter font-bold text-xs px-3 py-1 rounded-full shadow-xs">
                  {slide.badge}
                </span>
                <span className="text-xs font-jua text-slate-600">
                  담양여자중학교 글로컬 탐방 안전교육 · {currentSlideIndex + 1}/{totalSlides}
                </span>
              </div>
              <h1 className={`font-dohyeon tracking-tight text-[#2B3A67] ${titleSizeClass}`}>
                {slide.title}
              </h1>
              <p className={`font-jua text-[#E76F51] ${fontSizeLevel === 'huge' ? 'text-2xl' : 'text-lg sm:text-xl'}`}>
                {slide.subTitle}
              </p>
            </div>

            {/* Monster Mascot Sticker Badge */}
            {themeStyle === 'popmart' && (
              <div className="hidden md:flex flex-col items-center shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-white p-2 border-3 border-slate-900 shadow-xl transform rotate-3">
                  <img src={currentMascot} alt="Mascot" className="w-full h-full object-cover rounded-xl" />
                </div>
                <span className="text-[11px] font-typewriter font-bold text-slate-700 bg-white/80 px-2 py-0.5 rounded-full mt-1 border border-slate-300">
                  안전 몬스터
                </span>
              </div>
            )}
          </div>

          {/* Slide Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Key Points in Speech Bubble Card */}
            <div className={currentImage ? 'lg:col-span-7 space-y-4' : 'lg:col-span-12 space-y-4'}>
              <div className="space-y-3">
                {slide.keyPoints.map((point, i) => (
                  <div
                    key={i}
                    className={`p-4 sm:p-5 rounded-2xl border-3 transition-all ${
                      themeStyle === 'popmart'
                        ? point.highlight
                          ? 'bg-white border-[#2B3A67] shadow-md'
                          : 'bg-white/80 border-white/60 shadow-xs'
                        : themeStyle === 'dark'
                        ? 'bg-slate-900/90 border-slate-800 text-white'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 font-dohyeon text-base mt-0.5 ${
                          point.highlight
                            ? 'bg-[#E76F51] text-white shadow-xs'
                            : 'bg-[#F9D342] text-slate-900'
                        }`}
                      >
                        {i + 1}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className={`font-dohyeon text-slate-900 ${fontSizeLevel === 'huge' ? 'text-2xl' : 'text-lg sm:text-xl'}`}>
                            {point.title}
                          </h3>
                          {point.tag && (
                            <span className="text-xs font-jua font-bold px-2.5 py-0.5 rounded-full bg-rose-500 text-white">
                              {point.tag}
                            </span>
                          )}
                        </div>
                        <p className={`font-jua text-slate-700 ${bodySizeClass}`}>
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Chapter 1 Exploration 7 Purposes */}
              {slide.id === 'intro' && (
                <div className="p-5 rounded-3xl bg-white/95 border-3 border-slate-900 shadow-lg space-y-3">
                  <h4 className="font-dohyeon text-lg text-[#2B3A67] flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span>글로벌 문화 체험의 7대 목적 (교육 비전)</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-jua text-slate-800">
                    {EXPLORATION_PURPOSES.map((purpose) => (
                      <div key={purpose.id} className="flex items-start gap-2 py-1">
                        <span className="font-bold text-[#E76F51] shrink-0">{purpose.id}.</span>
                        <span>{purpose.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Callout Banner */}
              {slide.callout && (
                <div
                  className={`p-4 sm:p-5 rounded-2xl border-3 flex items-start gap-3 ${
                    slide.callout.type === 'danger'
                      ? 'bg-rose-50 border-rose-500 text-rose-900'
                      : slide.callout.type === 'warning'
                      ? 'bg-amber-50 border-amber-500 text-amber-900'
                      : 'bg-emerald-50 border-emerald-500 text-emerald-900'
                  }`}
                >
                  {slide.callout.type === 'danger' && <Flame className="w-6 h-6 shrink-0 text-rose-600 mt-0.5" />}
                  {slide.callout.type === 'warning' && <AlertTriangle className="w-6 h-6 shrink-0 text-amber-600 mt-0.5" />}
                  {slide.callout.type === 'success' && <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-600 mt-0.5" />}
                  <div className="space-y-0.5">
                    <div className="font-dohyeon text-base sm:text-lg">{slide.callout.title}</div>
                    <div className="font-jua text-xs sm:text-sm leading-relaxed">{slide.callout.content}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Visual Photo & Action Tips */}
            {currentImage && (
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-3xl overflow-hidden border-4 border-slate-900 shadow-xl group bg-white p-2">
                  <img
                    src={currentImage}
                    alt={slide.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-64 sm:h-72 object-cover rounded-2xl"
                  />
                  <div className="p-3 text-center">
                    <div className="font-dohyeon text-base text-slate-800">
                      담양여자중학교 역사문화 탐방
                    </div>
                    <div className="font-jua text-xs text-emerald-700">
                      안전이 보장될 때 배움과 감동이 배가됩니다!
                    </div>
                  </div>
                </div>

                {slide.tips && slide.tips.length > 0 && (
                  <div className="p-4 rounded-2xl bg-white/90 border-3 border-slate-900 shadow-sm space-y-2">
                    <div className="font-dohyeon text-sm text-[#E76F51] flex items-center gap-1.5">
                      <Volume2 className="w-4 h-4" />
                      <span>학생 행동 핵심 팁</span>
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm font-jua text-slate-700">
                      {slide.tips.map((t, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#E76F51] shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Teacher Notes Drawer */}
        {showTeacherNotes && (
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white border-3 border-[#2B3A67] shadow-xl text-slate-900 space-y-2">
            <div className="flex items-center justify-between border-b pb-2 border-slate-200">
              <span className="font-dohyeon text-sm text-[#2B3A67] flex items-center gap-1.5">
                <Info className="w-4 h-4 text-[#E76F51]" />
                <span>시청각실 인솔 교사 지도 포인트 (멘트 가이드)</span>
              </span>
              <span className="text-[11px] font-mono text-slate-500">학생 반응 유도 및 제창용</span>
            </div>
            <p className="font-jua text-xs sm:text-sm text-slate-700 leading-relaxed">
              {slide.id === 'battery-baggage'
                ? "학생들에게 '보조배터리는 캐리어에 넣는다 O일까요 X일까요?' 질문하고 손을 들게 하세요. '부치는 짐 절대 불가, 오직 백팩 휴대만 가능!'을 세 번 복창시킵니다."
                : slide.id === 'emergency-sos'
                ? "대열 이탈 시 3글자 'STOP-CALL-WAIT'를 함께 큰 소리로 외치게 하고, 담임선생님 전화번호와 영사콜센터(+82-2-3210-0404)를 지금 폰에 저장하도록 안내하세요."
                : slide.id === 'lodging'
                ? "야간 사적 외출 절대 금지 및 방 변경 금지를 단호히 주지시키고, 숙소 도착 즉시 비상 대피로를 확인하도록 지도하세요."
                : slide.id === 'respect-violence'
                ? "피곤할 때 생기는 사소한 말다툼이 학교폭력이 될 수 있음을 환기하고, 상대방이 싫어하면 즉시 멈추는 배려심을 강조하세요."
                : "시청각실 전체 학생들에게 한 문장씩 소리 내어 복창하도록 유도하여 집중도를 높여주세요."}
            </p>
          </div>
        )}

        {/* Bottom Slide Controller Bar */}
        <div className="mt-8 pt-4 border-t-2 border-slate-900/20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrev}
              disabled={currentSlideIndex === 0}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-2xl font-dohyeon text-base transition-all border-2 border-slate-900 ${
                currentSlideIndex === 0
                  ? 'opacity-40 cursor-not-allowed bg-slate-300 text-slate-600'
                  : 'bg-white hover:bg-slate-100 text-slate-900 shadow-md'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">이전 슬라이드</span>
            </button>
            <button
              onClick={goToNext}
              disabled={currentSlideIndex === totalSlides - 1}
              className={`flex items-center gap-1.5 px-6 py-2.5 rounded-2xl font-dohyeon text-base transition-all border-2 border-slate-900 ${
                currentSlideIndex === totalSlides - 1
                  ? 'opacity-40 cursor-not-allowed bg-slate-300 text-slate-600'
                  : 'bg-[#F9D342] hover:bg-[#FBE068] text-slate-900 shadow-md'
              }`}
            >
              <span className="hidden sm:inline">다음 슬라이드</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {SLIDES_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`h-2.5 rounded-full transition-all border border-slate-900 ${
                  idx === currentSlideIndex
                    ? 'w-7 sm:w-9 bg-[#E76F51]'
                    : 'w-2.5 bg-white/70 hover:bg-white'
                }`}
              />
            ))}
          </div>

          <div className="text-xs sm:text-sm font-typewriter font-bold text-slate-800">
            <span className="text-[#E76F51]">{currentSlideIndex + 1}</span> / {totalSlides}
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  Sparkles,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  CheckCircle2,
  Trophy,
  Star,
  PartyPopper,
  HelpCircle
} from 'lucide-react';
import { ROUND1_MULTIPLE_CHOICE, ROUND2_FILL_BLANKS } from '../data/safetyData';

import mascotBamboo from '../assets/images/bamboo_monster_hero_1790597455932.jpg';
import mascotQuestion from '../assets/images/curious_question_monster_1790597469605.jpg';
import mascotParty from '../assets/images/party_celebrate_monster_1790597487194.jpg';
import mascotPilot from '../assets/images/safety_pilot_monster_1790597501246.jpg';

export const MonsterGameShow: React.FC = () => {
  // Current screen:
  // 'cover' -> 'rules' -> 'r1_intro' -> 'r1_q0'..'r1_q4' -> 'r2_intro' -> 'r2_q0'..'r2_q4' (each with question & answer) -> 'final_tease' -> 'victory'
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Round 1 state
  const [r1Answers, setR1Answers] = useState<Record<number, number>>({});
  const [r1Submitted, setR1Submitted] = useState<Record<number, boolean>>({});

  // Round 2 reveal state
  const [r2Revealed, setR2Revealed] = useState<Record<number, boolean>>({});

  const getMascot = (type: string) => {
    switch (type) {
      case 'bamboo':
        return mascotBamboo;
      case 'question':
        return mascotQuestion;
      case 'party':
        return mascotParty;
      case 'pilot':
      default:
        return mascotPilot;
    }
  };

  // Steps total definition:
  // 0: Cover (Page 1)
  // 1: Rules (Page 2)
  // 2: Round 1 Intro (Page 3)
  // 3~7: Round 1 Questions (Pages 4~8)
  // 8: Round 2 Intro (Page 9)
  // 9~13: Round 2 Questions (Pages 10~19)
  // 14: Final Tease (Page 20)
  // 15: Victory (Page 21)
  const TOTAL_STEPS = 16;

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const resetGame = () => {
    setCurrentStep(0);
    setR1Answers({});
    setR1Submitted({});
    setR2Revealed({});
  };

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-6 font-sans">
      {/* Top Controller Bar */}
      <div className="flex items-center justify-between mb-4 bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-2xl">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
          <span className="font-jua text-base sm:text-lg text-amber-300">
            글로컬 죽향 몬스터 안전 퀴즈쇼
          </span>
          <span className="text-xs text-slate-400 hidden sm:inline">
            (POPMART Canva 에디션)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-300 font-mono">
            {currentStep + 1} / {TOTAL_STEPS}
          </span>
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextStep}
            disabled={currentStep === TOTAL_STEPS - 1}
            className="p-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 disabled:opacity-30 text-slate-900 font-bold transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={resetGame}
            title="처음으로"
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors ml-1"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Screen Frame (Aspect Ratio 16:9 / Slide Box) */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 min-h-[560px] sm:min-h-[640px] flex flex-col justify-between transition-colors duration-300">
        {/* ================= STEP 0: COVER SLIDE (Page 1) ================= */}
        {currentStep === 0 && (
          <div className="flex-1 bg-gradient-to-r from-[#9ED2BE] via-[#FCE38A] to-[#F38181] flex flex-col justify-between p-6 sm:p-12 relative overflow-hidden">
            {/* Top Doodle Folder */}
            <div className="absolute top-4 right-1/2 translate-x-1/2 sm:right-24 sm:translate-x-0 w-24 h-16 bg-[#FFF275] rounded-xl -rotate-6 border-2 border-white/60 shadow-md opacity-90 hidden sm:block" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center flex-1 z-10">
              {/* Left Column: Title speech bubble */}
              <div className="md:col-span-6 space-y-4">
                <div className="bg-[#B9E9FC]/90 backdrop-blur-xs p-6 sm:p-8 rounded-[2.5rem] border-4 border-white shadow-xl relative transform -rotate-1">
                  <div className="text-amber-500 font-bold text-lg mb-1 flex items-center gap-1">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    <span className="font-jua text-slate-700">2026 담양여중 안전탐험대</span>
                  </div>
                  <h1 className="font-dohyeon text-4xl sm:text-5xl text-[#2B3A67] tracking-tight leading-tight">
                    죽향 몬스터의<br />안전 탐험 퀴즈
                  </h1>
                  <p className="font-jua text-sm sm:text-base text-slate-600 mt-2">
                    시청각실 골든벨 & 글로컬 역사문화 탐방 안전 수칙
                  </p>

                  {/* Swirly Arrow SVG */}
                  <svg className="absolute -bottom-10 -right-8 w-20 h-16 text-rose-400 hidden sm:block" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                    <path d="M10 20 Q 50 80 85 45 Q 90 20 65 30 Q 50 40 70 70" />
                  </svg>
                </div>

                {/* Sticky Note with smiley */}
                <div className="inline-block bg-[#FFF89A] p-4 rounded-xl border-2 border-[#E8D07A] shadow-md transform rotate-3 max-w-xs">
                  <div className="text-slate-700 text-xs font-typewriter flex items-center gap-2">
                    <span>📎</span>
                    <span>안전하게 즐겁게! ( ^◡^ )</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Monster Gang Mascots */}
              <div className="md:col-span-6 flex flex-col items-center justify-center space-y-4">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-white/40 p-4 border-4 border-dashed border-white flex items-center justify-center shadow-inner">
                    <img
                      src={mascotBamboo}
                      alt="Damyang Bamboo Monster"
                      className="w-full h-full object-cover rounded-full shadow-lg"
                    />
                  </div>
                  {/* Floating mascot badge */}
                  <div className="absolute -bottom-3 -right-2 bg-white text-slate-900 font-typewriter font-bold px-4 py-2 rounded-xl border-2 border-slate-800 shadow-md text-xs sm:text-sm transform rotate-2">
                    Edisyon ng Monster ★ 죽향
                  </div>
                </div>

                <button
                  onClick={nextStep}
                  className="px-8 py-3.5 bg-[#F9D342] hover:bg-[#FBE068] text-slate-900 font-dohyeon text-xl rounded-full border-3 border-slate-900 shadow-lg transform hover:scale-105 transition-transform"
                >
                  퀴즈 시작하기! (START)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 1: RULES / PAANO MAGLARO (Page 2) ================= */}
        {currentStep === 1 && (
          <div className="flex-1 bg-[#FDE24F] flex flex-col justify-between relative overflow-hidden">
            {/* Top Ribbon */}
            <div className="bg-[#E76F51] text-white text-center py-2 px-4 font-typewriter text-xs sm:text-sm tracking-wider font-bold">
              MGA TUNTUNIN · 담양여중 시청각실 교육 및 퀴즈 진행 규칙
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center flex-1 p-6 sm:p-12">
              {/* Left Column: Rules List */}
              <div className="md:col-span-7 space-y-4">
                <div className="inline-block bg-white px-4 py-1.5 rounded-lg border-2 border-slate-800 font-typewriter text-xs font-bold text-slate-800 shadow-xs">
                  Mga Tuntunin
                </div>
                <h2 className="font-dohyeon text-4xl sm:text-5xl text-[#2B3A67] tracking-tight">
                  PAANO MAGLARO<br />
                  <span className="text-2xl sm:text-3xl text-slate-700 font-jua">
                    (안전 퀴즈쇼 진행 방법)
                  </span>
                </h2>

                <div className="bg-white/90 rounded-3xl p-6 border-3 border-slate-800 shadow-md space-y-3.5 text-slate-800 font-jua text-sm sm:text-base">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#E76F51] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                    <p>시청각실 스크린 또는 본인 스마트폰/태블릿으로 문제를 확인합니다.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#E76F51] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                    <p><strong>제1라운드 (객관식)</strong>: 4가지 보기 중 올바른 안전 행동을 선택합니다.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#E76F51] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                    <p><strong>제2라운드 (빈칸 채우기)</strong>: 제시된 밑줄에 들어갈 핵심 안전 단어를 맞힙니다.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#E76F51] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</span>
                    <p>선생님·친구들과 함께 정답을 소리 내어 복창하며 안전 규칙을 완전히 숙지합니다.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#E76F51] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">5</span>
                    <p>모든 라운드를 완료하면 최고의 <strong>「명예 안전 몬스터 챔피언」</strong>으로 선정됩니다!</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Question Monster Illustration */}
              <div className="md:col-span-5 flex flex-col items-center justify-center space-y-4">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-white p-3 border-4 border-slate-900 shadow-xl transform rotate-2">
                  <img
                    src={mascotQuestion}
                    alt="Curious Monster"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  {/* Big Doodle Question Marks */}
                  <span className="absolute -top-6 -left-6 text-6xl text-[#E76F51] font-black drop-shadow-md">?</span>
                  <span className="absolute -bottom-4 -right-4 text-5xl text-[#2B3A67] font-black drop-shadow-md">?</span>
                </div>

                <button
                  onClick={nextStep}
                  className="px-8 py-3 bg-[#E76F51] hover:bg-[#d65f42] text-white font-dohyeon text-lg rounded-full border-2 border-slate-900 shadow-md transform hover:scale-105 transition-transform"
                >
                  제1라운드 입장하기! ➔
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 2: ROUND 1 INTRO (Page 3) ================= */}
        {currentStep === 2 && (
          <div className="flex-1 bg-gradient-to-tr from-[#FF9F9F] via-[#FCDDB0] to-[#E5EBB2] flex flex-col justify-between p-6 sm:p-12 relative overflow-hidden">
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 z-10">
              <div className="inline-block bg-[#54436B] text-white px-5 py-2 rounded-xl font-typewriter text-sm sm:text-base font-bold shadow-md transform -rotate-1">
                Unang Round · 제1라운드
              </div>

              <div className="bg-white/95 rounded-[3rem] p-8 sm:p-12 border-4 border-slate-900 shadow-2xl max-w-xl">
                <h2 className="font-dohyeon text-4xl sm:text-6xl text-[#4338CA] leading-tight">
                  MARAMIHANG<br />PAGPIPILIAN
                </h2>
                <p className="font-jua text-lg sm:text-xl text-slate-700 mt-3">
                  (4지선다형 스피드 객관식 퀴즈!)
                </p>
                <p className="text-xs text-slate-500 font-mono mt-2">
                  담양여중 학생들의 안전 센스를 발휘할 시간!
                </p>
              </div>

              <button
                onClick={nextStep}
                className="px-10 py-4 bg-[#F9D342] hover:bg-[#FBE068] text-slate-900 font-dohyeon text-2xl rounded-full border-3 border-slate-900 shadow-xl transform hover:scale-105 transition-transform"
              >
                1번 문제 풀기! ➔
              </button>
            </div>

            {/* Corner mascots */}
            <img src={mascotBamboo} alt="Monster" className="absolute bottom-4 left-6 w-24 h-24 rounded-full border-3 border-white shadow-md hidden sm:block" />
            <img src={mascotParty} alt="Monster" className="absolute top-6 right-8 w-24 h-24 rounded-full border-3 border-white shadow-md hidden sm:block" />
          </div>
        )}

        {/* ================= STEP 3~7: ROUND 1 QUESTIONS 1~5 (Pages 4~8) ================= */}
        {currentStep >= 3 && currentStep <= 7 && (() => {
          const qIndex = currentStep - 3;
          const q = ROUND1_MULTIPLE_CHOICE[qIndex];
          const selectedOpt = r1Answers[q.id];
          const isSubmitted = r1Submitted[q.id];
          const mascotImg = getMascot(q.characterType || 'bamboo');

          return (
            <div className={`flex-1 ${q.bgColor} flex flex-col justify-between relative overflow-hidden transition-colors`}>
              {/* Header Ribbon */}
              <div className={`${q.headerColor} text-white px-4 py-2 flex items-center justify-between text-xs sm:text-sm font-typewriter font-bold`}>
                <span>MARAMIHANG PAGPIPILIAN · {q.category}</span>
                <span>문제 {qIndex + 1} / 5</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1 p-5 sm:p-10">
                {/* Left Side: Question Text + Mascot */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block bg-white/80 px-3 py-1 rounded font-typewriter text-xs font-bold text-slate-800 shadow-xs">
                      {q.tag}
                    </div>
                    <h3 className="font-dohyeon text-2xl sm:text-3xl lg:text-4xl text-[#2B3A67] leading-tight">
                      {q.question}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-white p-2 border-3 border-slate-900 shadow-lg transform -rotate-2">
                      <img src={mascotImg} alt="Monster" className="w-full h-full object-cover rounded-xl" />
                      <span className="absolute -top-2 -right-2 text-2xl">✨</span>
                    </div>
                    <div className="text-xs sm:text-sm font-jua text-slate-700 bg-white/80 p-3 rounded-xl border border-white/60">
                      정답을 고른 후<br />노란색 <strong>[Isumite (제출)]</strong> 버튼을 눌러주세요!
                    </div>
                  </div>
                </div>

                {/* Right Side: Speech Card with 4 options */}
                <div className="lg:col-span-7 bg-white/95 rounded-3xl p-5 sm:p-7 border-4 border-white shadow-2xl space-y-3">
                  <div className="space-y-2.5">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = selectedOpt === optIdx;
                      const isCorrect = optIdx === q.correctIndex;

                      let btnStyle = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100';
                      if (isSelected) {
                        btnStyle = 'bg-[#B9E9FC] border-[#4338CA] text-[#4338CA] font-bold shadow-xs';
                      }
                      if (isSubmitted) {
                        if (isCorrect) {
                          btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold';
                        } else if (isSelected && !isCorrect) {
                          btnStyle = 'bg-rose-100 border-rose-500 text-rose-900';
                        } else {
                          btnStyle = 'bg-slate-100/50 border-slate-200 text-slate-400 opacity-60';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => {
                            if (!isSubmitted) {
                              setR1Answers((prev) => ({ ...prev, [q.id]: optIdx }));
                            }
                          }}
                          className={`w-full text-left p-3.5 rounded-2xl border-2 transition-all font-jua text-sm sm:text-base flex items-center justify-between gap-3 ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {isSubmitted && isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Submit / Next Button */}
                  <div className="pt-2">
                    {!isSubmitted ? (
                      <button
                        onClick={() => {
                          if (selectedOpt !== undefined) {
                            setR1Submitted((prev) => ({ ...prev, [q.id]: true }));
                          }
                        }}
                        disabled={selectedOpt === undefined}
                        className={`w-full py-3.5 rounded-2xl font-dohyeon text-lg transition-all shadow-md ${
                          selectedOpt === undefined
                            ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                            : 'bg-[#F9D342] hover:bg-[#FBE068] text-slate-900 cursor-pointer transform hover:scale-101'
                        }`}
                      >
                        Isumite (정답 제출하기)
                      </button>
                    ) : (
                      <div className="space-y-3">
                        <div className={`p-3.5 rounded-xl border text-xs sm:text-sm font-jua ${
                          selectedOpt === q.correctIndex
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                            : 'bg-rose-50 border-rose-200 text-rose-900'
                        }`}>
                          {selectedOpt === q.correctIndex ? '🎉 정답입니다!' : '💡 오답입니다!'} {q.explanation}
                        </div>
                        <button
                          onClick={nextStep}
                          className="w-full py-3 bg-[#4338CA] hover:bg-[#3730A3] text-white font-dohyeon text-lg rounded-2xl shadow-md transition-all"
                        >
                          {qIndex < 4 ? '다음 문제로 ➔' : '제2라운드 시작하기! ➔'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ================= STEP 8: ROUND 2 INTRO (Page 9) ================= */}
        {currentStep === 8 && (
          <div className="flex-1 bg-gradient-to-tr from-[#BBE1FA] via-[#FCDDB0] to-[#FFC7C7] flex flex-col justify-between p-6 sm:p-12 relative overflow-hidden">
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 z-10">
              <div className="inline-block bg-[#E76F51] text-white px-5 py-2 rounded-xl font-typewriter text-sm sm:text-base font-bold shadow-md transform rotate-1">
                Ikalawang Round · 제2라운드
              </div>

              <div className="bg-white/95 rounded-[3rem] p-8 sm:p-12 border-4 border-slate-900 shadow-2xl max-w-xl">
                <h2 className="font-dohyeon text-4xl sm:text-6xl text-[#E76F51] leading-tight">
                  PUNAN ANG<br />MGA PATLANG
                </h2>
                <div className="text-xl sm:text-2xl font-typewriter font-bold tracking-widest text-slate-800 my-3">
                  M _ G _ A _ P _ A _ T _ L _ A _ N _ G
                </div>
                <p className="font-jua text-base sm:text-lg text-slate-700">
                  (안전 수칙 빈칸 채우기 릴레이!)
                </p>
                <p className="text-xs text-slate-500 font-mono mt-1">
                  질문에 숨겨진 핵심 키워드를 함께 맞춰보세요!
                </p>
              </div>

              <button
                onClick={nextStep}
                className="px-10 py-4 bg-[#F9D342] hover:bg-[#FBE068] text-slate-900 font-dohyeon text-2xl rounded-full border-3 border-slate-900 shadow-xl transform hover:scale-105 transition-transform"
              >
                빈칸 퀴즈 1번 도전! ➔
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 9~13: ROUND 2 QUESTIONS 1~5 (Pages 10~19) ================= */}
        {currentStep >= 9 && currentStep <= 13 && (() => {
          const bIndex = currentStep - 9;
          const b = ROUND2_FILL_BLANKS[bIndex];
          const isRevealed = r2Revealed[b.id];
          const mascotImg = getMascot(b.characterType);

          return (
            <div className={`flex-1 ${b.bgColor} flex flex-col justify-between relative overflow-hidden transition-colors`}>
              {/* Header Ribbon */}
              <div className={`${b.headerColor} text-white px-4 py-2 flex items-center justify-between text-xs sm:text-sm font-typewriter font-bold`}>
                <span>PUNAN ANG MGA PATLANG · {b.category}</span>
                <span>문제 {bIndex + 1} / 5</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1 p-5 sm:p-10">
                {/* Left Side: Question Tag + Monster Mascot */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-block bg-white/80 px-3 py-1 rounded font-typewriter text-xs font-bold text-slate-800 shadow-xs">
                    {b.tag}
                  </div>
                  <h3 className="font-dohyeon text-2xl sm:text-3xl text-[#2B3A67] leading-tight">
                    {b.question}
                  </h3>

                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-white p-2 border-3 border-slate-900 shadow-xl transform rotate-1">
                    <img src={mascotImg} alt="Monster" className="w-full h-full object-cover rounded-2xl" />
                  </div>
                </div>

                {/* Right Side: Big Speech Bubble with Blanks / Answer Reveal */}
                <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-6 sm:p-10 border-4 border-slate-900 shadow-2xl relative space-y-6">
                  <div className="space-y-4 font-jua">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-500 font-typewriter">
                      {isRevealed ? 'SAGOT (정답 공개):' : 'TANONG (빈칸을 채우세요):'}
                    </span>

                    <p className="text-lg sm:text-xl text-slate-800 leading-relaxed">
                      {b.questionPrefix}
                    </p>

                    <div className="p-4 rounded-2xl bg-amber-50 border-2 border-dashed border-amber-300">
                      {isRevealed ? (
                        <div className="text-xl sm:text-2xl font-dohyeon text-[#4338CA] tracking-wide animate-bounce">
                          {b.answerDisplay}
                        </div>
                      ) : (
                        <div className="text-xl sm:text-2xl font-typewriter text-slate-400 font-bold tracking-widest">
                          {b.blankDisplay}
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-slate-500 font-mono">
                      💡 힌트: {b.hint}
                    </p>
                  </div>

                  {/* Reveal / Next Controls */}
                  <div className="pt-2 flex items-center gap-3">
                    {!isRevealed ? (
                      <button
                        onClick={() => setR2Revealed((prev) => ({ ...prev, [b.id]: true }))}
                        className="w-full py-3.5 bg-[#F9D342] hover:bg-[#FBE068] text-slate-900 font-dohyeon text-xl rounded-2xl shadow-md transform hover:scale-101 transition-all"
                      >
                        정답 확인하기 (Reveal Answer)
                      </button>
                    ) : (
                      <button
                        onClick={nextStep}
                        className="w-full py-3.5 bg-[#E76F51] hover:bg-[#d65f42] text-white font-dohyeon text-xl rounded-2xl shadow-md transform hover:scale-101 transition-all"
                      >
                        {bIndex < 4 ? '다음 빈칸 퀴즈 ➔' : '최종 시상식 보러가기! ➔'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ================= STEP 14: FINAL TEASE (Page 20) ================= */}
        {currentStep === 14 && (
          <div className="flex-1 bg-[#54436B] flex flex-col justify-center items-center p-8 sm:p-16 text-center text-white relative overflow-hidden">
            <div className="max-w-xl space-y-6 z-10">
              <span className="text-amber-300 font-typewriter text-base sm:text-lg tracking-widest">
                FINAL CEREMONY · 최종 결과 발표
              </span>
              <h2 className="font-dohyeon text-4xl sm:text-6xl text-[#FDE24F] leading-tight drop-shadow-lg">
                AT ANG NAMUMUNONG<br />MONSTER AY SI...
              </h2>
              <p className="font-jua text-xl sm:text-2xl text-slate-200">
                그리고 오늘의 최고 안전 몬스터 챔피언은 바로...
              </p>

              <button
                onClick={nextStep}
                className="mt-6 px-10 py-4 bg-[#F9D342] hover:bg-[#FBE068] text-slate-900 font-dohyeon text-2xl rounded-full border-3 border-slate-900 shadow-2xl transform hover:scale-110 transition-transform animate-pulse"
              >
                우승자 발표! (REVEAL) 🏆
              </button>
            </div>

            {/* Sparkles */}
            <span className="absolute top-12 left-16 text-4xl text-amber-300">✦</span>
            <span className="absolute bottom-16 right-20 text-5xl text-rose-300">★</span>
          </div>
        )}

        {/* ================= STEP 15: VICTORY SCREEN (Page 21) ================= */}
        {currentStep === 15 && (
          <div className="flex-1 bg-[#70C1B3] flex flex-col justify-between p-6 sm:p-12 relative overflow-hidden">
            {/* Top wave pattern */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-[#C4DFAA] opacity-80" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center flex-1 z-10">
              {/* Left Column: Polaroid Photo Frame with student celebration */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="bg-white p-4 pb-8 rounded-xl border-4 border-slate-800 shadow-2xl transform -rotate-3 max-w-xs">
                  <div className="w-56 h-56 rounded-lg overflow-hidden border border-slate-200 mb-3 bg-slate-100 flex items-center justify-center">
                    <img
                      src={mascotParty}
                      alt="Victory Mascot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center font-typewriter text-xs text-slate-700 font-bold">
                    2026. 글로컬 죽향 역사문화 탐방
                  </div>
                </div>
              </div>

              {/* Right Column: Victory Banner & Rosette Badge */}
              <div className="md:col-span-7 space-y-6 text-center md:text-left">
                <div className="space-y-2">
                  <h1 className="font-dohyeon text-5xl sm:text-6xl text-white tracking-tight drop-shadow-md">
                    NAGWAGI (우승!)
                  </h1>
                  <div className="inline-block bg-white text-slate-800 px-4 py-1.5 rounded-lg font-typewriter text-xs sm:text-sm font-bold shadow-xs">
                    Nakakatakot at napakagandang pagkapanalo!
                  </div>
                  <p className="font-jua text-lg sm:text-xl text-slate-900 mt-2">
                    담양여중 모든 학생들이 안전 지킴이 마스터로 거듭났습니다! 🎉
                  </p>
                </div>

                {/* Rosette Ribbon Badge (IKAW!) */}
                <div className="inline-flex items-center gap-4 bg-white/90 p-4 rounded-3xl border-3 border-slate-900 shadow-xl">
                  <div className="w-20 h-20 rounded-full bg-[#FF8080] border-4 border-dashed border-white text-white flex flex-col items-center justify-center font-dohyeon text-xl shadow-md rotate-6">
                    <span>IKAW!</span>
                    <span className="text-[10px] font-jua">바로 너!</span>
                  </div>
                  <div className="text-left font-jua text-xs sm:text-sm text-slate-800">
                    <strong className="block text-base text-[#4338CA] font-dohyeon">안전 탐험대 수료 완료!</strong>
                    비상시 STOP-CALL-WAIT 실천하고,<br />
                    보조배터리는 기내 가방에 챙기기 약속!
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
                  <button
                    onClick={resetGame}
                    className="px-6 py-3 bg-[#F9D342] hover:bg-[#FBE068] text-slate-900 font-dohyeon text-lg rounded-full border-2 border-slate-900 shadow-md transition-transform hover:scale-105"
                  >
                    퀴즈쇼 다시 하기 ↺
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#C4DFAA] opacity-80" />
          </div>
        )}
      </div>
    </div>
  );
};

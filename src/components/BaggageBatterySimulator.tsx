import React, { useState } from 'react';
import {
  Battery,
  AlertOctagon,
  CheckCircle,
  HelpCircle,
  Luggage,
  ShieldAlert,
  ArrowRight,
  Package,
  Layers,
  Sparkles
} from 'lucide-react';
import mascotBamboo from '../assets/images/bamboo_monster_hero_1790597455932.jpg';
import mascotPilot from '../assets/images/safety_pilot_monster_1790597501246.jpg';

interface LuggageItem {
  id: string;
  name: string;
  correctTarget: 'cabin' | 'checkin' | 'prohibited';
  hint: string;
  category: string;
}

const LUGGAGE_ITEMS: LuggageItem[] = [
  { id: '1', name: '보조배터리 (20,000mAh)', correctTarget: 'cabin', hint: '위탁수하물 절대 불가! 반드시 기내 백팩에 들고 타야 합니다.', category: '전자기기' },
  { id: '2', name: '여권 원본 및 항공 탑승권', correctTarget: 'cabin', hint: '출국 심사 및 게이트 통과를 위해 항상 몸에 지녀야 합니다.', category: '필수서류' },
  { id: '3', name: '커터칼 / 가위 / 공구류', correctTarget: 'checkin', hint: '무기로 악용될 수 있어 기내 반입 불가! 위탁 캐리어에 넣어야 합니다.', category: '도구류' },
  { id: '4', name: '라이터 / 화약류 / 부탄가스', correctTarget: 'prohibited', hint: '학생 소지 금지 품목이며 폭발 위험 물품입니다.', category: '금지품목' },
  { id: '5', name: '200ml 대용량 액체 스킨로션', correctTarget: 'checkin', hint: '국제선 기내 액체류는 100ml 이하만 가능하므로 큰 병은 위탁 수하물로 부칩니다.', category: '세면용품' },
  { id: '6', name: '매일 복용하는 필수 개인 상비약', correctTarget: 'cabin', hint: '수하물 분실이나 비행 중 응급 복용을 위해 기내 가방에 소지합니다.', category: '의약품' },
  { id: '7', name: '갈아입을 옷과 속옷·양말', correctTarget: 'checkin', hint: '캐리어에 깔끔하게 싸서 위탁 수하물로 부치는 대표 물품입니다.', category: '의류' },
  { id: '8', name: '도박기구 / 성인용품 / 술·담배', correctTarget: 'prohibited', hint: '학생 탐방 활동 중 절대 소지할 수 없는 품목입니다.', category: '금지품목' },
];

export const BaggageBatterySimulator: React.FC = () => {
  // Battery Calculator State
  const [capacityMah, setCapacityMah] = useState<number>(20000);
  const [voltage, setVoltage] = useState<number>(3.7);

  // Luggage Game State
  const [userPlacements, setUserPlacements] = useState<Record<string, 'cabin' | 'checkin' | 'prohibited'>>({});
  const [showGameResults, setShowGameResults] = useState(false);

  // Wh calculation: Wh = (mAh / 1000) * V
  const calculatedWh = Number(((capacityMah / 1000) * voltage).toFixed(1));

  // Battery Status determination
  const getBatteryStatus = () => {
    if (calculatedWh <= 100) {
      return {
        level: 'safe',
        status: '기내 휴대 가능 (100Wh 이하)',
        airlineApproval: '불필요 (자유 휴대)',
        sticker: '불필요',
        limit: '1인당 최대 5개',
        storage: '몸에 지니거나 앞좌석 주머니 (기내 오버헤드빈 선반 금지)',
        color: 'emerald',
      };
    } else if (calculatedWh <= 160) {
      return {
        level: 'warning',
        status: '항공사 승인 필수 (100Wh 초과 ~ 160Wh 이하)',
        airlineApproval: '탑승 수속 시 항공사 승인 필요',
        sticker: '승인 스티커 부착 필수',
        limit: '1인당 최대 2개',
        storage: '승인 후 몸에 지니거나 앞좌석 주머니 보관',
        color: 'amber',
      };
    } else {
      return {
        level: 'danger',
        status: '항공기 반입 일체 불가 (160Wh 초과)',
        airlineApproval: '반입 불가',
        sticker: '반입 불가',
        limit: '0개 (소지 불가)',
        storage: '비행기에 탑승할 수 없음',
        color: 'rose',
      };
    }
  };

  const batteryStatus = getBatteryStatus();

  const handlePlaceItem = (itemId: string, target: 'cabin' | 'checkin' | 'prohibited') => {
    setUserPlacements((prev) => ({ ...prev, [itemId]: target }));
  };

  const getScore = () => {
    let correct = 0;
    LUGGAGE_ITEMS.forEach((item) => {
      if (userPlacements[item.id] === item.correctTarget) correct++;
    });
    return correct;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-900 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-block bg-[#E76F51] text-white px-3 py-1 rounded-full font-typewriter text-xs font-bold shadow-xs">
            AIRPORT & BAGGAGE MANUAL · 항공 수하물 특별 가이드
          </div>
          <h1 className="font-dohyeon text-3xl sm:text-4xl text-[#2B3A67] tracking-tight">
            보조배터리 전력량(Wh) & 수하물 분류 시뮬레이터
          </h1>
          <p className="font-jua text-slate-700 text-sm sm:text-base">
            학생들이 공항에서 가장 빈번하게 적발되는 배터리 규정과 짐 싸기 룰을 재미있게 마스터하세요!
          </p>
        </div>

        <div className="w-24 h-24 rounded-2xl bg-[#FFF275] p-2 border-3 border-slate-900 shadow-md transform rotate-3 shrink-0">
          <img src={mascotPilot} alt="Pilot Monster" className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>

      {/* Part 1: Battery Wh Calculator & Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Calculator */}
        <div className="lg:col-span-6 bg-white rounded-3xl border-4 border-slate-900 p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b-2 border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F9D342] border-2 border-slate-900 flex items-center justify-center text-slate-900 font-bold shadow-xs">
                <Battery className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-dohyeon text-xl text-[#2B3A67]">보조배터리 전력량(Wh) 계산기</h2>
                <p className="font-jua text-xs text-slate-600">내 보조배터리의 용량을 슬라이더로 맞춰보세요</p>
              </div>
            </div>
            <span className="font-typewriter text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-800">
              공식: Wh = Ah × V
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between font-jua text-sm text-slate-800 mb-2">
                <span>배터리 용량 (mAh)</span>
                <span className="text-[#E76F51] font-bold font-dohyeon text-lg">{capacityMah.toLocaleString()} mAh</span>
              </div>
              <input
                type="range"
                min="5000"
                max="40000"
                step="1000"
                value={capacityMah}
                onChange={(e) => setCapacityMah(Number(e.target.value))}
                className="w-full accent-[#E76F51] h-3 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between font-jua text-xs text-slate-500 mt-1.5">
                <span>5,000 (소형)</span>
                <span>10,000 (표준)</span>
                <span>20,000 (대용량)</span>
                <span>30,000+ (초대용량)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-jua text-sm text-slate-800 mb-2">
                <span>공칭 전압 (일반 리튬이온 3.7V 기준)</span>
                <span className="text-[#2B3A67] font-bold font-dohyeon text-lg">{voltage} V</span>
              </div>
              <div className="flex gap-2">
                {[3.7, 3.8, 3.85].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVoltage(v)}
                    className={`flex-1 py-2 font-jua text-sm rounded-xl border-2 transition-all ${
                      voltage === v
                        ? 'bg-[#2B3A67] text-white border-slate-900 shadow-xs'
                        : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {v} V
                  </button>
                ))}
              </div>
            </div>

            {/* Calculated Result Card */}
            <div
              className={`p-5 rounded-2xl border-3 shadow-md transition-all ${
                batteryStatus.color === 'emerald'
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-950'
                  : batteryStatus.color === 'amber'
                  ? 'bg-amber-50 border-amber-500 text-amber-950'
                  : 'bg-rose-50 border-rose-500 text-rose-950'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-typewriter text-xs font-bold uppercase tracking-wider text-slate-600">
                  계산된 전력량 (CALCULATED)
                </span>
                <span className="font-dohyeon text-3xl tabular-nums text-[#2B3A67]">
                  {calculatedWh} Wh
                </span>
              </div>
              <div className="font-dohyeon text-lg mb-3 flex items-center gap-2">
                {batteryStatus.color === 'emerald' && <CheckCircle className="w-5 h-5 text-emerald-600" />}
                {batteryStatus.color === 'amber' && <AlertOctagon className="w-5 h-5 text-amber-600" />}
                {batteryStatus.color === 'danger' && <ShieldAlert className="w-5 h-5 text-rose-600" />}
                <span>{batteryStatus.status}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-jua pt-3 border-t border-slate-300">
                <div>
                  <span className="text-slate-500 block">항공사 사전 승인:</span>
                  <span className="font-bold text-slate-800">{batteryStatus.airlineApproval}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">스티커 부착:</span>
                  <span className="font-bold text-slate-800">{batteryStatus.sticker}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">1인당 허용 수량:</span>
                  <span className="font-bold text-slate-800">{batteryStatus.limit}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">기내 보관 위치:</span>
                  <span className="font-bold text-[#E76F51]">몸 소지 or 좌석 앞주머니</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Golden Rules & Short-Circuit Prevention */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[#FFE3E3] border-4 border-slate-900 rounded-3xl p-6 sm:p-7 space-y-3 shadow-xl">
            <div className="flex items-center gap-2 text-rose-600 font-dohyeon text-xl">
              <ShieldAlert className="w-6 h-6 text-rose-600" />
              <span>핵심 경고: 부치는 짐(위탁 캐리어) 절대 불가!</span>
            </div>
            <p className="font-jua text-sm leading-relaxed text-slate-800">
              보조배터리를 캐리어에 넣고 부치면 화물칸 내 화재 위험 때문에 공항 엑스레이 보안 검색에서 100% 적발됩니다.
              적발 시 본인이 방송으로 불려가 가방을 열어야 하며, 이로 인해 <strong>비행기 전체 출발이 지연</strong>될 수 있습니다.
              보조배터리는 무조건 <strong>백팩(기내 가방)</strong>에 넣으세요!
            </p>
          </div>

          {/* 3 Methods for Short-Circuit Prevention */}
          <div className="bg-white rounded-3xl border-4 border-slate-900 p-6 sm:p-7 space-y-4 shadow-xl">
            <h3 className="font-dohyeon text-lg text-[#2B3A67] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#E76F51]" />
              <span>보조배터리 단락(합선) 방지 3가지 조치 (택1)</span>
            </h3>
            <p className="font-jua text-xs sm:text-sm text-slate-600">
              기내에서 가방 속 열쇠나 클립 등 금속류와 부딪혀 스파크가 튀지 않도록 꼭 조치해야 합니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-amber-50 border-2 border-slate-900 text-center space-y-1">
                <div className="w-7 h-7 rounded-full bg-[#E76F51] text-white mx-auto flex items-center justify-center font-dohyeon text-sm">
                  1
                </div>
                <div className="font-dohyeon text-sm text-slate-800">개별 파우치</div>
                <p className="font-jua text-[11px] text-slate-600">지퍼백이나 소프트 파우치에 1개씩 분리</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 border-2 border-slate-900 text-center space-y-1">
                <div className="w-7 h-7 rounded-full bg-[#E76F51] text-white mx-auto flex items-center justify-center font-dohyeon text-sm">
                  2
                </div>
                <div className="font-dohyeon text-sm text-slate-800">절연 테이프</div>
                <p className="font-jua text-[11px] text-slate-600">USB 충전 단자에 절연테이프 부착</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 border-2 border-slate-900 text-center space-y-1">
                <div className="w-7 h-7 rounded-full bg-[#E76F51] text-white mx-auto flex items-center justify-center font-dohyeon text-sm">
                  3
                </div>
                <div className="font-dohyeon text-sm text-slate-800">단자 보호캡</div>
                <p className="font-jua text-[11px] text-slate-600">실리콘 전용 단자 보호 캡 씌우기</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Interactive Luggage Sorting Game */}
      <div className="bg-white rounded-3xl border-4 border-slate-900 p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Luggage className="w-6 h-6 text-[#E76F51]" />
              <h2 className="font-dohyeon text-2xl text-[#2B3A67]">수하물 짐 싸기 챌린지</h2>
            </div>
            <p className="font-jua text-sm text-slate-600">
              각 물품을 어디에 넣어야 할지 선택해 보세요! (기내 들고 타기 vs 위탁 캐리어 vs 가져오기 금지)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowGameResults(true)}
              className="px-5 py-2.5 font-dohyeon text-base text-slate-900 bg-[#F9D342] hover:bg-[#FBE068] rounded-2xl border-2 border-slate-900 shadow-md transition-all"
            >
              정답 채점하기!
            </button>
            <button
              onClick={() => {
                setUserPlacements({});
                setShowGameResults(false);
              }}
              className="px-4 py-2.5 font-jua text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-2xl border border-slate-300 transition-colors"
            >
              초기화
            </button>
          </div>
        </div>

        {/* Score banner if submitted */}
        {showGameResults && (
          <div className="p-5 rounded-2xl bg-amber-50 border-3 border-slate-900 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-[#E76F51]" />
              <div>
                <span className="font-dohyeon text-lg text-slate-900">
                  채점 결과: 8개 중 {getScore()}개 정답!
                </span>
                <p className="font-jua text-xs sm:text-sm text-slate-700">
                  {getScore() === 8
                    ? '🎉 완벽합니다! 담양여중 공항 수하물 마스터 인정!'
                    : '틀린 항목의 힌트를 확인하고 다시 점검해 보세요.'}
                </p>
              </div>
            </div>
            <span className="font-dohyeon text-3xl text-[#E76F51] tabular-nums">
              {Math.round((getScore() / 8) * 100)}점
            </span>
          </div>
        )}

        {/* Item Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LUGGAGE_ITEMS.map((item) => {
            const userChoice = userPlacements[item.id];
            const isCorrect = userChoice === item.correctTarget;

            return (
              <div
                key={item.id}
                className={`p-4 rounded-2xl border-3 transition-all ${
                  showGameResults
                    ? isCorrect
                      ? 'bg-emerald-50 border-emerald-500'
                      : 'bg-rose-50 border-rose-500'
                    : 'bg-slate-50 border-slate-300 hover:border-slate-500'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-typewriter text-[11px] font-bold px-2 py-0.5 rounded-lg bg-white border border-slate-300 text-slate-600">
                    {item.category}
                  </span>
                  {showGameResults && (
                    <span
                      className={`font-dohyeon text-sm ${
                        isCorrect ? 'text-emerald-700' : 'text-rose-700'
                      }`}
                    >
                      {isCorrect ? '✓ 정답!' : '✗ 오답!'}
                    </span>
                  )}
                </div>

                <h4 className="font-dohyeon text-base text-slate-900 mb-3">{item.name}</h4>

                {/* 3 Target Selection Buttons */}
                <div className="grid grid-cols-3 gap-2 text-xs font-jua">
                  <button
                    onClick={() => handlePlaceItem(item.id, 'cabin')}
                    className={`py-2 px-1 rounded-xl border-2 font-bold text-center transition-all ${
                      userChoice === 'cabin'
                        ? 'bg-[#2B3A67] text-white border-slate-900 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    기내 가방
                  </button>
                  <button
                    onClick={() => handlePlaceItem(item.id, 'checkin')}
                    className={`py-2 px-1 rounded-xl border-2 font-bold text-center transition-all ${
                      userChoice === 'checkin'
                        ? 'bg-[#54436B] text-white border-slate-900 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    위탁 캐리어
                  </button>
                  <button
                    onClick={() => handlePlaceItem(item.id, 'prohibited')}
                    className={`py-2 px-1 rounded-xl border-2 font-bold text-center transition-all ${
                      userChoice === 'prohibited'
                        ? 'bg-[#E76F51] text-white border-slate-900 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    소지 금지
                  </button>
                </div>

                {showGameResults && (
                  <p
                    className={`mt-2.5 font-jua text-xs leading-relaxed ${
                      isCorrect ? 'text-emerald-800' : 'text-rose-800'
                    }`}
                  >
                    💡 {item.hint}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

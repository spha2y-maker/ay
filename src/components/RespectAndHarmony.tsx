import React, { useState } from 'react';
import {
  HeartHandshake,
  Shield,
  MessageSquare,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Users,
  Smile,
  VolumeX
} from 'lucide-react';
import { HARMONY_AND_RESPECT_RULES, GENERAL_SAFETY_RULES } from '../data/safetyData';
import mascotParty from '../assets/images/party_celebrate_monster_1790597487194.jpg';

export const RespectAndHarmony: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'respect' | 'generalRules'>('respect');
  const [selectedRoleplay, setSelectedRoleplay] = useState<number>(0);

  const roleplays = [
    {
      situation: '친구가 나를 놀리거나 원치 않는 별명을 부르며 장난칠 때',
      badResponse: '같이 화내며 욕설을 하거나, 속으로 끙끙 앓으며 참는다.',
      goodResponse: '"그 별명 들으면 기분 안 좋아. 장난이라도 내 별명 부르지 마."라고 단호하게 말합니다.',
      teacherTip: '불편한 감정은 초기에 정확히 전달해야 상대방도 장난의 선을 넘지 않습니다. 그래도 계속되면 즉시 선생님께 알리세요.',
    },
    {
      situation: '친구가 싫다고 하는데도 "친해서 그런 건데 왜 그래?"라고 계속 신체 접촉이나 놀림을 할 때',
      badResponse: '"친하니까 이 정도는 봐줘야지"라며 무시하고 계속한다.',
      goodResponse: '즉시 멈추고 "미안해, 네가 싫어하는 줄 몰랐어. 다시는 안 그럴게."라고 진심으로 사과합니다.',
      teacherTip: '상대방이 거부 의사를 표시했을 때 즉각 멈추는 것이 성숙한 인격입니다. 계속 치근거리면 학교폭력/성희롱이 됩니다.',
    },
    {
      situation: '여행 중 피곤해서 서로 예민해지고 말다툼이 생기려 할 때',
      badResponse: '"너 때문에 시간 늦었잖아!", "너 왜 그렇게 이기적이야?"라며 비난한다.',
      goodResponse: '"지금 우리 둘 다 피곤한 것 같아. 5분만 쉬고 다시 이야기하자."라며 감정을 가라앉힙니다.',
      teacherTip: '단체 생활에서는 "너 때문에"라는 비난 대신 "우리가 함께"라는 역지사지의 태도가 최고의 평화 비결입니다.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-900 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-block bg-[#E76F51] text-white px-3 py-1 rounded-full font-typewriter text-xs font-bold shadow-xs">
            RESPECT & HARMONY · 인권 존중 & 행복한 동행
          </div>
          <h1 className="font-dohyeon text-3xl sm:text-4xl text-[#2B3A67] tracking-tight">
            학교폭력 & 성희롱 예방 및 생활 안전 수칙
          </h1>
          <p className="font-jua text-slate-700 text-sm sm:text-base">
            서로를 소중한 동료로 아끼고 배려할 때 우리 담양여중의 역사문화 탐방이 평생 빛나는 추억이 됩니다.
          </p>
        </div>

        <div className="w-24 h-24 rounded-2xl bg-[#9ED2BE] p-2 border-3 border-slate-900 shadow-md transform rotate-2 shrink-0">
          <img src={mascotParty} alt="Party Monster" className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex items-center gap-2 bg-white p-2 rounded-2xl border-3 border-slate-900 w-fit shadow-md">
        <button
          onClick={() => setActiveCategory('respect')}
          className={`flex items-center gap-1.5 px-5 py-2.5 font-dohyeon text-base rounded-xl transition-all ${
            activeCategory === 'respect'
              ? 'bg-[#2B3A67] text-white shadow-xs'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Shield className="w-4 h-4" />
          <span>인권 존중 & 성희롱 예방 약속</span>
        </button>
        <button
          onClick={() => setActiveCategory('generalRules')}
          className={`flex items-center gap-1.5 px-5 py-2.5 font-dohyeon text-base rounded-xl transition-all ${
            activeCategory === 'generalRules'
              ? 'bg-[#2B3A67] text-white shadow-xs'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>체험학습 15대 기본 생활 수칙</span>
        </button>
      </div>

      {activeCategory === 'respect' ? (
        <div className="space-y-8">
          {/* Top 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* School Violence Prevention */}
            <div className="bg-white rounded-3xl border-4 border-slate-900 p-6 sm:p-7 space-y-4 shadow-xl">
              <div className="flex items-center gap-2.5 text-[#2B3A67] border-b-2 border-slate-200 pb-3">
                <Users className="w-6 h-6 text-[#E76F51]" />
                <h2 className="font-dohyeon text-xl">학교 폭력 예방 5대 수칙</h2>
              </div>
              <ul className="space-y-3 font-jua">
                {HARMONY_AND_RESPECT_RULES.violence.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-800">
                    <span className="w-6 h-6 rounded-full bg-[#F9D342] text-slate-900 border-2 border-slate-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sexual Harassment Prevention */}
            <div className="bg-white rounded-3xl border-4 border-slate-900 p-6 sm:p-7 space-y-4 shadow-xl">
              <div className="flex items-center gap-2.5 text-[#2B3A67] border-b-2 border-slate-200 pb-3">
                <Shield className="w-6 h-6 text-rose-500" />
                <h2 className="font-dohyeon text-xl">경계 존중 & 성희롱 예방 6대 수칙</h2>
              </div>
              <ul className="space-y-3 font-jua">
                {HARMONY_AND_RESPECT_RULES.sexualHarassment.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-800">
                    <span className="w-6 h-6 rounded-full bg-[#FF8080] text-white border-2 border-slate-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Principle Banner: Silence is NOT consent */}
          <div className="bg-[#FFF275] border-4 border-slate-900 rounded-3xl p-6 sm:p-7 text-slate-900 flex items-start gap-4 shadow-xl">
            <AlertCircle className="w-8 h-8 shrink-0 text-[#E76F51] mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-dohyeon text-xl text-[#2B3A67]">
                핵심 원칙: "거부하지 못했다고 해서 동의한 것이 아닙니다"
              </h3>
              <p className="font-jua text-sm sm:text-base leading-relaxed text-slate-800">
                상대방이 당황하거나 상황상 명확하게 '싫다'고 말하지 못했을지라도, 그것을 동의나 합의로 간주해서는 안 됩니다.
                상대방의 입장에서 배려하고, 불쾌한 기색이 조금이라도 느껴지면 즉각 언행을 멈추고 사과해야 합니다.
              </p>
            </div>
          </div>

          {/* Student Roleplay Section */}
          <div className="bg-white rounded-3xl border-4 border-slate-900 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center gap-2 border-b-2 border-slate-200 pb-4">
              <MessageSquare className="w-6 h-6 text-[#E76F51]" />
              <div>
                <h2 className="font-dohyeon text-2xl text-[#2B3A67]">
                  실전 대화 롤플레잉: "이럴 땐 어떻게 말할까요?"
                </h2>
                <p className="font-jua text-sm text-slate-600">
                  학생들이 여행 중 마주치는 갈등 상황에서의 지혜로운 대화법을 연습해 보세요.
                </p>
              </div>
            </div>

            {/* Scenario buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {roleplays.map((r, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedRoleplay(i)}
                  className={`p-4 rounded-2xl border-3 text-left transition-all font-jua text-sm ${
                    selectedRoleplay === i
                      ? 'bg-[#2B3A67] text-white border-slate-900 font-bold shadow-md'
                      : 'bg-slate-50 text-slate-700 border-slate-300 hover:border-slate-500'
                  }`}
                >
                  <span className="font-typewriter text-xs font-bold block mb-1">상황 {i + 1}</span>
                  <span className="font-dohyeon text-base line-clamp-1">{r.situation}</span>
                </button>
              ))}
            </div>

            {/* Selected Scenario Display */}
            <div className="bg-amber-50/60 rounded-2xl p-6 border-3 border-slate-900 space-y-4">
              <div className="space-y-1">
                <span className="font-typewriter text-xs font-bold text-[#E76F51]">SITUATION (상황)</span>
                <p className="font-dohyeon text-xl text-[#2B3A67]">
                  "{roleplays[selectedRoleplay].situation}"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-300 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-dohyeon text-sm text-rose-700">
                    <VolumeX className="w-4 h-4" />
                    <span>피해야 할 반응 (X)</span>
                  </div>
                  <p className="font-jua text-sm text-rose-950">
                    {roleplays[selectedRoleplay].badResponse}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-dohyeon text-sm text-emerald-700">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>지혜로운 모범 반응 (O)</span>
                  </div>
                  <p className="font-jua text-sm text-emerald-950">
                    {roleplays[selectedRoleplay].goodResponse}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border-2 border-slate-300 font-jua text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 font-dohyeon text-base">선생님 지도 팁: </strong>
                  {roleplays[selectedRoleplay].teacherTip}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* 15 General Safety Rules Grid */
        <div className="space-y-4">
          <div className="flex items-center justify-between font-jua text-sm text-slate-600">
            <span>체험학습 활동 시 15대 기본 생활 및 안전 수칙 전체 (담양여중 교표 수칙)</span>
            <span className="font-typewriter text-xs">총 15개 항목</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GENERAL_SAFETY_RULES.map((rule) => (
              <div
                key={rule.num}
                className="bg-white border-3 border-slate-900 p-5 rounded-2xl space-y-2 shadow-md hover:translate-y-[-2px] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-xl bg-[#F9D342] text-slate-900 border-2 border-slate-900 font-dohyeon text-sm flex items-center justify-center">
                    {rule.num}
                  </span>
                  <span className="font-typewriter text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 border border-slate-300 text-slate-600">
                    {rule.category}
                  </span>
                </div>
                <h3 className="font-dohyeon text-base text-[#2B3A67]">{rule.title}</h3>
                <p className="font-jua text-xs text-slate-600 leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

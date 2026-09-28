import React, { useState } from 'react';
import {
  PhoneCall,
  AlertTriangle,
  Flame,
  Activity,
  Compass,
  FileQuestion,
  Shield,
  LifeBuoy,
  Clock,
  MapPin,
  CheckCircle,
  Copy,
  Check
} from 'lucide-react';
import mascotQuestion from '../assets/images/curious_question_monster_1790597469605.jpg';

interface EmergencyScenario {
  id: string;
  title: string;
  category: string;
  icon: 'lost' | 'earthquake' | 'fire' | 'medical' | 'passport';
  summary: string;
  step1: string;
  step2: string;
  step3: string;
  warningNote: string;
}

const EMERGENCY_SCENARIOS: EmergencyScenario[] = [
  {
    id: 'lost',
    title: '체험지에서 대열을 놓쳐 길을 잃었을 때 (미아/이탈)',
    category: '대열 이탈',
    icon: 'lost',
    summary: '당황하여 무작정 친구들을 찾아 뛰어다니면 대열과 더 멀어집니다. STOP-CALL-WAIT 3원칙을 기억하세요!',
    step1: 'STOP (멈춤): 즉시 제자리에 멈추고 주변의 눈에 띄는 큰 건물, 상점 간판, 게이트 번호를 확인합니다.',
    step2: 'CALL (연락): 스마트폰으로 즉시 담임선생님 또는 가이드에게 전화해 현재 위치와 주변 랜드마크를 알립니다.',
    step3: 'WAIT (대기): 선생님이 올 때까지 장소를 이동하지 않고 인근 안내데스크나 경찰·보안요원 곁에서 대기합니다.',
    warningNote: '낯선 사람이 "선생님 계신 곳으로 데려다줄게"라고 하더라도 절대 개인 차량에 동승하지 마세요.',
  },
  {
    id: 'earthquake',
    title: '지진이 발생하여 땅과 건물이 흔들릴 때',
    category: '자연 재난',
    icon: 'earthquake',
    summary: '지진 시 가장 큰 위험은 머리 위로 떨어지는 낙하물(조명, 유리, 간판 파편)입니다.',
    step1: '실내(건물 안): 튼튼한 탁자나 책상 밑으로 들어가 다리를 꽉 잡고, 가방이나 방석으로 머리를 보호합니다.',
    step2: '흔들림 멈춤 후: 출입문을 열어 탈출로를 확보하고, 계단을 통해 건물 밖으로 질서 있게 빠져나옵니다.',
    step3: '실외(건물 밖): 유리창, 간판, 전봇대, 담장 근처를 피해 넓은 광장이나 운동장, 공터로 이동합니다.',
    warningNote: '정전으로 갇힐 수 있으므로 엘리베이터는 절대 탑승하지 마세요!',
  },
  {
    id: 'fire',
    title: '숙소 호텔이나 다중이용시설에서 화재가 났을 때',
    category: '화재 대피',
    icon: 'fire',
    summary: '화재 시 인명 피해의 80%는 유독가스 질식 때문입니다. 젖은 수건과 낮은 자세가 핵심입니다.',
    step1: '비상벨 작동 & 전파: "불이야!" 외치고 비상벨을 누른 뒤 즉시 대피를 시작합니다.',
    step2: '호흡기 보호: 물에 적신 수건이나 손수건으로 코와 입을 감싸고, 자세를 최대한 낮추어 이동합니다.',
    step3: '비상계단 이용: 유도등 불빛을 따라 비상계단으로 질서 있게 내려가며, 절대 엘리베이터를 타지 않습니다.',
    warningNote: '문손잡이를 만졌을 때 뜨겁다면 반대편에 불이 난 것이므로 다른 대피로를 찾아야 합니다.',
  },
  {
    id: 'medical',
    title: '갑작스러운 고열, 심한 배탈(복통), 부상 발생 시',
    category: '보건 응급',
    icon: 'medical',
    summary: '해외 및 낯선 환경에서는 작은 복통이나 두통도 급격히 악화될 수 있습니다. 참지 마세요!',
    step1: '즉각 보고: 참거나 혼자 약을 먹지 말고, 즉시 담임선생님과 보건 담당 교사에게 증상을 알립니다.',
    step2: '안정 취하기: 그늘이나 시원한 곳으로 이동해 편안한 자세로 눕히고, 옷의 단추를 풀어 호흡을 돕습니다.',
    step3: '전문의 진료 연계: 인솔교사의 지도하에 상비약을 복용하거나, 필요시 현지 병원 응급실로 신속 이송합니다.',
    warningNote: '친구가 아파할 때 함부로 본인의 약을 나누어 주면 알레르기 쇼크가 올 수 있으니 금지합니다.',
  },
  {
    id: 'passport',
    title: '여권, 지갑, 스마트폰 등 귀중품 분실 시',
    category: '분실/도난',
    icon: 'passport',
    summary: '여권은 해외에서 대한민국 국민임을 증명하는 유일한 신분증입니다. 잃어버렸을 땐 즉각 조치합니다.',
    step1: '즉시 담임 보고: 분실 사실을 인솔 담임선생님과 여행사 가이드에게 즉시 보고합니다.',
    step2: '비상 사본 확인: 출국 전 담임선생님께 제출한 여권 사본 및 여권 사진으로 긴급 여행증명서 발급 준비.',
    step3: '경찰 분실신고 및 영사관 접수: 현지 경찰서 분실신고서(Police Report) 발급 후 공관에 긴급 재발급 신청.',
    warningNote: '신용카드나 체크카드를 잃어버렸을 경우 카드사 모바일 앱으로 즉시 일시 정지 신청을 합니다.',
  },
];

export const EmergencyActionManual: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('lost');
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const currentScenario =
    EMERGENCY_SCENARIOS.find((s) => s.id === selectedScenarioId) || EMERGENCY_SCENARIOS[0];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNumber(label);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-900 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-block bg-[#E76F51] text-white px-3 py-1 rounded-full font-typewriter text-xs font-bold shadow-xs">
            EMERGENCY PROTOCOL · 실전 위기 대응 매뉴얼
          </div>
          <h1 className="font-dohyeon text-3xl sm:text-4xl text-[#2B3A67] tracking-tight">
            학생 비상상황 대응 매뉴얼 (SOS 골든룰)
          </h1>
          <p className="font-jua text-slate-700 text-sm sm:text-base">
            위기 상황 발생 시 당황하지 않고 생명과 안전을 지키는 3단계 실천 행동 지침입니다.
          </p>
        </div>

        <div className="w-24 h-24 rounded-2xl bg-[#FFC7C7] p-2 border-3 border-slate-900 shadow-md transform -rotate-3 shrink-0">
          <img src={mascotQuestion} alt="SOS Monster" className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>

      {/* SOS 3 Golden Rules Big Banner (Pop Mart Style) */}
      <div className="bg-[#FFF275] border-4 border-slate-900 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        <div className="text-center space-y-1">
          <span className="font-typewriter text-xs font-bold text-slate-800 uppercase tracking-widest bg-white/80 px-3 py-1 rounded-full inline-block">
            대열 이탈 및 위급 상황 시 꼭 기억할 3글자
          </span>
          <h2 className="font-dohyeon text-3xl sm:text-5xl text-[#2B3A67] tracking-tight">
            STOP · CALL · WAIT 3원칙
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border-3 border-slate-900 rounded-2xl p-5 text-center space-y-2 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-[#E76F51] text-white mx-auto flex items-center justify-center font-dohyeon text-xl shadow-xs">
              1
            </div>
            <h3 className="font-dohyeon text-lg text-slate-900">STOP (자리에 멈추기)</h3>
            <p className="font-jua text-xs sm:text-sm text-slate-600 leading-relaxed">
              절대 혼자 길을 찾겠다고 이리저리 뛰어다니지 마세요. 안전한 자리에서 걸음을 멈춥니다.
            </p>
          </div>

          <div className="bg-white border-3 border-slate-900 rounded-2xl p-5 text-center space-y-2 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-[#F9D342] text-slate-900 border-2 border-slate-900 mx-auto flex items-center justify-center font-dohyeon text-xl shadow-xs">
              2
            </div>
            <h3 className="font-dohyeon text-lg text-slate-900">CALL (선생님께 전화)</h3>
            <p className="font-jua text-xs sm:text-sm text-slate-600 leading-relaxed">
              저장된 담임선생님 휴대폰으로 바로 전화하고 주변의 큰 건물명, 간판 이름을 설명하세요.
            </p>
          </div>

          <div className="bg-white border-3 border-slate-900 rounded-2xl p-5 text-center space-y-2 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-[#9ED2BE] text-slate-900 border-2 border-slate-900 mx-auto flex items-center justify-center font-dohyeon text-xl shadow-xs">
              3
            </div>
            <h3 className="font-dohyeon text-lg text-slate-900">WAIT (안전하게 대기)</h3>
            <p className="font-jua text-xs sm:text-sm text-slate-600 leading-relaxed">
              선생님과 약속한 자리에서 다른 곳으로 가지 않고 안내데스크나 경찰 곁에서 기다립니다.
            </p>
          </div>
        </div>
      </div>

      {/* Scenario Selection Tabs */}
      <div className="space-y-4">
        <h2 className="font-dohyeon text-xl text-[#2B3A67] flex items-center gap-2">
          <Shield className="w-5 h-5 text-[#E76F51]" />
          <span>상황별 실전 행동 매뉴얼 선택</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {EMERGENCY_SCENARIOS.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedScenarioId(item.id)}
              className={`p-3.5 rounded-2xl border-3 text-left transition-all font-jua ${
                selectedScenarioId === item.id
                  ? 'bg-[#2B3A67] text-white border-slate-900 font-bold shadow-md'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-slate-500'
              }`}
            >
              <div className="font-typewriter text-[11px] opacity-75">{item.category}</div>
              <div className="text-xs sm:text-sm font-dohyeon truncate mt-0.5">{item.title.split(' ')[0]}</div>
            </button>
          ))}
        </div>

        {/* Selected Scenario Detailed View */}
        <div className="bg-white rounded-3xl border-4 border-slate-900 p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="border-b-2 border-slate-200 pb-4 space-y-1">
            <span className="font-typewriter text-xs font-bold px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-700">
              {currentScenario.category} 행동 요령
            </span>
            <h3 className="font-dohyeon text-2xl text-[#2B3A67] mt-2">
              {currentScenario.title}
            </h3>
            <p className="font-jua text-xs sm:text-sm text-slate-600">{currentScenario.summary}</p>
          </div>

          {/* 3 Action Steps */}
          <div className="space-y-3.5">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#E76F51] text-white font-dohyeon text-base flex items-center justify-center shrink-0">
                1
              </div>
              <div className="font-jua text-sm text-slate-800 leading-relaxed pt-0.5">
                {currentScenario.step1}
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#F9D342] text-slate-900 border-2 border-slate-900 font-dohyeon text-base flex items-center justify-center shrink-0">
                2
              </div>
              <div className="font-jua text-sm text-slate-800 leading-relaxed pt-0.5">
                {currentScenario.step2}
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#9ED2BE] text-slate-900 border-2 border-slate-900 font-dohyeon text-base flex items-center justify-center shrink-0">
                3
              </div>
              <div className="font-jua text-sm text-slate-800 leading-relaxed pt-0.5">
                {currentScenario.step3}
              </div>
            </div>
          </div>

          {/* Warning Note */}
          <div className="p-4 rounded-2xl bg-rose-50 border-3 border-rose-500 text-rose-950 font-jua text-xs sm:text-sm flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 shrink-0 text-rose-600 mt-0.5" />
            <div>
              <strong className="font-dohyeon text-base text-rose-900 block mb-0.5">절대 주의 사항</strong>
              {currentScenario.warningNote}
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Directory */}
      <div className="bg-white rounded-3xl border-4 border-slate-900 p-6 sm:p-8 space-y-5 shadow-2xl">
        <div className="flex items-center justify-between border-b-2 border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-6 h-6 text-[#E76F51]" />
            <h2 className="font-dohyeon text-xl text-[#2B3A67]">
              학생 필수 비상연락망 (스마트폰에 사전 저장!)
            </h2>
          </div>
          <span className="font-typewriter text-xs font-bold text-slate-500">24시간 상시 가동</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#FFF9F0] border-3 border-slate-900 space-y-2">
            <div className="font-typewriter text-xs font-bold text-[#E76F51]">담양여중 인솔단</div>
            <div className="font-dohyeon text-lg text-slate-900">학급 담임선생님 본부</div>
            <p className="font-jua text-xs text-slate-600">각 반 담임교사 개인 휴대폰 및 인솔 대표교사</p>
            <button
              onClick={() => handleCopy('담임교사 연락망', '교사')}
              className="w-full mt-2 py-2 px-3 font-dohyeon text-sm bg-[#F9D342] hover:bg-[#FBE068] text-slate-900 rounded-xl border-2 border-slate-900 flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              {copiedNumber === '교사' ? <Check className="w-4 h-4 text-slate-900" /> : <Copy className="w-4 h-4" />}
              <span>{copiedNumber === '교사' ? '복사 완료!' : '담임선생님 번호 저장'}</span>
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFF9F0] border-3 border-slate-900 space-y-2">
            <div className="font-typewriter text-xs font-bold text-[#4338CA]">대한민국 외교부</div>
            <div className="font-dohyeon text-lg text-slate-900">영사콜센터 (24시간)</div>
            <div className="font-typewriter text-base text-[#4338CA] font-bold">+82-2-3210-0404</div>
            <p className="font-jua text-xs text-slate-600">해외 사건·사고, 긴급 통역 서비스, 여권 분실 지원</p>
            <button
              onClick={() => handleCopy('+82-2-3210-0404', '영사콜센터')}
              className="w-full mt-2 py-2 px-3 font-dohyeon text-sm bg-[#B9E9FC] hover:bg-[#99dbf5] text-slate-900 rounded-xl border-2 border-slate-900 flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              {copiedNumber === '영사콜센터' ? <Check className="w-4 h-4 text-slate-900" /> : <Copy className="w-4 h-4" />}
              <span>{copiedNumber === '영사콜센터' ? '복사 완료!' : '영사콜센터 번호 복사'}</span>
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFF9F0] border-3 border-slate-900 space-y-2">
            <div className="font-typewriter text-xs font-bold text-[#2B3A67]">현지 전담 여행사</div>
            <div className="font-dohyeon text-lg text-slate-900">현지 안전 가이드팀</div>
            <p className="font-jua text-xs text-slate-600">호텔 주소 및 투어 차량 비상 연락 데스크</p>
            <button
              onClick={() => handleCopy('현지 안전가이드', '가이드')}
              className="w-full mt-2 py-2 px-3 font-dohyeon text-sm bg-[#9ED2BE] hover:bg-[#86c5ae] text-slate-900 rounded-xl border-2 border-slate-900 flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              {copiedNumber === '가이드' ? <Check className="w-4 h-4 text-slate-900" /> : <Copy className="w-4 h-4" />}
              <span>{copiedNumber === '가이드' ? '복사 완료!' : '가이드 데스크 저장'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

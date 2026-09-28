export interface PackingItem {
  id: string;
  category: '필수서류' | '의류' | '위생/보호' | '의약품' | '기타편의';
  name: string;
  detail: string;
  note?: string;
  checked?: boolean;
}

export interface SlideContent {
  id: string;
  chapter: string;
  title: string;
  subTitle: string;
  category: string;
  badge: string;
  keyPoints: {
    title: string;
    description: string;
    highlight?: boolean;
    tag?: string;
  }[];
  tips?: string[];
  image?: string;
  callout?: {
    type: 'warning' | 'info' | 'success' | 'danger';
    title: string;
    content: string;
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  tag?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
  characterType?: 'bamboo' | 'question' | 'party' | 'pilot';
  bgColor?: string;
  headerColor?: string;
}

export interface BlankQuestion {
  id: number;
  tag: string;
  question: string;
  questionPrefix: string;
  blankDisplay: string; // e.g. "_________________"
  answer: string;
  answerDisplay: string; // e.g. "_절_대_불_가_"
  hint: string;
  category: string;
  characterType: 'bamboo' | 'question' | 'party' | 'pilot';
  bgColor: string;
  headerColor: string;
}

// 라운드 1: 4지선다 객관식 퀴즈 (Maramihang Pagpipilian)
export const ROUND1_MULTIPLE_CHOICE: QuizQuestion[] = [
  {
    id: 1,
    tag: "UNANG TANONG (제1문)",
    question: "비행기 탈 때 보조배터리는 과연 어디에 넣어야 할까요?",
    options: [
      "Maimai - 캐리어에 쏙 넣어서 부치는 짐(위탁수하물)으로 보낸다",
      "Alex - 화재 예방을 위해 백팩에 넣어서 직접 들고(기내 휴대) 탄다",
      "Pam - 친구 캐리어에 몰래 넣어둔다",
      "Kelly - 비행기 화장실 선반에 보관한다"
    ],
    correctIndex: 1,
    explanation: "정답은 Alex! 보조배터리는 리튬이온 화재 위험 때문에 부치는 짐(위탁수하물) 절대 금지! 오직 기내 가방에 직접 들고 타야 합니다.",
    category: "항공 안전",
    characterType: "bamboo",
    bgColor: "bg-[#C2DDB6]", // soft sage green
    headerColor: "bg-[#E7625F]", // coral red banner
  },
  {
    id: 2,
    tag: "PANGALAWANG TANONG (제2문)",
    question: "호텔 숙소에 도착해서 방에 들어가자마자 가장 먼저 해야 할 일은?",
    options: [
      "Alex - 짐 풀자마자 야간에 몰래 호텔 밖으로 나간다",
      "Pam - 객실 문 뒤의 비상 대피로와 완강기 위치를 확인한다",
      "Kelly - 담임선생님 허락 없이 친한 친구 방으로 방을 바꾼다",
      "Anna - 발코니 난간에 기대어 셀카를 찍는다"
    ],
    correctIndex: 1,
    explanation: "정답은 Pam! 숙소 입실 시 비상 탈출구와 대피로를 확인하는 것이 최우선입니다. 야간 사적 외출과 임의 방 변경은 절대 금지!",
    category: "숙소 안전",
    characterType: "party",
    bgColor: "bg-[#FCE38A]", // sunny butter yellow
    headerColor: "bg-[#54436B]", // deep violet purple
  },
  {
    id: 3,
    tag: "PANGATLONG TANONG (제3문)",
    question: "체험지에서 친구들과 떨어져 길을 잃었을 때 올바른 행동은?",
    options: [
      "Pam - 당황해서 혼자 여기저기 뛰어다니며 찾는다",
      "Kelly - STOP(자리에 멈추고) CALL(선생님께 전화) WAIT(안전 대기)한다",
      "Anna - 스마트폰 전원을 끄고 혼자 숙소까지 걸어간다",
      "Maimai - 지나가는 낯선 사람의 차를 얻어탄다"
    ],
    correctIndex: 1,
    explanation: "정답은 Kelly! 대열 이탈 시 STOP-CALL-WAIT 3원칙! 제자리에 멈춰 서서 담임선생님께 전화하고 안전한 안내데스크에서 기다립니다.",
    category: "비상 대응",
    characterType: "question",
    bgColor: "bg-[#F38181]", // pastel salmon coral
    headerColor: "bg-[#00818A]", // teal blue
  },
  {
    id: 4,
    tag: "IKAAPAT NA TANONG (제4문)",
    question: "공항 보안 검색대를 통과할 때 올바른 행동 수칙은?",
    options: [
      "Kelly - 주머니 소지품과 외투를 바구니에 넣고 1명씩 통과 후 짐을 챙긴다",
      "Anna - 친구들과 팔짱을 끼고 우르르 뛰어간다",
      "Maimai - 주머니에 커터칼과 라이터를 넣은 채 통과한다",
      "Alex - 바구니에 물건을 두고 그냥 비행기 게이트로 달려간다"
    ],
    correctIndex: 0,
    explanation: "정답은 Kelly! 학급 단위로 단체 통로를 이용하며, 모든 물품을 바구니에 담아 엑스레이 검사를 받고 1명씩 통과 후 소지품을 전원 회수합니다.",
    category: "공항 수속",
    characterType: "pilot",
    bgColor: "bg-[#95E1D3]", // soft mint turquoise
    headerColor: "bg-[#F38181]", // coral
  },
  {
    id: 5,
    tag: "PANLIMANG TANONG (제5문)",
    question: "친구 사이에 학교폭력 및 성희롱을 예방하기 위한 올바른 자세는?",
    options: [
      "Anna - 친하다는 핑계로 친구가 싫어하는 별명을 부른다",
      "Maimai - 상대방이 거부 의사를 밝히면 즉시 멈추고 사과한다",
      "Alex - 장난인데 왜 예민하게 구냐고 화를 낸다",
      "Pam - 친구 물건을 허락 없이 가져가서 장난친다"
    ],
    correctIndex: 1,
    explanation: "정답은 Maimai! 상대방이 싫어하거나 불편해하면 즉각 행동을 멈추고 사과하는 것이 진정한 우정입니다. 침묵은 동의가 아닙니다.",
    category: "인권 존중",
    characterType: "bamboo",
    bgColor: "bg-[#EAFFD0]", // lime mint
    headerColor: "bg-[#4338CA]", // indigo
  },
];

// 라운드 2: 빈칸 채우기 퀴즈 (Punan ang mga Patlang)
export const ROUND2_FILL_BLANKS: BlankQuestion[] = [
  {
    id: 1,
    tag: "UNANG TANONG (제1문)",
    question: "체험지에서 대열을 놓쳤을 때 절대 당황해 돌아다니지 말고 실천해야 할 3원칙은 무엇일까요?",
    questionPrefix: "비상 상황 시 우리 담양여중 학생이 기억할 3원칙은 바로",
    blankDisplay: "_________________.",
    answer: "STOP - CALL - WAIT",
    answerDisplay: "_S_T_O_P_ - _C_A_L_L_ - _W_A_I_T_.",
    hint: "멈추기, 선생님께 전화하기, 안전한 곳에서 기다리기!",
    category: "비상 행동",
    characterType: "bamboo",
    bgColor: "bg-[#C2DDB6]",
    headerColor: "bg-[#E7625F]",
  },
  {
    id: 2,
    tag: "PANGALAWANG TANONG (제2문)",
    question: "보조배터리를 캐리어에 넣고 부치는 짐(위탁 수하물)으로 보내는 것은 허용될까요?",
    questionPrefix: "보조배터리를 화물칸 캐리어로 부치는 것은 화재 위험으로",
    blankDisplay: "_______________.",
    answer: "절대 불가 (기내 휴대만 가능)",
    answerDisplay: "_절_대_불_가_ (기내 휴대만 가능).",
    hint: "비행기 화물칸 화재를 막기 위해 위탁수하물은 엄격히 금지됩니다!",
    category: "항공 규정",
    characterType: "pilot",
    bgColor: "bg-[#F38181]",
    headerColor: "bg-[#54436B]",
  },
  {
    id: 3,
    tag: "PANGATLONG TANONG (제3문)",
    question: "실내에서 지진으로 땅이 흔들릴 때 책상 밑으로 몸을 숨기고 가장 먼저 보호해야 할 부위는?",
    questionPrefix: "낙하물로부터 부상을 방지하기 위해 가방이나 손으로 최우선 보호해야 할 곳은",
    blankDisplay: "________________________.",
    answer: "머리 (두부 보호)",
    answerDisplay: "_머_리_ (두부 보호).",
    hint: "가방, 방석 또는 두 손으로 단단히 감싸야 합니다.",
    category: "재난 안전",
    characterType: "party",
    bgColor: "bg-[#FCE38A]",
    headerColor: "bg-[#4338CA]",
  },
  {
    id: 4,
    tag: "IKAAPAT NA TANONG (제4문)",
    question: "상대방이 당황하여 명확히 거부 의사를 밝히지 못했을 때 이것을 동의로 간주할 수 있을까요?",
    questionPrefix: "성희롱·학교폭력 예방 수칙에서 '침묵'은 동의나 합의로 볼 수",
    blankDisplay: "________________________.",
    answer: "없다 (침묵은 동의가 아님)",
    answerDisplay: "_없_다_ (침묵은 동의가 아님).",
    hint: "명확한 거부를 하지 못했더라도 동의로 간주되지 않습니다.",
    category: "인권 존중",
    characterType: "question",
    bgColor: "bg-[#95E1D3]",
    headerColor: "bg-[#E7625F]",
  },
  {
    id: 5,
    tag: "PANLIMANG TANONG (제5문)",
    question: "해외에서 여권 분실이나 긴급 사건 발생 시 24시간 도움을 주는 외교부 기관의 이름은?",
    questionPrefix: "24시간 긴급 통역과 사건·사고 영사 지원을 제공하는 곳은",
    blankDisplay: "________________________.",
    answer: "영사콜센터 (+82-2-3210-0404)",
    answerDisplay: "_영_사_콜_센_터_ (+82-2-3210-0404).",
    hint: "전화번호: +82-2-3210-0404",
    category: "외교부 지원",
    characterType: "pilot",
    bgColor: "bg-[#C4DFAA]",
    headerColor: "bg-[#2B3A67]",
  },
];

// 7가지 탐방 목적 (문서 1페이지)
export const EXPLORATION_PURPOSES = [
  { id: 1, text: "좁은 지역 사회를 벗어나 더 큰 세상을 보기 위해", icon: "Globe" },
  { id: 2, text: "단체 생활을 통해 이기심을 버리고 서로 돕기 위해", icon: "Users" },
  { id: 3, text: "다양한 문화의 경험을 통해 시야를 넓히기 위해", icon: "Compass" },
  { id: 4, text: "세계의 발전상 및 역사 탐방을 통해 미래의 역군이 되기 위해", icon: "BookOpen" },
  { id: 5, text: "친구들과 유쾌하게 놀 줄 아는 방법을 배우고, 사랑하는 마음을 가지기 위해", icon: "Heart" },
  { id: 6, text: "집을 떠나 부모님 은혜에 다시 한번 감사하는 마음을 가지기 위해", icon: "Smile" },
  { id: 7, text: "참된 나를 찾고 소중한 사람으로 거듭나기 위해", icon: "Sparkles" },
];

// 체험학습 준비물 (문서 1페이지 원본 반영)
export const INITIAL_PACKING_ITEMS: PackingItem[] = [
  { id: 'p1', category: '필수서류', name: '여권 비상용 사본', detail: '사본 출력 후 담임선생님께 제출 및 본인 보관' },
  { id: 'p2', category: '의류', name: '간편복 & 잠옷', detail: '활동하기 편한 복장 및 잠옷 대용 옷 1벌' },
  { id: 'p3', category: '의류', name: '점퍼 및 여분의 겉옷', detail: '기온 변화 대비 비상 옷 준비 (심한 일교차 대비)' },
  { id: 'p4', category: '의류', name: '양말 (5켤레 이상)', detail: '매일 갈아신을 충분한 수량' },
  { id: 'p5', category: '의류', name: '속옷 (4벌 이상)', detail: '위생 관리를 위해 매일 갈아입기 필수' },
  { id: 'p6', category: '위생/보호', name: '모자 (차양 넓은 것)', detail: '야외 활동 시 햇빛 차단' },
  { id: 'p7', category: '위생/보호', name: '개인 세면도구', detail: '칫솔, 치약, 폼클렌징 (호텔 비치: 비누, 샴푸, 바디워시, 드라이어, 수건)' },
  { id: 'p8', category: '위생/보호', name: '자외선 차단제 (선크림)', detail: '강한 자외선으로 인한 피부 화상 방지' },
  { id: 'p9', category: '의약품', name: '멀미약 및 개인 상비약', detail: '정기 복용약 필수 지참, 멀미 심한 학생 사전 복용' },
  { id: 'p10', category: '기타편의', name: '슬리퍼', detail: '호텔 실내 이동 및 휴식용 편한 신발' },
  { id: 'p11', category: '기타편의', name: '비상용 우비 / 접이식 우산', detail: '우천 시 가방(배낭)까지 덮을 수 있는 넉넉한 크기' },
  { id: 'p12', category: '기타편의', name: '개인 편의 물품', detail: '보조배터리(규격 확인 필수), 필기도구, 용돈' },
];

// 일반 활동 15대 주의사항 (문서 2페이지)
export const GENERAL_SAFETY_RULES = [
  {
    num: 1,
    title: "선생님·안전요원 지도 준수 및 단독행동 금지",
    desc: "질서를 지키며 절대 대열을 이탈하지 않습니다. 단독 이동은 엄격히 금지됩니다.",
    category: "기본질서",
  },
  {
    num: 2,
    title: "불량 음식 및 과식 주의",
    desc: "낯선 환경과 기후 변화에서 배탈·식중독이 나지 않도록 길거리 음식 자제 및 위생 주의.",
    category: "보건위생",
  },
  {
    num: 3,
    title: "위험 장소 및 금지 구역 출입 금지",
    desc: "체험지 난간, 공사장, 수심 깊은 곳, 통제구역에 절대 접근하지 않습니다.",
    category: "안전수칙",
  },
  {
    num: 4,
    title: "보행 시 안전 제일 (우측보행 준수)",
    desc: "길을 건널 때는 절대 뛰지 않고 주위를 살피며 천천히 걷고 우측보행을 실천합니다.",
    category: "교통안전",
  },
  {
    num: 5,
    title: "숙소 및 공공 기물 애호",
    desc: "체험 시설과 호텔 물건을 소중히 다루며, 부주의로 파손 시 본인이 변상해야 합니다.",
    category: "시설이용",
  },
  {
    num: 6,
    title: "지정 시간 및 취침 시간 엄수",
    desc: "다음 날의 건강한 탐방 컨디션 유지를 위해 밤늦게 돌아다니지 않고 취침 시간을 지킵니다.",
    category: "기본질서",
  },
  {
    num: 7,
    title: "타인 물건 불손대 및 귀중품 본인 책임",
    desc: "친구 소지품에 함부로 손대지 않으며, 귀중품과 용돈은 스스로 철저히 간수합니다.",
    category: "소지품관리",
  },
  {
    num: 8,
    title: "호텔 퇴실 시 유실물 점검",
    desc: "침대 밑, 서랍, 콘센트 충전기 등 소지품을 꼼꼼히 확인하여 분실물이 없도록 합니다.",
    category: "소지품관리",
  },
  {
    num: 9,
    title: "단정하고 활동적인 복장 착용",
    desc: "학생다운 단정한 복장과 간편복을 권장하며, 과도한 화장이나 불편한 옷은 삼갑니다.",
    category: "생활예절",
  },
  {
    num: 10,
    title: "편안한 운동화 착용 (굽 높은 신발·쪼리 금지)",
    desc: "많이 걷는 탐방 특성상 편한 운동화나 샌들을 신으며, 높은 굽이나 쪼리는 안전상 절대 금지!",
    category: "안전수칙",
  },
  {
    num: 11,
    title: "환경 정화 및 공중도덕 준수",
    desc: "휴지, 페트병, 캔 등 쓰레기는 분리하여 휴지통에 넣고 한국 학생의 품격을 지킵니다.",
    category: "공중도덕",
  },
  {
    num: 12,
    title: "타인 배려 및 국가 이미지 제고",
    desc: "공공장소에서 큰 소리로 떠들지 않고 예의를 갖춰 대한민국과 학교의 명예를 빛냅니다.",
    category: "공중도덕",
  },
  {
    num: 13,
    title: "도착 해산 시 즉시 귀가",
    desc: "학교 도착 후 해산하면 다른 곳에 들르지 않고 부모님께 연락 후 즉시 집으로 귀가합니다.",
    category: "기본질서",
  },
  {
    num: 14,
    title: "근검절약 및 계획적 소비",
    desc: "용돈은 꼭 필요한 만큼만 지참·관리하며, 과도한 군것질이나 충동구매를 자제합니다.",
    category: "생활예절",
  },
  {
    num: 15,
    title: "금지 품목 소지 일체 금지",
    desc: "인화물질, 라이터, 칼/가위 등 흉기, 도박기구, 술, 담배, 지나치게 많은 현금은 절대 지참 불가!",
    category: "위험물관리",
  },
];

// 학교폭력 및 성희롱·성폭력 예방 수칙 (문서 2, 3페이지)
export const HARMONY_AND_RESPECT_RULES = {
  violence: [
    "상대방을 존중하며 인격적인 태도로 대합니다.",
    "서로의 신체·외모에 대해 놀리지 않으며, 싫어하는 별명은 부르지 않습니다.",
    "친구 사이에 바르고 고운 말을 쓰며, 비속어나 폭언을 하지 않습니다.",
    "물건이나 금전을 강제로 빌리거나 빼앗지 않습니다.",
    "타 학교 학생이나 관광객과 시비·언쟁을 벌이지 않고 역지사지의 자세로 이해합니다.",
  ],
  sexualHarassment: [
    "상대방의 인격을 존중하고 소중한 친구이자 동료로 대합니다.",
    "상대방을 성적인 관심의 대상으로 보거나 성차별적인 인식을 버립니다.",
    "불쾌하거나 불편한 언행을 겪었을 때는 즉시 '싫다/하지 마라'고 명확하게 거부 의사를 밝힙니다.",
    "의사를 표현했는데도 계속 치근거리거나 장난을 지속하면 지체 없이 선생님께 알립니다.",
    "상대방이 거부하거나 불쾌해하는 기색을 보이면 즉시 그 언행을 중단하고 사과합니다.",
    "명확한 거부 표현을 하지 못했다고 해서 동의하거나 합의한 것으로 간주되지 않습니다.",
  ],
};

// 시청각실 발표 슬라이드 전체 데이터 (가독성 극대화)
export const SLIDES_DATA: SlideContent[] = [
  {
    id: 'intro',
    chapter: 'CHAPTER 01',
    title: '2026 담양여중 글로컬 죽향 역사문화 탐방',
    subTitle: '안전하고 의미 있는 글로벌 배움 여행을 위한 사전 안전교육',
    category: '오리엔테이션',
    badge: '탐방 개요',
    keyPoints: [
      {
        title: '넓은 시야와 역사적 안목 함양',
        description: '좁은 지역 사회를 벗어나 더 큰 세상을 바라보며 세계 속 당당한 인재로 성장합니다.',
        highlight: true,
      },
      {
        title: '배려와 협동의 공동체 생활',
        description: '서로를 아끼고 챙기며 평생 기억에 남을 우정과 단체 생활의 지혜를 배웁니다.',
      },
      {
        title: '가장 소중한 나의 안전 지키기',
        description: '다치지 않고 건강하게 돌아오는 것이 이번 역사문화 탐방의 가장 중요한 목표입니다.',
        highlight: true,
      },
    ],
    tips: ['시청각실 집중 경청', '궁금한 점은 슬라이드 끝난 뒤 질의응답', '스마트폰 비상연락망 저장'],
  },
  {
    id: 'packing',
    chapter: 'CHAPTER 02',
    title: '체험학습 꼼꼼 짐싸기 가이드',
    subTitle: '빠짐없이 챙기고, 불필요한 물건은 비우는 스마트 패킹',
    category: '준비물 점검',
    badge: '필수 준비물',
    keyPoints: [
      {
        title: '여권 비상 사본 출력 필수',
        description: '담임선생님께 비상용 사본 1부를 제출하고, 본인도 별도 보관합니다.',
        highlight: true,
        tag: '필수 제출',
      },
      {
        title: '일교차 대비 겉옷 & 편한 신발',
        description: '심한 기온 변화를 막아줄 점퍼/바람막이와 발이 편한 운동화(굽 높은 신발·쪼리 금지).',
      },
      {
        title: '개인 상비약 & 위생 보건용품',
        description: '평소 복용하는 약, 멀미약, 자외선 차단제(선크림), 넉넉한 양말(5켤레+)과 속옷(4벌+).',
        highlight: true,
      },
      {
        title: '비상용 우비 또는 접이식 우산',
        description: '갑작스러운 비에 대비해 가방까지 감쌀 수 있는 우비/우산을 준비합니다.',
      },
    ],
    callout: {
      type: 'warning',
      title: '절대 가져오면 안 되는 금지 품목',
      content: '라이터, 인화성 스프레이, 칼/가위 등 위험 흉기, 도박기구, 술/담배, 과도한 현금(분실 위험).',
    },
    tips: ['모든 개인 소지품에 학번과 이름 적기', '호텔 어메니티 외 칫솔·치약·클렌징폼 챙기기'],
  },
  {
    id: 'airport',
    chapter: 'CHAPTER 03',
    title: '인천국제공항 집합 & 탑승수속 A to Z',
    subTitle: '설레는 첫 출발, 단체 출국에서 헤매지 않는 비법',
    category: '공항 & 수속',
    badge: '인천공항 수속',
    keyPoints: [
      {
        title: '정해진 시간 엄수 & 반별 대열 대기',
        description: '공항은 매우 혼잡하므로 개인행동을 절대 하지 말고 학급 대열에서 자리를 지킵니다.',
        highlight: true,
      },
      {
        title: '탑승권 및 여권 본인 직접 소지',
        description: '항공권 수령 후 좌석 번호(앞자리 1번부터, A~F열)를 확인하고 본인이 잘 보관합니다.',
      },
      {
        title: '보안검색대 통과 요령',
        description: '외투, 주머니 소지품, 가방을 바구니에 넣고 1명씩 통과한 후 바구니 물건을 꼭 챙깁니다.',
        highlight: true,
      },
      {
        title: '탑승구(Gate) 앞 집결',
        description: '보안 검색 후 지정된 게이트 앞에 모여 인솔 선생님의 안내에 따라 질서 있게 탑승합니다.',
      },
    ],
    callout: {
      type: 'info',
      title: '비행기 좌석 번호 읽는 법',
      content: '앞자리부터 1, 2, 3... 번호 순이며, 창가와 복도에 따라 A, B, C, D, E, F 알파벳으로 배치됩니다.',
    },
  },
  {
    id: 'battery-baggage',
    chapter: 'CHAPTER 04',
    title: '보조배터리 & 수하물 규정 완벽 마스터',
    subTitle: '부치는 짐(위탁)과 들고 타는 짐(기내)의 명확한 구분',
    category: '항공 규정',
    badge: '가장 빈번한 실수!',
    keyPoints: [
      {
        title: '보조배터리는 "부치는 짐(위탁)" 절대 금지!',
        description: '보조배터리를 캐리어에 넣고 부치면 화재 위험으로 적발되어 비행기 출발이 지연됩니다. 오직 기내 휴대만 가능!',
        highlight: true,
        tag: '위탁 불가',
      },
      {
        title: '용량 기준 (100Wh 이하 최대 5개)',
        description: '일반 스마트폰 보조배터리(20,000mAh 이하)는 약 74Wh로 별도 승인 없이 기내 휴대 가능합니다.',
      },
      {
        title: '단락(합선) 방지 3가지 조치 중 택1',
        description: '① 비닐봉지/개별 파우치 포장 ② 전극 단자에 절연테이프 부착 ③ 단자 보호용 캡 씌우기.',
        highlight: true,
      },
      {
        title: '기내 보관 위치 주의',
        description: '비행기 안에서 머리 위 짐칸(오버헤드빈)에 넣지 말고, 몸에 지니거나 앞좌석 주머니에 보관합니다.',
      },
    ],
    callout: {
      type: 'danger',
      title: '수하물 기내 반입 금지 물품',
      content: '칼, 가위, 손톱깎이 세트 내 칼날, 공구류, 라이터 등은 비행기 탑승 시 가지고 탈 수 없습니다.',
    },
  },
  {
    id: 'flight-bus',
    chapter: 'CHAPTER 05',
    title: '항공기 & 이동 버스 내 안전 수칙',
    subTitle: '기내 난기류 및 버스 이동 시 흔들림에 대처하는 자세',
    category: '이동 안전',
    badge: '교통 안전',
    keyPoints: [
      {
        title: '비행기 좌석벨트 상시 착용',
        description: '이·착륙 시는 물론, 비행 중에도 예고 없는 난기류(터뷸런스)에 대비해 안전띠를 맵니다.',
        highlight: true,
      },
      {
        title: '산소마스크 & 구명조끼 위치 파악',
        description: '탑승 직후 승무원의 안전 브리핑에 귀 기울이고 비상탈출구와 장구 위치를 확인합니다.',
      },
      {
        title: '버스 이동 중 전 좌석 안전벨트 착용',
        description: '버스가 완전히 멈출 때까지 절대 자리에서 일어나지 않으며, 차창 밖으로 손/머리 내밀기 금지.',
        highlight: true,
      },
      {
        title: '승하차 시 좌우 살피기 & 후진 차 주의',
        description: '내릴 때 뒤에서 오는 오토바이나 차량을 확인하고, 후진하는 대형 버스 뒤에 서 있지 않습니다.',
      },
    ],
    tips: ['멀미 학생은 출발 30분 전 복용 & 버스 앞자리 착석', '멀미 시 먼 창밖 응시 및 눈감고 안정 취하기'],
  },
  {
    id: 'lodging',
    chapter: 'CHAPTER 06',
    title: '숙소 생활 & 야간 안전 수칙',
    subTitle: '편안한 휴식과 모두의 프라이버시를 지키는 숙소 매너',
    category: '숙소 안전',
    badge: '호텔 생활',
    keyPoints: [
      {
        title: '개인 야간 외출 절대 금지',
        description: '낯선 도시의 밤거리는 매우 위험합니다. 밤에 숙소 밖으로 나가는 것은 엄격히 금지됩니다.',
        highlight: true,
        tag: '절대 금지',
      },
      {
        title: '임의로 방 바꾸지 않기',
        description: '비상 연락 및 인원 파악을 위해 담임선생님의 사전 허락 없이 배정된 방을 변경하지 않습니다.',
      },
      {
        title: '비상 탈출구 & 대피로 우선 확인',
        description: '방에 들어가면 객실 문 뒤편의 비상 대피도와 완강기, 비상계단 위치를 가장 먼저 확인합니다.',
        highlight: true,
      },
      {
        title: '난간·창틀 접근 금지 및 기물 파손 주의',
        description: '고층 호텔 창가나 발코니 난간에 기대거나 장난치지 않으며, 시설물은 깨끗이 사용합니다.',
      },
    ],
    callout: {
      type: 'info',
      title: '출발 전 10분 룸 체크 룰',
      content: '다음 날 아침 출발 10분 전까지 침구 정리, 충전기 및 소지품 확인, 방 정돈을 완료합니다.',
    },
  },
  {
    id: 'tour-activity',
    chapter: 'CHAPTER 07',
    title: '현장 견학 & 단체 활동 수칙',
    subTitle: '친구들과 다 함께 웃으며 즐기는 역사문화 탐방',
    category: '현장 활동',
    badge: '견학 수칙',
    keyPoints: [
      {
        title: '시간 엄수 (집합 5분 전 모이기)',
        description: '한 명의 지각이 전체 학생들의 소중한 탐방 일정을 지연시킵니다. 약속 시간을 꼭 지킵니다.',
        highlight: true,
      },
      {
        title: '친한 무리 짓기 NO, 함께 어울리기 YES',
        description: '특정 친구를 소외시키거나 배제하지 않고 학급 전체가 서로 챙겨주는 따뜻한 분위기를 만듭니다.',
      },
      {
        title: '위험 행동 및 돌발 행동 자제',
        description: '문화재 훼손, 위험한 사진 촬영(셀카)을 위한 난간 넘어가기, 출입 금지 구역 침범을 금합니다.',
        highlight: true,
      },
      {
        title: '비상 상황 시 즉시 선생님·가이드 호출',
        description: '몸이 아프거나 길을 잃었을 때는 혼자 해결하려 하지 말고 즉시 인솔자에게 연락합니다.',
      },
    ],
  },
  {
    id: 'health-sanitation',
    chapter: 'CHAPTER 08',
    title: '보건 위생 & 감염병·질병 예방',
    subTitle: '낯선 물과 기후에도 끄떡없는 건강 지키기',
    category: '보건 건강',
    badge: '위생 수칙',
    keyPoints: [
      {
        title: '비누로 30초 이상 손 씻기 생활화',
        description: '식사 전, 외출 후에는 흐르는 물에 비누로 손가락 사이와 손등을 깨끗이 씻습니다.',
        highlight: true,
      },
      {
        title: '길거리 음식·과식·자극적인 음식 자제',
        description: '낯선 환경에서 지나치게 맵거나 찬 음식(빙과류, 매운 라면 등)은 심한 배탈을 유발합니다.',
      },
      {
        title: '음식물·물병 개인 위생 철저',
        description: '친구와 컵이나 물병을 공유해 마시지 않으며, 침방울을 통한 감염병 전파를 차단합니다.',
      },
      {
        title: '호흡기 증상 발생 시 즉시 마스크 착용',
        description: '발열이나 기침 증상이 있을 경우 즉시 마스크를 착용하고 담임선생님께 알립니다.',
        highlight: true,
      },
    ],
  },
  {
    id: 'respect-violence',
    chapter: 'CHAPTER 09',
    title: '학교폭력 & 성희롱 예방, 존중의 약속',
    subTitle: '서로를 아끼는 마음이 담양여중의 가장 큰 자부심입니다',
    category: '인권 & 존중',
    badge: '행복한 동행',
    keyPoints: [
      {
        title: '상호 존중과 바른 언어 사용',
        description: '외모나 신체에 대한 놀림, 싫어하는 별명 부르기, 장난을 빙자한 폭언을 하지 않습니다.',
        highlight: true,
      },
      {
        title: '신체 접촉 경계 존중 & 성적 대상화 금지',
        description: '친구를 동등하고 소중한 인격체로 존중하며, 불필요한 신체 접촉이나 성적 농담을 금합니다.',
      },
      {
        title: '불편할 땐 명확하게 거부 의사 표현',
        description: '불편한 언행을 겪었을 때는 "하지 마", "싫어"라고 말하고, 지속되면 즉시 선생님께 알립니다.',
        highlight: true,
      },
      {
        title: '침묵은 동의가 아닙니다',
        description: '거부 의사를 명확히 표현하지 못하는 상황일지라도 상대방이 동의한 것으로 간주되지 않습니다.',
      },
    ],
    callout: {
      type: 'warning',
      title: '갈등 없는 여행을 위한 마음가짐',
      content: '피곤하면 누구나 예민해질 수 있습니다. "너 때문에" 대신 "우리 같이", 역지사지의 마음으로 배려합시다.',
    },
  },
  {
    id: 'disaster-earthquake',
    chapter: 'CHAPTER 10',
    title: '지진 & 화재 등 비상 재난 대처법',
    subTitle: '당황하지 않고 골든타임을 지키는 실전 행동 요령',
    category: '재난 안전',
    badge: '재난 대응',
    keyPoints: [
      {
        title: '지진 실내: 책상 밑 대피 & 머리 보호',
        description: '흔들림이 시작되면 즉시 튼튼한 탁자 아래로 들어가 몸을 숨기고 가방이나 손으로 머리를 보호합니다.',
        highlight: true,
      },
      {
        title: '지진 실외: 낙하물 없는 넓은 공터로 이동',
        description: '간판, 유리창, 전봇대, 건물 외벽 근처는 파편 추락 위험이 높으므로 넓은 공터로 대피합니다.',
      },
      {
        title: '화재 발생 시: 젖은 손수건 & 낮은 자세',
        description: '연기를 들이마시지 않도록 코와 입을 젖은 수건으로 막고 낮은 자세로 비상계단을 통해 대피합니다.',
        highlight: true,
      },
      {
        title: '엘리베이터 탑승 절대 금지',
        description: '정전으로 갇힐 위험이 있으므로 재난 시에는 오직 계단만을 이용하여 대피합니다.',
      },
    ],
  },
  {
    id: 'emergency-sos',
    chapter: 'CHAPTER 11',
    title: '위급 상황 학생 SOS 행동 매뉴얼',
    subTitle: '길을 잃었을 때, 아플 때, 분실했을 때 기억할 3원칙',
    category: '비상 매뉴얼',
    badge: 'STOP · CALL · WAIT',
    keyPoints: [
      {
        title: '1단계 [STOP] 자리에 멈추기',
        description: '대열을 놓쳤을 때 혼자 길을 찾겠다고 이리저리 돌아다니면 더 멀어집니다. 안전한 장소에 멈춥니다.',
        highlight: true,
        tag: '멈춤',
      },
      {
        title: '2단계 [CALL] 즉시 담임선생님께 연락',
        description: '저장된 담임선생님 휴대폰 또는 가이드에게 전화하여 현재 위치(주변 간판, 랜드마크)를 알립니다.',
        highlight: true,
        tag: '연락',
      },
      {
        title: '3단계 [WAIT] 안내받은 장소에서 대기',
        description: '선생님이 도착할 때까지 다른 곳으로 이동하지 않고 안내원/경찰이 있는 안전한 자리에서 기다립니다.',
        highlight: true,
        tag: '대기',
      },
    ],
    callout: {
      type: 'success',
      title: '비상연락망 저장 필수',
      content: '담임교사 휴대전화, 인솔 대표교사, 여행사 안전 가이드, 영사콜센터(+82-2-3210-0404)를 폰에 저장하세요!',
    },
  },
];

// 학생 골든벨 퀴즈 (문서 내용 기반 6문항)
export const SAFETY_QUIZZES: QuizQuestion[] = [
  {
    id: 1,
    question: "보조배터리는 화재 위험 때문에 비행기에 부치는 짐(위탁 캐리어)에 넣어야 한다?",
    options: ["그렇다 (O)", "아니다 (X)"],
    correctIndex: 1,
    explanation: "정답은 X입니다! 보조배터리는 화재 발생 시 기내에서 즉각 진화할 수 있도록 '오직 들고 타는 기내 휴대'만 가능하며, 부치는 짐(위탁수하물)에는 절대 넣을 수 없습니다!",
    category: "항공수하물",
  },
  {
    id: 2,
    question: "숙소에 도착했을 때 가장 먼저 해야 할 안전 수칙으로 가장 올바른 것은?",
    options: [
      "마음에 드는 다른 방 친구와 임의로 방을 바꾼다.",
      "객실 문 뒤의 비상 대피로와 완강기 위치를 확인한다.",
      "짐을 풀고 바로 호텔 밖으로 야간 외출을 나간다.",
      "발코니 난간에 기대어 바깥 경치 사진을 찍는다."
    ],
    correctIndex: 1,
    explanation: "정답은 2번입니다! 숙소 입실 시 비상 탈출구와 대피로를 확인하는 것이 가장 중요합니다. 임의 방 변경, 야간 외출, 난간 접근은 모두 안전상 엄격히 금지됩니다.",
    category: "숙소안전",
  },
  {
    id: 3,
    question: "체험지에서 대열을 놓치고 길을 잃었을 때 올바른 'SOS 3단계' 행동 요령은?",
    options: [
      "당황해서 혼자 여기저기 뛰어다니며 친구들을 찾는다.",
      "멈추고(STOP) -> 담임선생님께 연락하고(CALL) -> 안전한 곳에서 대기한다(WAIT).",
      "지나가는 낯선 사람의 차를 얻어타고 숙소로 간다.",
      "스마트폰 배터리를 아끼기 위해 전원을 끄고 혼자 걸어간다."
    ],
    correctIndex: 1,
    explanation: "정답은 2번입니다! 대열 이탈 시 무작정 돌아다니면 찾기 더 어려워집니다. 안전한 곳에 멈추고(STOP), 즉시 선생님께 전화로 위치를 알린 뒤(CALL), 지시받은 자리에서 대기(WAIT)해야 합니다.",
    category: "비상대응",
  },
  {
    id: 4,
    question: "학교폭력 및 성희롱 예방을 위한 우리 담양여중 학생들의 태도로 옳지 않은 것은?",
    options: [
      "친한 사이라도 싫어하는 별명이나 외모 지적은 하지 않는다.",
      "상대방이 불쾌한 기색을 보이면 '장난인데 왜 그래'라며 계속 놀린다.",
      "불쾌하거나 부당한 언행을 겪었을 때는 분명하게 거부 의사를 밝힌다.",
      "상대방을 동등한 인격체이자 소중한 탐방 동료로 존중한다."
    ],
    correctIndex: 1,
    explanation: "정답은 2번입니다! 장난이라는 이유로 상대방이 싫어하는 언행을 반복하는 것은 학교폭력 및 성희롱이 될 수 있습니다. 상대방이 거부하면 즉시 중단하고 배려해야 합니다.",
    category: "인권존중",
  },
  {
    id: 5,
    question: "보조배터리를 비행기에 갖고 탈 때 단락(합선)을 방지하는 올바른 방법이 아닌 것은?",
    options: [
      "1개씩 분리하여 비닐봉투나 보호 파우치에 넣는다.",
      "전극 단자 부분에 절연 테이프를 붙여 보호한다.",
      "단자 보호용 캡을 부착한다.",
      "단자 부분에 쇠붙이나 클립을 함께 묶어 보관한다."
    ],
    correctIndex: 3,
    explanation: "정답은 4번입니다! 금속 쇠붙이나 열쇠, 클립 등이 단자에 닿으면 합선(단락)으로 인해 과열이나 화재가 발생할 수 있습니다. 절연 테이프, 캡, 개별 파우치를 이용해야 합니다.",
    category: "보조배터리",
  },
  {
    id: 6,
    question: "견학 장소나 실내에서 지진 흔들림이 발생했을 때 가장 먼저 취해야 할 행동은?",
    options: [
      "빨리 밖으로 나가기 위해 엘리베이터를 탄다.",
      "책상이나 탁자 밑으로 몸을 숨기고 가방이나 손으로 머리를 보호한다.",
      "창문이나 대형 조명 바로 밑으로 달려간다.",
      "친구들과 손을 잡고 큰 소리로 소리를 지른다."
    ],
    correctIndex: 1,
    explanation: "정답은 2번입니다! 지진 시에는 낙하물로 인한 두부 손상이 가장 위험하므로 책상 밑으로 들어가 머리를 최우선으로 보호해야 합니다. 엘리베이터 탑승은 절대 금지입니다.",
    category: "재난대응",
  },
];

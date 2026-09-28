import React, { useState, useEffect } from 'react';
import {
  CheckSquare,
  Square,
  Sparkles,
  Printer,
  Plus,
  Trash2,
  RotateCcw,
  CheckCircle2,
  Info
} from 'lucide-react';
import { INITIAL_PACKING_ITEMS, PackingItem } from '../data/safetyData';
import mascotBamboo from '../assets/images/bamboo_monster_hero_1790597455932.jpg';

export const PackingChecklist: React.FC = () => {
  const [items, setItems] = useState<PackingItem[]>(() => {
    const saved = localStorage.getItem('damyang_packing_items');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_PACKING_ITEMS;
      }
    }
    return INITIAL_PACKING_ITEMS;
  });

  const [activeCategory, setActiveCategory] = useState<string>('전체');
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState<PackingItem['category']>('기타편의');

  useEffect(() => {
    localStorage.setItem('damyang_packing_items', JSON.stringify(items));
  }, [items]);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    const newItem: PackingItem = {
      id: `custom-${Date.now()}`,
      category: newItemCategory,
      name: newItemName.trim(),
      detail: '학생 직접 추가 품목',
      checked: false,
    };

    setItems((prev) => [...prev, newItem]);
    setNewItemName('');
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const resetAll = () => {
    if (window.confirm('체크리스트를 기본 상태로 초기화하시겠습니까?')) {
      setItems(INITIAL_PACKING_ITEMS);
    }
  };

  const checkedCount = items.filter((i) => i.checked).length;
  const progressPercent = items.length > 0 ? Math.round((checkedCount / items.length) * 100) : 0;

  const categories = ['전체', '필수서류', '의류', '위생/보호', '의약품', '기타편의'];

  const filteredItems =
    activeCategory === '전체'
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-900 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-block bg-[#E76F51] text-white px-3 py-1 rounded-full font-typewriter text-xs font-bold shadow-xs">
            SMART PACKING LIST · 체험학습 꼼꼼 짐 싸기
          </div>
          <h1 className="font-dohyeon text-3xl sm:text-4xl text-[#2B3A67] tracking-tight">
            2026 글로컬 죽향 패킹 체크리스트
          </h1>
          <p className="font-jua text-sm text-slate-700">
            학교 공식 배부 안내문에 수록된 필수 준비물을 하나씩 체크하며 완벽하게 챙겨보세요!
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-4 py-2.5 font-dohyeon text-sm text-slate-900 bg-[#F9D342] hover:bg-[#FBE068] rounded-2xl border-2 border-slate-900 shadow-md transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>프린트 출력</span>
          </button>
          <button
            onClick={resetAll}
            className="flex items-center gap-1.5 px-3 py-2.5 font-jua text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-2xl border border-slate-300 transition-colors"
            title="초기화"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>초기화</span>
          </button>
        </div>
      </div>

      {/* Progress Card */}
      <div className="bg-white rounded-3xl border-4 border-slate-900 p-6 space-y-3 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-dohyeon text-lg text-slate-900">내 가방 패킹 완료율</span>
            <span className="font-jua text-xs text-slate-500">
              ({checkedCount} / {items.length}개 완료)
            </span>
          </div>
          <span className="font-dohyeon text-3xl text-[#E76F51] tabular-nums">
            {progressPercent}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden border-2 border-slate-900 p-0.5">
          <div
            className="h-full bg-gradient-to-r from-[#F9D342] to-[#E76F51] transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {progressPercent === 100 ? (
          <div className="flex items-center gap-2 font-jua text-sm text-emerald-700 pt-1">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>준비 완료! 즐겁고 안전한 글로컬 역사문화 탐방 출발 준비 끝! 🎉</span>
          </div>
        ) : (
          <p className="font-jua text-xs text-slate-600 pt-1">
            💡 여권 비상 사본(담임선생님 보관용)과 일교차 대비 겉옷을 꼭 챙기세요!
          </p>
        )}
      </div>

      {/* Hotel Amenity Notice Callout */}
      <div className="bg-amber-50 border-3 border-slate-900 rounded-2xl p-4 sm:p-5 flex items-start gap-3 shadow-md">
        <Info className="w-6 h-6 shrink-0 text-[#E76F51] mt-0.5" />
        <div className="font-jua text-xs sm:text-sm text-slate-800 leading-relaxed">
          <strong className="font-dohyeon text-base block mb-0.5 text-[#2B3A67]">
            호텔 비치 물품 vs 개별 준비물 구분 안내
          </strong>
          호텔 객실에 <strong>비누, 샴푸, 바디워시, 헤어드라이어, 수건</strong>이 비치되어 있으므로,
          학생 여러분은 <strong>개인 칫솔, 치약, 폼클렌징</strong>만 개별 파우치에 챙기시면 됩니다.
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 font-jua text-sm rounded-xl border-2 transition-all whitespace-nowrap ${
              activeCategory === cat
                ? 'bg-[#2B3A67] text-white border-slate-900 shadow-md font-bold'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Checklist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`p-4 rounded-2xl border-3 transition-all cursor-pointer flex items-start justify-between gap-3 ${
              item.checked
                ? 'bg-emerald-50/80 border-emerald-400 text-slate-400'
                : 'bg-white border-slate-900 shadow-md hover:translate-y-[-2px] text-slate-800'
            }`}
          >
            <div className="flex items-start gap-3">
              <button
                type="button"
                className="mt-0.5 shrink-0"
              >
                {item.checked ? (
                  <CheckSquare className="w-5 h-5 text-emerald-600" />
                ) : (
                  <Square className="w-5 h-5 text-slate-400" />
                )}
              </button>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-dohyeon text-base ${
                      item.checked ? 'line-through text-slate-400' : 'text-slate-900'
                    }`}
                  >
                    {item.name}
                  </span>
                  <span className="font-typewriter text-[10px] px-2 py-0.5 rounded-md bg-slate-100 border border-slate-300 text-slate-600">
                    {item.category}
                  </span>
                </div>
                <p className="font-jua text-xs text-slate-600">{item.detail}</p>
              </div>
            </div>

            {item.id.startsWith('custom-') && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeItem(item.id);
                }}
                className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                title="삭제"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Add Custom Item Form */}
      <form
        onSubmit={handleAddItem}
        className="bg-white border-4 border-slate-900 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-3 shadow-xl"
      >
        <span className="font-dohyeon text-sm text-[#2B3A67] shrink-0">나만의 준비물 추가:</span>
        <select
          value={newItemCategory}
          onChange={(e) => setNewItemCategory(e.target.value as PackingItem['category'])}
          className="bg-slate-100 font-jua text-xs text-slate-800 px-3 py-2.5 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-slate-800"
        >
          <option value="기타편의">기타편의</option>
          <option value="의류">의류</option>
          <option value="위생/보호">위생/보호</option>
          <option value="의약품">의약품</option>
          <option value="필수서류">필수서류</option>
        </select>
        <input
          type="text"
          placeholder="예: 안경 케이스, 유선 이어폰, 카메라, 비상 용돈..."
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          className="flex-1 w-full bg-slate-100 font-jua text-sm text-slate-900 px-4 py-2 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-slate-800"
        />
        <button
          type="submit"
          className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#F9D342] hover:bg-[#FBE068] text-slate-900 font-dohyeon text-base rounded-xl border-2 border-slate-900 shadow-md transition-all whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          <span>추가하기</span>
        </button>
      </form>
    </div>
  );
};

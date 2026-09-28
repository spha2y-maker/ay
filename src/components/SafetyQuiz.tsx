import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Trophy,
  ArrowRight,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { SAFETY_QUIZZES } from '../data/safetyData';

export const SafetyQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const question = SAFETY_QUIZZES[currentQuestionIndex];
  const totalQuestions = SAFETY_QUIZZES.length;

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    const isCorrect = selectedOption === question.correctIndex;
    if (isCorrect) setScore((prev) => prev + 1);
    setUserAnswers((prev) => [...prev, selectedOption]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsFinished(false);
    setUserAnswers([]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title */}
      <div className="space-y-2 border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
          <Trophy className="w-4 h-4" />
          <span>시청각실 실시간 복습 & 평가</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          글로컬 죽향 안전 골든벨 퀴즈
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          오늘 배운 안전 수칙과 비상 매뉴얼을 퀴즈를 통해 완벽하게 기억해 보세요!
        </p>
      </div>

      {!isFinished ? (
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
          {/* Progress Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 text-emerald-400">
              문제 {currentQuestionIndex + 1} / {totalQuestions} · {question.category}
            </span>
            <span className="text-xs font-bold text-slate-400 tabular-nums">
              현재 점수: <strong className="text-emerald-400">{score}</strong>점
            </span>
          </div>

          {/* Question Text */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">Q{currentQuestionIndex + 1}.</span>
            <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
              {question.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-3 pt-2">
            {question.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrectAnswer = idx === question.correctIndex;

              let optionStyle = 'bg-slate-800/80 border-slate-700/80 text-slate-200 hover:bg-slate-700/80';
              if (isSelected) {
                optionStyle = 'bg-emerald-600/30 border-emerald-500 text-white font-medium';
              }
              if (isAnswerSubmitted) {
                if (isCorrectAnswer) {
                  optionStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold';
                } else if (isSelected && !isCorrectAnswer) {
                  optionStyle = 'bg-rose-950/60 border-rose-500 text-rose-200';
                } else {
                  optionStyle = 'bg-slate-900/50 border-slate-800 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start justify-between gap-3 text-sm sm:text-base ${optionStyle}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{opt}</span>
                  </div>
                  {isAnswerSubmitted && isCorrectAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation if submitted */}
          {isAnswerSubmitted && (
            <div
              className={`p-4 rounded-xl border space-y-1.5 transition-all ${
                selectedOption === question.correctIndex
                  ? 'bg-emerald-950/40 border-emerald-700/60 text-emerald-200'
                  : 'bg-rose-950/40 border-rose-700/60 text-rose-200'
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-sm">
                {selectedOption === question.correctIndex ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>정답입니다! 👏</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-400" />
                    <span>아쉽네요! 해설을 확인하세요.</span>
                  </>
                )}
              </div>
              <p className="text-xs sm:text-sm leading-relaxed opacity-95">
                {question.explanation}
              </p>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-2 flex justify-end">
            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm ${
                  selectedOption === null
                    ? 'opacity-40 cursor-not-allowed bg-slate-800 text-slate-500'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                }`}
              >
                정답 확인하기
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm"
              >
                <span>{currentQuestionIndex < totalQuestions - 1 ? '다음 문제로' : '결과 확인하기'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-8 text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-emerald-600/20 text-emerald-400 mx-auto flex items-center justify-center">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              골든벨 퀴즈 완료
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {score === totalQuestions
                ? '🏆 만점 달성! 담양여중 안전 리더!'
                : score >= 4
                ? '👏 훌륭해요! 안전 지킴이 수료!'
                : '💪 다시 한번 복습하고 안전을 지켜요!'}
            </h2>
            <p className="text-base text-slate-300">
              총 {totalQuestions}문제 중 <strong className="text-emerald-400 font-bold">{score}문제</strong>를 맞히셨습니다.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 max-w-md mx-auto text-xs sm:text-sm text-slate-300">
            "안전한 역사문화 탐방은 사소한 수칙을 지키는 나의 작은 실천에서 시작됩니다."
          </div>

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors shadow-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span>퀴즈 다시 풀기</span>
          </button>
        </div>
      )}
    </div>
  );
};

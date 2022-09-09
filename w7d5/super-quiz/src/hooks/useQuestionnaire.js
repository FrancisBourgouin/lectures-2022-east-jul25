import { questionsSource } from "../data/questionData";
import { useState } from "react";
import useWow from "./useWow";

export default function useQuestionnaire() {
  const { sayWow } = useWow();

  const [questions, setQuestions] = useState(questionsSource);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  const validateAnswer = (formData) => {
    const isGoodAnswer = currentQuestion.answer === formData.answer;
    isGoodAnswer && setScore(score + 1);
    isGoodAnswer && sayWow();
    setCurrentQuestionIndex((currentQuestionIndex + 1) % questions.length);
  };

  const addQuestion = (formData) => {
    const newQuestion = { ...formData, id: questions.length };

    setQuestions([...questions, newQuestion]);
  };

  return { currentQuestion, score, validateAnswer, addQuestion };
}

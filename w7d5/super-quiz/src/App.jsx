import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import QuestionForm from "./components/QuestionForm";
import NewQuestionForm from "./components/NewQuestionForm";
import { useState } from "react";
import useQuestionnaire from "./hooks/useQuestionnaire";

function App() {
  const [mode, setMode] = useState("play");
  const { currentQuestion, score, validateAnswer, addQuestion } = useQuestionnaire();

  // 13 % 4 => 9 => 5 => 1

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <button onClick={() => setMode("play")}>Play!</button>
          <button onClick={() => setMode("edit")}>Edit!</button>
        </section>
        {mode === "play" && (
          <section>
            <h1>Current score is : {score}</h1>
            <QuestionForm onSubmit={validateAnswer} question={currentQuestion.question} />
          </section>
        )}
        {mode === "edit" && (
          <section>
            <NewQuestionForm onSubmit={addQuestion} />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;

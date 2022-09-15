import { useEffect, useState } from "react";
import { determineWinner, pickOppositeEmoji } from "../helpers/gameHelpers";
import Computer from "./Computer";
import Player from "./Player";
import Result from "./Result";

export default function Game(props) {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const startGame = (option) => {
    setPlayerChoice(option);

    const oppositeChoice = pickOppositeEmoji(option);
    setComputerChoice(oppositeChoice);
  };

  useEffect(() => {
    if (playerChoice && computerChoice) {
      const showResult = setTimeout(() => {
        const newResult = determineWinner(playerChoice, computerChoice);
        setResult(newResult);
      }, 1000);

      return () => clearTimeout(showResult);
    }
  }, [playerChoice, computerChoice]);
  return (
    <div>
      <main className="game">
        <Computer />
        <Player selectOption={startGame} playerChoice={playerChoice} />
      </main>
      <Result result={result} />
    </div>
  );
}

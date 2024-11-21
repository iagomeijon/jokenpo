import { useState, useEffect, useCallback } from "react";
import IUseGame from "./interfaces";

function useGame(): IUseGame {
  const [scoreValue, setScoreValue] = useState<number>(0);
  const [playerSelect, setPlayerSelect] = useState<number>(-1);
  const [pcSelect, setPcSelect] = useState<number>(-2);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<number>(0);

  const handleSelectOption = (selectedValeu: number) => {
    setPlayerSelect(selectedValeu);

    setIsLoading(true);
    setTimeout(() => {
      selectPcValue();
    }, 3000);
  };

  const selectPcValue = () => {
    setPcSelect(Math.floor(Math.random() * 3));
    setIsLoading(false);
  };

  const resetGame = () => {
    setPlayerSelect(-1);
    setPcSelect(-2);
    setResult(0);
    setIsLoading(false);
  };

  const checkWinner = useCallback(() => {
    if (playerSelect === pcSelect) {
      setResult(3);
      return;
    }

    const isPlayerWinnerComb =
      (playerSelect === 0 && pcSelect === 2) ||
      (playerSelect === 1 && pcSelect === 0) ||
      (playerSelect === 2 && pcSelect === 1);

    if(pcSelect !== -1 && playerSelect !== -1) {
        if (isPlayerWinnerComb) {
            setResult(1); 
            setScoreValue((prev) => prev + 1); 
          } else {
            setResult(2); 
          }
    }
  }, [pcSelect, playerSelect]);

  useEffect(() => {
    checkWinner();
  }, [checkWinner, pcSelect]);

  return {
    states: {
      scoreValue,
      isLoading,
      result,
      pcSelect,
      playerSelect,
    },
    actions: {
      resetGame,
      handleSelectOption,
    },
  };
}

export default useGame;

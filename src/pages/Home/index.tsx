import {useState, useEffect} from 'react';
import './styles.scss';
import Score from '../../components/Score';
import Board from '../../components/Board';
import Footer from '../../components/Footer';

function Home() {

  const [scoreValue, setScoreValue]  =  useState<number>(0);
  const [playerSelect, setPlayerSelect] = useState<number>(-1);
  const [pcSelect, setPcSelect] =  useState<number>(-1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<number>(0);
  const [turn, setTurn] = useState<number>(0);


  const handleSelectOption = (selectedValeu: number) => {

    setPlayerSelect(selectedValeu);

    setTurn(1);

    setIsLoading(true);
    setTimeout(() => {
      selectPcValue();
    }, 3000);

  }

  const selectPcValue = () => {
    setPcSelect(Math.floor(Math.random() * 3));
    setIsLoading(false);
  }

  const resetGame = () => {
    setPlayerSelect(-1);
    setPcSelect(-1);
    setTurn(0);
    setResult(0);
    setIsLoading(false);
  }

  const checkWinner = () => {

    if(playerSelect === 0 && pcSelect === 0) {
        setResult(3);
    }

    else if(playerSelect === 1 && pcSelect === 1) {
      setResult(3);
    }

    else if(playerSelect === 2 && pcSelect === 2) {
      setResult(3);
    }

    else if(playerSelect === 0 && pcSelect === 2) {
      setResult(1);
      setScoreValue(_prev => _prev + 1);
    }

    else if(playerSelect === 2 && pcSelect === 0) {
      setResult(2);
    }

    else if(playerSelect === 1 && pcSelect === 0) {
      setResult(1);
      setScoreValue(_prev => _prev + 1);
    }

    else if(playerSelect === 0 && pcSelect === 1) {
      setResult(2);
    }


    else if(playerSelect === 2 && pcSelect === 0) {
      setResult(1);
      setScoreValue(_prev => _prev + 1);
    }

    else if(playerSelect === 1 && pcSelect === 2) {
      setResult(2);
    }


  };

  useEffect(() => {
    checkWinner();
  }, [pcSelect]);

  return (
    <div className="Home">
      <Score currentScore={scoreValue} />
      <Board handleSelectOption={handleSelectOption} pcSelect={pcSelect} playerSelect={playerSelect}/>
      <Footer resetGame={resetGame} isLoading={isLoading} result={result} pcSelect={pcSelect}/>
    </div>
  );
}

export default Home;

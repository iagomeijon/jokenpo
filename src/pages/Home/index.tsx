import {useState} from 'react';
import './styles.scss';
import Score from '../../components/Score';
import Board from '../../components/Board';

function Home() {

  const [playerSelect, setPlayerSelect] = useState<number>(-1);
  const [pcSelect, setPcSelect] =  useState<number>(-1);
  const [turn, setTurn] = useState<number>(0);


  const handleSelectOption = (selectedValeu: number) => {

    setPlayerSelect(selectedValeu);

    setTurn(1);

    setTimeout(() => {
      selectPcValue();
    }, 3000);

  }

  const selectPcValue = () => {
    setPcSelect(Math.floor(Math.random() * 3));
  }

  const resetGame = () => {
    setPlayerSelect(-1);
    setPcSelect(-1);
    setTurn(0);
  }

  return (
    <div className="Home">
      <Score currentScore={0} />
      <Board handleSelectOption={handleSelectOption} pcSelect={pcSelect} playerSelect={playerSelect}/>
    </div>
  );
}

export default Home;
